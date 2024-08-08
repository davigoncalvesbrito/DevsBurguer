import { Request, Response } from 'express';
import { getOrderService } from '../../services/orderService';

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await getOrderService(req.params.orderId);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error });
  }
};
