import { Request, Response } from 'express';

import HttpStatusCodes from '@src/common/constants/http-status-codes';

/******************************************************************************
                              Middleware
******************************************************************************/

/**
 * Catch-all for unmatched routes. Registered after the API router and before
 * the error middleware.
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(HttpStatusCodes.NOT_FOUND).json({
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

export default notFoundMiddleware;
