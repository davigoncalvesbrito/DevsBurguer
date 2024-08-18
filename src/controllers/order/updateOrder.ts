import { Request, Response } from 'express';
import { updateOrderService } from '../../services/orderService';

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await updateOrderService(req.params.orderId, req.body);
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};
