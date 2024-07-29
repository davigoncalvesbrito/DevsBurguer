import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { userValidator } from '../middlewares/user/userValidator';

const router = Router();

/***  ROTAS GET  ***/
router.get('/users/:id', UserController.getUser); // Rota para obter usuário por ID
router.get('/users', UserController.getAllUsers); // Rota para obter todos os usuários

/***  ROTAS POST  ***/
router.post('/users', userValidator, UserController.createUser); // Rota para criar usuário

/***  ROTAS PUT  ***/
router.put('/users/:id', userValidator, UserController.updateUser); // Rota para atualizar usuário

/***  ROTAS DELETE  ***/
router.delete('/users/:id', UserController.deleteUser); // Rota para deletar usuário

export default router;
