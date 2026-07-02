import { Router } from 'express';

import Paths from '@src/common/constants/paths';
import healthRouter from '@src/modules/health/health.routes';
import offerRouter from '@src/modules/offers/offer.routes';

/******************************************************************************
                                Setup
******************************************************************************/

/**
 * Central API router. Mounts every feature module. It is itself mounted under
 * "Paths.Base" (/api) in "@src/server".
 */
const apiRouter = Router();

apiRouter.use(Paths.Health.Base, healthRouter);
apiRouter.use(Paths.Offers.Base, offerRouter);

/******************************************************************************
                                Export
******************************************************************************/

export default apiRouter;
