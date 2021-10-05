/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import 'express-async-errors';
import jwt from 'jsonwebtoken';
import { validationRequest } from '../middlewares/validation-request';
import { User } from '../models/user';
import { BadRequestError } from '../utils/errors/bad-request-error';

const router = Router();

router.post(
  '/api/users/signup',
  [
    body('firstName').isLength({ min: 2, max: 30 }),
    body('lastName').isLength({ min: 2, max: 30 }),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must not be empty'),
    body('phoneNumber')
      .isMobilePhone('any')
      .withMessage('Phone number must be provided'),
    body('role').optional().isLength({ min: 4, max: 20 }),
    body('address.street')
      .notEmpty()
      .withMessage('Street for address is required'),
    body('address.city').notEmpty().withMessage('City for address is required'),
    body('address.state')
      .notEmpty()
      .withMessage('State for address is required'),
    body('profilePic').optional().isBase64(),
    body('isChefVerified').isBoolean().optional().default(false),
  ],
  validationRequest,
  async (req: Request, res: Response) => {
    const userBody = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      role: req.body.role,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
      },
    };

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      throw new BadRequestError('Email already taken');
    }

    const user = User.build(userBody);
    await user.save();

    // GENERATE WEB TOKEN
    const userJwt = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.JWT_KEY!,
    );

    // STORE IN SESSION OBJECT
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send({ user });
  },
);

export { router as signupRouter };
