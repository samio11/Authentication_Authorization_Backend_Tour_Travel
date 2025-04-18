import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
  NODE_ENV: process.env.NODE_ENV,
  bcrypt_salt: process.env.BCRYPT_SALT,
  jwt_secret: process.env.JWT_SECRET,
};
