/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/errors/custom-error';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): unknown => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [
      {
        message: 'Something went wrong',
      },
    ],
  });
};
