import { CustomError } from './custom-error';

export class NotFoundRoute extends CustomError {
  statusCode = 404;
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundRoute.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: 'Not Found' }];
  }
}
