import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

// Rotas para CRUD de usuários
router.post('/users', UserController.createUser); // Rota para criar usuário
router.get('/users/:id', UserController.getUser); // Rota para obter usuário por ID
router.get('/users', UserController.getAllUsers); // Rota para obter todos os usuários
router.put('/users/:id', UserController.updateUser); // Rota para atualizar usuário
router.delete('/users/:id', UserController.deleteUser); // Rota para deletar usuário

export default router;
