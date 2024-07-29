import { Address } from '../models/address';
import { User } from '../models/user';

export class AddressService {
  // Método para adicionar um endereço a um usuário
  async addAddressToUser(
    userId: number,
    addressData: Partial<Address>,
  ): Promise<Address> {
    try {
      // Verifica se o usuário existe
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      // Cria o endereço associado ao usuário
      const address = await Address.create({ ...addressData, userId });
      return address;
    } catch (error: any) {
      throw new Error(`Erro ao adicionar endereço: ${error.message}`);
    }
  }

  // Método para atualizar um endereço existente
  async updateAddress(
    addressId: string,
    addressData: Partial<Address>,
  ): Promise<Address | null> {
    try {
      const address = await Address.findByPk(addressId);
      if (address) {
        await address.update(addressData);
        return address;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao atualizar endereço: ${error.message}`);
    }
  }

  // Método para deletar um endereço
  async deleteAddress(addressId: string): Promise<Address | null> {
    try {
      const address = await Address.findByPk(addressId);
      if (address) {
        await address.destroy();
        return address;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao deletar endereço: ${error.message}`);
    }
  }
}
