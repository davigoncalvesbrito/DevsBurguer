import { Request, Response } from 'express';
import { getOrderUserService } from '../../services/orderService';

export const getOrderUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    // Obter todos os pedidos do usuário
    const orders = await getOrderUserService(userId);

    res.status(200).json({
      message: 'Pedidos encontrados com sucesso',
      orders,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
