import offerRepository, { OfferRepository } from './offer.repository';
import { CreateOfferDto, Offer, UpdateOfferDto } from './dto/offer.types';

/******************************************************************************
                                Service
******************************************************************************/

/**
 * Business logic for offers. Must not depend on Express (no Request/Response).
 * Delegates persistence to the repository.
 */
export class OfferService {
  public constructor(private readonly repository: OfferRepository) {}

  public findAll(): Promise<Offer[]> {
    return this.repository.findAll();
  }

  public findById(id: number): Promise<Offer | null> {
    return this.repository.findById(id);
  }

  public create(data: CreateOfferDto): Promise<Offer | null> {
    return this.repository.create(data);
  }

  public update(id: number, data: UpdateOfferDto): Promise<Offer | null> {
    return this.repository.update(id, data);
  }

  public delete(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}

export const offerService = new OfferService(offerRepository);

export default offerService;
