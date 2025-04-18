import { Response } from 'express';

type TSendResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | T[] | null;
};

export const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  return res.status(data?.statusCode).json({
    success: true,
    message: data?.message,
    data: data?.data,
  });
};
