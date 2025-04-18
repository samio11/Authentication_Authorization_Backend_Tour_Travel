import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const getAUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const updateUser = async (id: string, payload: IUser) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
  getAUser,
  deleteUser,
  updateUser,
};
