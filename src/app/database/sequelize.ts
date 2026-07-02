import { Sequelize } from 'sequelize';
import { logger } from '../config/logger';
import { EnvVars } from '../config/env';


export const sequelize = new Sequelize(EnvVars.DatabaseUrl, {
  dialect: 'postgres',
  logging:
    EnvVars.NodeEnv === 'development'
      ? (sql) => logger.debug({ sql }, 'sequelize query')
      : false,
});