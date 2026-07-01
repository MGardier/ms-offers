import { Router } from 'express';

import healthController from './health.controller';

/******************************************************************************
                                Routes
******************************************************************************/

const healthRouter = Router();

healthRouter.get('/', healthController.getHealth);

export default healthRouter;
