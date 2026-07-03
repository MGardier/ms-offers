/******************************************************************************
                                Types
******************************************************************************/

/**
 * Domain representation of a job offer.
 *
 * NOTE: kept intentionally small for now. It will grow alongside the Sequelize
 * model (see "offer.model.ts").
 */
export interface Offer {
  id: number;
  title: string;
  company: string;
  location: string | null;
  description: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

/**
 * Payload accepted to create an offer.
 */
export type CreateOfferDto = Pick<Offer, 'title' | 'company'> &
  Partial<Pick<Offer, 'location' | 'description'>>;

/**
 * Payload accepted to update an offer (all fields optional).
 */
export type UpdateOfferDto = Partial<CreateOfferDto>;
