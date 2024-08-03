import { User } from '../../models/user';
import { Address } from '../../models/address';

export const getAllUsersService = async (): Promise<User[]> => {
  try {
    const users = await User.findAll({
      include: [{ model: Address, as: 'addresses' }],
    });
    return users;
  } catch (error: any) {
    throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
  }
};
