import { Request, Response } from 'express';
import { deleteAddressService } from '../../services/address/deleteAddressService';
import { formatAddress } from '../../utils/formatted/formatAddress'; // Função de formatação para Address

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedAddress = await deleteAddressService(id);

    if (deletedAddress) {
      const formattedAddress = formatAddress(deletedAddress);
      res.status(200).json({
        message: 'Endereço deletado com sucesso',
        address: formattedAddress,
      });
    } else {
      res.status(404).json({ message: 'Endereço não encontrado para deleção' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar endereço', error });
  }
};
