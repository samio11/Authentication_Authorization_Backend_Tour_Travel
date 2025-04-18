import { Router } from 'express';
import { userRoutes } from '../module/user/user.routes';
import { authRoute } from '../module/auth/auth.routes';

const route = Router();

const moduleRoutes = [
  {
    path: '/user',
    element: userRoutes,
  },
  {
    path: '/auth',
    element: authRoute,
  },
];

moduleRoutes.forEach((x) => route.use(x.path, x.element));

export default route;
