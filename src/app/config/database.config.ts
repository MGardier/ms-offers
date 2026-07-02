/******************************************************************************
                                Database config
******************************************************************************/

/**
 * PostgreSQL connection settings for the future Sequelize integration.
 *
 * NOTE: values are read from the environment with safe defaults so the service
 * can boot before the database is wired. These are NOT yet validated through
 * "jetEnv" on purpose: the ".env" files do not define them yet and we don't
 * want to crash the process while the DB layer is still a placeholder.
 *
 * TODO: once Sequelize/PostgreSQL is set up, promote these to required env
 * variables validated in "@src/app/config/env".
 */
/* eslint-disable no-process-env */
export const databaseConfig = {
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  database: process.env.DB_NAME ?? 'ms_offers',
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  dialect: 'postgres' as const,
} as const;
/* eslint-enable no-process-env */

export type DatabaseConfig = typeof databaseConfig;

export default databaseConfig;
