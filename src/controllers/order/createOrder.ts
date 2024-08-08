import { Request, Response } from 'express';
import { createOrderService } from '../../services/orderService';
import { Address } from '../../models/address';
import { isUUID } from 'validator';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, orderItems, addressId } = req.body;

    if (!userId || !orderItems || !addressId || orderItems.length === 0) {
      return res.status(400).json({
        message: 'userId e itens do pedido são obrigatórios',
      });
    }

    // Verifica se addressId é válido
    if (!addressId || !isUUID(addressId)) {
      return res.status(400).json({
        message: 'ID do endereço inválido',
      });
    }

    // Verifica se o endereço com o addressId fornecido existe
    const address = await Address.findByPk(addressId);
    if (!address) {
      return res.status(400).json({
        message: `Endereço com ID ${addressId} não encontrado`,
      });
    }

    // Chama o serviço de criação de pedido com os dados fornecidos
    const order = await createOrderService({
      userId,
      orderItems,
      addressId,
    });

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      order,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
