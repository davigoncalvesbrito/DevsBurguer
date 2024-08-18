import { Address } from '../../models/address';

export const updateAddressService = async (
  addressId: string,
  addressData: Partial<Address>,
): Promise<Address | null> => {
  try {
    const address = await Address.findByPk(addressId);
    if (address) {
      await address.update(addressData);
      return address;
    }
    return null;
  } catch (error) {
    throw new Error(
      `Erro ao atualizar Endereço: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
