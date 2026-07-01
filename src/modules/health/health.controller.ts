import { Request, Response } from 'express';

import HttpStatusCodes from '@src/common/constants/http-status-codes';

/******************************************************************************
                              Controller
******************************************************************************/

/**
 * GET /api/health — liveness probe for the ms-offers service.
 */
function getHealth(_req: Request, res: Response): void {
  res.status(HttpStatusCodes.OK).json({
    status: 'ok',
    service: 'ms-offers',
  });
}

export default { getHealth } as const;
