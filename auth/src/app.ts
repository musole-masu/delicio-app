import express from 'express';
import { json } from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { signupRouter } from './routes/signup-router';
import { signinRouter } from './routes/signin-router';
import { signoutRouter } from './routes/signout-router';
import { currentUserRouter } from './routes/current-user-router';
import { errorHandler } from './middlewares/error-response-handler';
import { NotFoundRoute } from './utils/errors/not-found-route';

const app = express();

app.set('trust proxy', true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  }),
);

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

app.all('*', async () => {
  throw new NotFoundRoute();
});
app.use(errorHandler);

export { app };
