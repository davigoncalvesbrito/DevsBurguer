import { Router } from 'express';
import { createOrder } from '../controllers/order/createOrder';
import { getOrder } from '../controllers/order/getOrder';
import { updateOrder } from '../controllers/order/updateOrder';
import { deleteOrder } from '../controllers/order/deleteOrder';
import { getOrderUser } from '../controllers/order/getOrderUser';
import { updateOrderStatus } from '../controllers/order/updateOrderStatus';

const orderRouter = Router();

orderRouter.post('/orders', createOrder);
orderRouter.get('/orders/:orderId', getOrder);
orderRouter.get('/orders/user/:userId', getOrderUser);
orderRouter.patch('/orders/:orderId', updateOrder);
orderRouter.delete('/orders/:orderId', deleteOrder);

//Rota para atualizar o status do pedido
orderRouter.put('/orders/status', updateOrderStatus);

export default orderRouter;
