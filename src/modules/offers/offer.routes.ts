import { Router } from 'express';

import Paths from '@src/common/constants/paths';

import offerController from './offer.controller';

/******************************************************************************
                                Routes
******************************************************************************/

const offerRouter = Router();

offerRouter.get('/', offerController.findAll);
offerRouter.get(Paths.Offers.ById, offerController.findById);
offerRouter.post('/', offerController.create);
offerRouter.put(Paths.Offers.ById, offerController.update);
offerRouter.delete(Paths.Offers.ById, offerController.remove);

export default offerRouter;
