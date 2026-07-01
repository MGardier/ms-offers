import { NextFunction, Request, Response } from 'express';

import HttpStatusCodes from '@src/common/constants/http-status-codes';

import offerService from './offer.service';
import { CreateOfferDto, UpdateOfferDto } from './types';

/******************************************************************************
                              Controller
******************************************************************************/

/**
 * HTTP layer for offers. Reads params/query/body, calls the service and shapes
 * the HTTP response. No data-access logic here.
 */

// GET /api/offers
async function findAll(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const data = await offerService.findAll();
    res.status(HttpStatusCodes.OK).json({ data });
  } catch (err) {
    next(err);
  }
}

// GET /api/offers/:id
async function findById(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = Number(req.params.id);
    const data = await offerService.findById(id);
    res.status(HttpStatusCodes.OK).json({ data });
  } catch (err) {
    next(err);
  }
}

// POST /api/offers
async function create(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const data = await offerService.create(req.body as CreateOfferDto);
    res.status(HttpStatusCodes.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
}

// PUT /api/offers/:id
async function update(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = Number(req.params.id);
    const data = await offerService.update(id, req.body as UpdateOfferDto);
    res.status(HttpStatusCodes.OK).json({ data });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/offers/:id
async function remove(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const id = Number(req.params.id);
    const deleted = await offerService.delete(id);
    res.status(HttpStatusCodes.OK).json({ data: { deleted } });
  } catch (err) {
    next(err);
  }
}

export default { findAll, findById, create, update, remove } as const;
