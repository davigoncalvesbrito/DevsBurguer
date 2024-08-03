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
  } catch (error: any) {
    throw new Error(`Erro ao atualizar usuário: ${error.message}`);
  }
};
