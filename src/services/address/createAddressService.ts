import { Address } from '../../models/address';
import { User } from '../../models/user';

export const createAddressService = async (
  userId: number,
  addressData: Partial<Address>,
): Promise<Address> => {
  try {
    // Verifica se o usuário existe
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Cria o endereço associado ao usuário
    const address = await Address.create({ ...addressData, userId });
    return address;
  } catch (error) {
    throw new Error(`Erro ao adicionar endereço: ${error}`);
  }
};
