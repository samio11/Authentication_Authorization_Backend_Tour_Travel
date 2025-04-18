import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const notFound = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    error: '',
  });
};
