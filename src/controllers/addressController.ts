import { Request, Response } from 'express';
import { AddressService } from '../services/addressService';
import { formatAddress } from '../utils/formatted/formatAddress'; // Função de formatação para Address

const addressService = new AddressService();

export class AddressController {
  // Método para adicionar um endereço a um usuário
  static async addAddressToUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const addressData = req.body;
      const address = await addressService.addAddressToUser(Number(userId), addressData);
      const formattedAddress = formatAddress(address);

      res.status(201).json({
        message: 'Endereço adicionado com sucesso',
        address: formattedAddress,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // Método para atualizar um endereço existente
  static async updateAddress(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const addressData = req.body;
      const updatedAddress = await addressService.updateAddress(id, addressData);

      if (updatedAddress) {
        const formattedAddress = formatAddress(updatedAddress);
        res.status(200).json({
          message: 'Endereço atualizado com sucesso',
          address: formattedAddress,
        });
      } else {
        res.status(404).json({ message: 'Endereço não encontrado para atualização' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao atualizar endereço', error: error.message });
    }
  }

  // Método para deletar um endereço
  static async deleteAddress(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedAddress = await addressService.deleteAddress(id);

      if (deletedAddress) {
        const formattedAddress = formatAddress(deletedAddress);
        res.status(200).json({
          message: 'Endereço deletado com sucesso',
          address: formattedAddress,
        });
      } else {
        res.status(404).json({ message: 'Endereço não encontrado para deleção' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao deletar endereço', error: error.message });
    }
  }
}
