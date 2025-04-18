import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../interfaces/errors';
import { ZodError } from 'zod';
import { handleZodError } from '../errors/handleZodError';
import { handleCastError } from '../errors/handleCastError';
import { handleValidationError } from '../errors/handleValidationError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';
import config from '../config';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = 500;
  let message = 'something wrong...';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'server error',
    },
  ];
  if (err instanceof ZodError) {
    const x = handleZodError(err);
    statusCode = x.statusCode;
    message = x.message;
    errorSources = x.errorSources;
  } else if (err?.name === 'CastError') {
    const x = handleCastError(err);
    statusCode = x.statusCode;
    message = x.message;
    errorSources = x.errorSources;
  } else if (err?.name === 'ValidationError') {
    const x = handleValidationError(err);
    statusCode = x.statusCode;
    message = x.message;
    errorSources = x.errorSources;
  } else if (err?.codes === 11000) {
    const x = handleDuplicateError(err);
    statusCode = x.statusCode;
    message = x.message;
    errorSources = x.errorSources;
  } else if (err instanceof AppError) {
    statusCode = 400;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};
