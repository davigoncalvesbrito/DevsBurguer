import { User } from '../../models/user';
import { Address } from '../../models/address';

export const getUserService = async (id: string): Promise<User | null> => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Address, as: 'addresses' }],
    });
    return user;
  } catch (error) {
    throw new Error(
      `Erro ao buscar Usuário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
