/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { validationRequest } from '../middlewares/validation-request';
import { User } from '../models/user';
import { BadRequestError } from '../utils/errors/bad-request-error';
import { PasswordUtil } from '../utils/password/passwordUtil';
import jwt from 'jsonwebtoken';

const router = Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must not be empty'),
  ],
  validationRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }
    const didPasswordMatch = await PasswordUtil.compare(
      existingUser.password,
      password,
    );
    if (!didPasswordMatch) {
      throw new BadRequestError('Invalid credentials');
    }
    // GENERATE WEB TOKEN
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
      },
      process.env.JWT_KEY!,
    );

    // STORE IN SESSION OBJECT
    req.session = {
      jwt: userJwt,
    };
    res.status(200).send(existingUser);
  },
);

export { router as signinRouter };
