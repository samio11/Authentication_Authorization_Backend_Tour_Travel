import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/get-user', auth('admin'), userController.getAllUser);
router.get('/get-user/:id', userController.getAUser);
router.delete('/delete-user', userController.deleteAUser);
router.put('/update-user', userController.updateAUser);

export const userRoutes = router;
