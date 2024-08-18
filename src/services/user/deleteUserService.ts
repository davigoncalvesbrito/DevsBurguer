import { User } from '../../models/user';

export const deleteUserService = async (id: string): Promise<User | null> => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
    return null;
  } catch (error) {
    throw new Error(
      `Erro ao deletar Usuário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
