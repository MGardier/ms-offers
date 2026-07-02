import logger from 'jet-logger';

import databaseConfig from '@src/app/config/database.config';

/******************************************************************************
                                Sequelize
******************************************************************************/

/**
 * Placeholder for the Sequelize instance.
 *
 * Sequelize is not installed/configured yet. This module keeps a single entry
 * point so the rest of the app can depend on a stable API today, and only this
 * file changes once the ORM is added.
 *
 * TODO:
 *   1. `npm i sequelize pg pg-hstore`
 *   2. Instantiate Sequelize from "databaseConfig".
 *   3. Register the models (see "@src/modules/offers/offer.model").
 *   4. Replace the stub below with `await sequelize.authenticate()`.
 *
 * IMPORTANT: never use `sequelize.sync({ force: true })` or
 * `sequelize.sync({ alter: true })`. Schema changes go through migrations.
 */
export async function connectDatabase(): Promise<void> {
  // TODO: replace with a real Sequelize connection.
  logger.info(
    `Database connection not wired yet (target: ` +
      `${databaseConfig.host}:${databaseConfig.port.toString()}/` +
      `${databaseConfig.database}).`,
  );
  await Promise.resolve();
}
