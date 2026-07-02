import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import Paths from '@src/common/constants/paths';
import errorMiddleware from '@src/common/middlewares/error.middleware';
import notFoundMiddleware from '@src/common/middlewares/not-found.middleware';
import apiRouter from '@src/routes';

import { EnvVars, NodeEnvs } from './config/env';

/******************************************************************************
                                Setup
******************************************************************************/

const app = express();

// **** Middleware **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.DEV) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.PRODUCTION) {
  app.use(helmet());
}

// **** Routes **** //

// Mount the API under "/api"
app.use(Paths.Base, apiRouter);

// **** Error handling **** //

// 404 for unmatched routes (must be after the router)
app.use(notFoundMiddleware);

// Central error handler (must be last)
app.use(errorMiddleware);

/******************************************************************************
                                Export default
******************************************************************************/

export default app;
