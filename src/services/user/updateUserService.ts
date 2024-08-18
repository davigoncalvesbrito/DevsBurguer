import { User } from '../../models/user';

export const updateUserService = async (
  id: string,
  data: Partial<User>,
): Promise<User | null> => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    return null;
  } catch (error) {
    throw new Error(
      `Erro ao atualizar Usuário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
