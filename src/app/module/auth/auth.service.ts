import config from '../../config';
import { IUser } from '../user/user.interface';
import User from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const login = async (payload: IUser) => {
  const foundUser = await User.findOne({ email: payload.email });
  if (!foundUser) {
    throw new Error('the user is not found...');
  }
  const foundUserStatus = foundUser.userStatus;
  if (foundUserStatus === 'inactive') throw new Error('User is blocked');
  const foundUserPasswordMatch = await bcrypt.compare(
    payload.password,
    foundUser.password,
  );
  console.log(foundUserPasswordMatch);
  if (!foundUserPasswordMatch) throw new Error('Password invalid');
  const jwtPayload = {
    email: foundUser.email,
    role: foundUser.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: '2d',
  });
  return { token, foundUser };
};

export const authServices = { register, login };
