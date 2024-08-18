import { Request, Response } from 'express';
import { updateAddressService } from '../../services/address/updateAddressService';
import { formatAddress } from '../../utils/formatted/formatAddress'; // Função de formatação para Address
import { CreateAddressInput } from '../../utils/types';

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const addressData = req.body as CreateAddressInput; // Usando a interface
    const updatedAddress = await updateAddressService(id, addressData);

    if (updatedAddress) {
      const formattedAddress = formatAddress(updatedAddress);
      res.status(200).json({
        message: 'Endereço atualizado com sucesso',
        address: formattedAddress,
      });
    } else {
      res.status(404).json({ message: 'Endereço não encontrado para atualização' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar endereço', error });
  }
};
