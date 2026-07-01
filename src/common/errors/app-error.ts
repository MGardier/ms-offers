import { ParseError } from 'jet-validators/utils';

import HttpStatusCodes from '@src/common/constants/http-status-codes';

/******************************************************************************
                                 Classes
******************************************************************************/

/**
 * Base application error carrying an HTTP status code alongside the message.
 * Any error thrown by the domain layers should extend this so the error
 * middleware can translate it into a proper HTTP response.
 */
export class AppError extends Error {
  public status: HttpStatusCodes;

  public constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
}

/**
 * Resource not found (404).
 */
export class NotFoundError extends AppError {
  public constructor(message = 'Resource not found') {
    super(HttpStatusCodes.NOT_FOUND, message);
  }
}

/**
 * Handle "parseObject" errors coming from request validation.
 */
export class ValidationError extends AppError {
  public static MESSAGE =
    'The parseObject() function discovered one or more errors.';

  public constructor(errors: ParseError[]) {
    const msg = JSON.stringify({
      message: ValidationError.MESSAGE,
      errors,
    });
    super(HttpStatusCodes.BAD_REQUEST, msg);
  }
}
