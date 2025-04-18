import { TErrorSources, TGenericError } from '../interfaces/errors';

export const handleDuplicateError = (err: any): TGenericError => {
  const match = err?.message?.match(/"([^"]*)"/);
  const extractedMessage = match & match[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid-> duplicate error',
    errorSources,
  };
};
