import { Request, Response } from 'express';
import { deleteOrderService } from '../../services/orderService';

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const result = await deleteOrderService(req.params.orderId);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};
