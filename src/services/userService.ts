import { User } from '../models/user'; // Importe o modelo de usuário
import { CreateUserInput } from '../utils/types';
import { Address } from '../models/address';
export class UserService {
  // Método para criar um novo usuário
  async createUser(data: CreateUserInput): Promise<User> {
    try {
      // Cria um usuário com os dados fornecidos
      const newUser = await User.create({
        name: data.name,
        phone: data.phone,
        password: data.password,
      });

      return newUser;
    } catch (error: any) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  // Método para obter um usuário por ID
  async getUser(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id, {
        include: [{ model: Address, as: 'addresses' }], // Inclui endereços no resultado
      });
      return user;
    } catch (error: any) {
      throw new Error(`Erro ao buscar usuário: ${error.message}`);
    }
  }

  // Método para obter todos os usuários
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll({
        include: [{ model: Address, as: 'addresses' }], // Inclui endereços no resultado
      });
      return users;
    } catch (error: any) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  // Método para atualizar um usuário existente
  async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.update(data);
        return user;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  // Método para deletar um usuário
  async deleteUser(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        return user;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }
}
