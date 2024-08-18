import { hash } from 'bcrypt';
import { User } from '../../models/user';
import { CreateUserInput } from '../../utils/types';

export const createUserService = async (data: CreateUserInput): Promise<User> => {
  try {
    const { password, ...restData } = data;

    const hashedPassword = await hash(password, 8);

    const newUser = await User.create({
      ...restData,
      password: hashedPassword,
    });

    return newUser;
  } catch (error) {
    throw new Error(
      `Erro ao criar Usuário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
