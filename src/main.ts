import logger from 'jet-logger';

import { EnvVars } from './app/config/env';
import server from './server';
import { sequelize } from './app/database/sequelize';

/******************************************************************************
                                Constants
******************************************************************************/

const SERVER_START_MESSAGE =
  'Express server started on port: ' + EnvVars.Port.toString();

/******************************************************************************
                                  Run
******************************************************************************/


async function bootstrap() {
  try {

    // Database connection
    await sequelize.authenticate();
    logger.info('Database connection established');


    // HTTP server management
    if (EnvVars.EnableHttpServer) {
      const httpServer = server.listen(EnvVars.Port, () => {
        logger.info(SERVER_START_MESSAGE);
      });

      httpServer.on('error', (err) => {
        logger.err(err.message);
      });
    } else 
    {
      logger.info('HTTP server disabled');
    }


  } catch (err) {
    const error = err as Error;
    logger.err(`Application failed to start: ${error.message}`);
    process.exit(1);
  }
}


bootstrap();
