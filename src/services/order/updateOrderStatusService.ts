import { Order } from '../../models/order'; // Ajuste o caminho conforme necessário

export async function updateOrderStatusService(orderId: string, newStatus: string) {
  // Encontrar o pedido pelo ID
  const order = await Order.findByPk(orderId);
  if (!order) {
    throw new Error(`Pedido com ID ${orderId} não encontrado`);
  }

  // Atualizar o status
  order.status = newStatus;
  await order.save();

  // Retornar o pedido atualizado
  return order;
}
