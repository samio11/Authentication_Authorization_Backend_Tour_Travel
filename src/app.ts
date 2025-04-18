import express, { Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
import route from './app/routes';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', route);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'server is running successfully' });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
