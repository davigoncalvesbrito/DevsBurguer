import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, phone, password, address } = req.body;
      const user = await userService.createUser({
        name,
        phone,
        password,
        address,
      });

      // Remove a senha do objeto de usuário antes de enviar a resposta
      const { password: userPassword, ...userWithoutPassword } = user;

      res.status(201).json({
        message: 'Usuário cadastrado com sucesso',
        user: userWithoutPassword, // Retorna o usuário sem o campo 'password'
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.getUser(id);
      if (user) {
        // Remove a senha do objeto de usuário antes de enviar a resposta
        const { password: userPassword, ...userWithoutPassword } = user;
        res
          .status(200)
          .json({ message: 'Usuário encontrado', user: userWithoutPassword });
      } else {
        res
          .status(404)
          .json({ message: 'Id fornecido não existe ou não encontrado' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();

      // Remove a senha de todos os usuários antes de enviar a resposta
      const usersWithoutPasswords = users.map((user) => {
        const { password: userPassword, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });

      if (usersWithoutPasswords.length > 0) {
        res.status(200).json({
          message: 'Usuários listados com sucesso',
          users: usersWithoutPasswords,
        });
      } else {
        res.status(404).json({ message: 'Usuários não encontrados' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  }

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
        // Remove a senha do objeto de usuário atualizado antes de enviar a resposta
        const { password: userPassword, ...userWithoutPassword } = updatedUser;
        res.status(200).json({
          message: 'Usuário atualizado com sucesso',
          user: userWithoutPassword,
        });
      } else {
        res.status(404).json({
          message:
            'Id fornecido não existe ou usuário não encontrado para atualização',
        });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.deleteUser(id);
      if (deletedUser) {
        // Remove a senha do objeto de usuário deletado antes de enviar a resposta
        const { password: userPassword, ...userWithoutPassword } = deletedUser;
        res.status(200).json({
          message: 'Usuário deletado com sucesso',
          user: userWithoutPassword,
        });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao deletar usuário', error: error.message });
    }
  }
}
