import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.post('/add/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);
router.get('/users', UserController.getAllUsers);


export default router;
