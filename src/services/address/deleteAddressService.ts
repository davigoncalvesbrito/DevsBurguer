import { Address } from '../../models/address';

export const deleteAddressService = async (
  addressId: string,
): Promise<Address | null> => {
  try {
    const address = await Address.findByPk(addressId);
    if (address) {
      await address.destroy();
      return address;
    }
    return null;
  } catch (error) {
    throw new Error(`Erro ao deletar endereço: ${error}`);
  }
};
