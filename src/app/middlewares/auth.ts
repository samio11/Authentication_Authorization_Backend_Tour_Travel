import config from '../config';
import { TUserRole } from '../module/user/user.interface';
import User from '../module/user/user.model';
import { catchAsync } from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) throw new Error('Not Authorize User');
    const decoded = jwt.verify(
      token,
      config.jwt_secret as string,
    ) as JwtPayload;
    const { email, role } = decoded;
    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new Error('Invalid user & email');
    if (foundUser.userStatus === 'inactive')
      throw new Error('Invalid user bcz its blocked');
    if (requiredRoles && !requiredRoles.includes(role))
      throw new Error('Access denied');
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
