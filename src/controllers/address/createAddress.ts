import { Request, Response } from 'express';
import { createAddressService } from '../../services/address/createAddressService';
import { formatAddress } from '../../utils/formatted/formatAddress'; // Função de formatação para Address
import { CreateAddressInput } from '../../utils/types';

export const createAddress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const addressData = req.body as CreateAddressInput; // Usando a interface
    const address = await createAddressService(Number(userId), addressData);
    const formattedAddress = formatAddress(address);

    res.status(201).json({
      message: 'Endereço adicionado com sucesso',
      address: formattedAddress,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
