import { CreateOfferDto, Offer, UpdateOfferDto } from './types';

/******************************************************************************
                              Repository
******************************************************************************/

/**
 * Data-access layer for offers. It knows nothing about Express or HTTP.
 *
 * The methods are async and already shaped for Sequelize. Until the ORM is
 * wired (see "@src/database/sequelize"), they return empty placeholders.
 *
 * TODO: replace the stub bodies with Sequelize queries on "OfferModel".
 */
export class OfferRepository {
  public async findAll(): Promise<Offer[]> {
    // TODO: return OfferModel.findAll();
    return Promise.resolve([]);
  }

  public async findById(_id: number): Promise<Offer | null> {
    // TODO: return OfferModel.findByPk(_id);
    return Promise.resolve(null);
  }

  public async create(_data: CreateOfferDto): Promise<Offer | null> {
    // TODO: return OfferModel.create(_data);
    return Promise.resolve(null);
  }

  public async update(
    _id: number,
    _data: UpdateOfferDto,
  ): Promise<Offer | null> {
    // TODO: update then return the fresh row.
    return Promise.resolve(null);
  }

  public async delete(_id: number): Promise<boolean> {
    // TODO: return (await OfferModel.destroy({ where: { id: _id } })) > 0;
    return Promise.resolve(false);
  }
}

export const offerRepository = new OfferRepository();

export default offerRepository;
