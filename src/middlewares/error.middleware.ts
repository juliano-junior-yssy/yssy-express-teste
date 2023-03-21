import { ApiError } from '@errors/api.error';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.message ?? 'Internal Server Error';
  return res.status(statusCode).json({ message });
};
