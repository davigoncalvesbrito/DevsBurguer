import { Request, Response } from 'express';
import { updateOrderStatusService } from '../../services/order/updateOrderStatusService';

export const updateOrderStatus = async (req: Request, res: Response) => {
  const { orderId, status } = req.body;

  try {
    // Atualizar o status do pedido
    const updatedOrder = await updateOrderStatusService(orderId, status);

    res.status(200).json({
      message: 'Status do pedido atualizado com sucesso',
      order: updatedOrder,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
