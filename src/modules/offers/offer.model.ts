import { Offer } from './types';

/******************************************************************************
                                Model
******************************************************************************/

/**
 * Future Sequelize model for the "offers" table.
 *
 * Sequelize is not installed yet, so this file only documents the intended
 * shape. Once the ORM is added, replace the constant below with a real
 * `Model`/`init` definition and register it in "@src/database/sequelize".
 *
 * TODO (Sequelize):
 *   export class OfferModel extends Model<Offer> implements Offer { ... }
 *   OfferModel.init({ ... }, { sequelize, tableName: 'offers' });
 *
 * IMPORTANT: schema evolution must go through migrations — never
 * `sequelize.sync({ force: true })` nor `sequelize.sync({ alter: true })`.
 */
export const OFFER_TABLE_NAME = 'offers';

export type OfferAttributes = Offer;
