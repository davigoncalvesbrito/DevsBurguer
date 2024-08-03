import { Router } from 'express';
import { createUser } from '../controllers/user/createUser';
import { getUser } from '../controllers/user/getUser';
import { getAllUsers } from '../controllers/user/getAllUser';
import { updateUser } from '../controllers/user/updateUser';
import { deleteUser } from '../controllers/user/deleteUser';
import { userValidator } from '../middlewares/user/userValidator';

const userRouter = Router();

/***  ROTAS GET  ***/
userRouter.get('/users/:id', getUser); // Rota para obter usuário por ID
userRouter.get('/users', getAllUsers); // Rota para obter todos os usuários

/***  ROTAS POST  ***/
userRouter.post('/users', userValidator, createUser); // Rota para criar usuário

/***  ROTAS PUT  ***/
userRouter.put('/users/:id', userValidator, updateUser); // Rota para atualizar usuário

/***  ROTAS DELETE  ***/
userRouter.delete('/users/:id', deleteUser); // Rota para deletar usuário

export default userRouter;
