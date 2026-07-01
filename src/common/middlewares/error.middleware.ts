import { NextFunction, Request, Response } from 'express';
import logger from 'jet-logger';

import HttpStatusCodes from '@src/common/constants/http-status-codes';
import { AppError } from '@src/common/errors/app-error';
import EnvVars, { NodeEnvs } from '@src/config/env';

/******************************************************************************
                              Middleware
******************************************************************************/

/**
 * Central Express error handler. Must be registered last, after all routes.
 * Translates "AppError" instances into their HTTP status; everything else
 * becomes a generic 500.
 */
export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  // "next" is required for Express to treat this as an error handler.
  _next: NextFunction,
): void {
  if (EnvVars.NodeEnv !== NodeEnvs.TEST) {
    logger.err(err, true);
  }

  if (err instanceof AppError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  res
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: 'Internal server error' });
}

export default errorMiddleware;
