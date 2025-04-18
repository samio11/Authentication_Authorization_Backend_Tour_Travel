import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { authServices } from './auth.service';

const login = catchAsync(async (req, res) => {
  const result = await authServices.login(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const authController = { login };
