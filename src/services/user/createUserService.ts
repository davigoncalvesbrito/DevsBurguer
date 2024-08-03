import { User } from '../../models/user';
import { CreateUserInput } from '../../utils/types';

export const createUserService = async (data: CreateUserInput): Promise<User> => {
  try {
    const newUser = await User.create({
      name: data.name,
      phone: data.phone,
      password: data.password,
    });
    return newUser;
  } catch (error: any) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }
};
