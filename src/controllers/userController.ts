import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { CreateUserInput } from '../utils/types';

const userService = new UserService();

export class UserController {
  // Método para criar um novo usuário
  static async createUser(req: Request, res: Response) {
    try {
      const { name, phone, password, address } = req.body as CreateUserInput;
      const user = await userService.createUser({
        name,
        phone,
        password,
        address,
      });

      res.status(201).json({
        message: 'Usuário cadastrado com sucesso',
        user,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // Método para obter um usuário por ID
  static async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.getUser(id);
      if (user) {
        res.status(200).json({ message: 'Usuário encontrado', user });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  // Método para obter todos os usuários
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({ message: 'Usuários listados com sucesso', users });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  }

  // Método para atualizar um usuário existente
  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, phone, password, address } = req.body;
      const updatedUser = await userService.updateUser(id, {
        name,
        phone,
        password,
        address,
      });

      if (updatedUser) {
        res.status(200).json({
          message: 'Usuário atualizado com sucesso',
          user: updatedUser,
        });
      } else {
        res
          .status(404)
          .json({ message: 'Usuário não encontrado para atualização' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  // Método para deletar um usuário
  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.deleteUser(id);

      if (deletedUser) {
        res
          .status(200)
          .json({ message: 'Usuário deletado com sucesso', user: deletedUser });
      } else {
        res
          .status(404)
          .json({ message: 'Usuário não encontrado para deleção' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao deletar usuário', error: error.message });
    }
  }
}
