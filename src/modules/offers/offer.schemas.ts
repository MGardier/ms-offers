import { isNumber, isOptionalString, isString } from 'jet-validators';
import { Schema } from 'jet-validators/utils';

import parseReq from '@src/common/utils/parse-req';

/******************************************************************************
                                Schemas
******************************************************************************/

/**
 * Validation schemas for the offers endpoints, built on "jet-validators" so we
 * avoid adding an extra dependency. Each schema pairs with "parseReq" to throw
 * a "ValidationError" (400) on invalid input.
 */

// Body when creating an offer.
const createOfferSchema = {
  title: isString,
  company: isString,
  location: isOptionalString,
  description: isOptionalString,
} satisfies Schema;

// Body when updating an offer (all fields optional).
const updateOfferSchema = {
  title: isOptionalString,
  company: isOptionalString,
  location: isOptionalString,
  description: isOptionalString,
} satisfies Schema;

// Route param ":id".
const offerIdSchema = {
  id: isNumber,
} satisfies Schema;

/******************************************************************************
                                Parsers
******************************************************************************/

export const parseCreateOffer = parseReq(createOfferSchema);
export const parseUpdateOffer = parseReq(updateOfferSchema);
export const parseOfferId = parseReq(offerIdSchema);
