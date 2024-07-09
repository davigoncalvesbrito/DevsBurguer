import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, phone, password,  address,  } = req.body;
    const user = await userService.createUser({ name, phone, password,  address, });
    res.status(201).json({
        message: 'Usuário cadastrado com sucesso',
        user
      }); // Retorna a mensagem de sucesso e o usuário criado
  }

  static async getUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getUser(id);
    if (user) {
      res.status(200).json({message: 'Usuario encontrado', user});
    } else {
      res.status(404).json({ message: 'Id fornecido não existe ou não encontrado' });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    if (users.length > 0) {
      res.status(200).json({
        message: 'Usuários listados com sucesso',
        users
      });
    } else {
      res.status(404).json({ message: 'Usuários não encontrados' });
    }
  }
}
  

