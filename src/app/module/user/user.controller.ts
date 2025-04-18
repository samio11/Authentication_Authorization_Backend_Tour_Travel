import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await userServices.createUser(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User created Done',
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUser();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User Data fetched',
    data: result,
  });
});

const getAUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.getAUser(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User fetching a data',
    data: result,
  });
});
const deleteAUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.deleteUser(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User Deleted ',
    data: result,
  });
});

const updateAUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.updateUser(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User Updated Done',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
};
