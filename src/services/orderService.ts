import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../models/product';
import { Address } from '../models/address';

export async function createOrderService(data: any) {
  const { userId, orderItems, addressId } = data;

  // Consolidar itens do pedido para garantir que não há duplicação de productId
  const consolidatedItems = orderItems.reduce((acc: any[], item: any) => {
    const existingItem = acc.find((i) => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Atualizar a quantidade
    } else {
      acc.push({
        productId: item.productId,
        quantity: item.quantity,
      });
    }
    return acc;
  }, []);

  // Calcular o totalAmount
  let totalAmount = 0;
  const orderItemsData = [];

  for (const item of consolidatedItems) {
    const product = await Product.findByPk(item.productId); // Buscar produto pelo ID
    if (!product) {
      throw new Error(`Produto com ID ${item.productId} não encontrado`);
    }
    totalAmount += product.price * item.quantity;

    orderItemsData.push({
      productId: item.productId,
      quantity: item.quantity,
      price: product.price,
    });
  }

  // Criar o pedido
  const order = await Order.create({
    userId,
    status: 'pending',
    totalAmount,
    addressId: addressId || null, // Permitir null se não houver endereço
  });

  // Adicionar o orderId correto para cada item do pedido
  const orderItemsWithOrderId = orderItemsData.map((item) => ({
    ...item,
    orderId: order.id, // Use o id do pedido criado
  }));

  // Criar os itens do pedido
  await OrderItem.bulkCreate(orderItemsWithOrderId);

  // Inclui a relação dos OrderItems com o pedido e o endereço
  const orderWithItems = await Order.findByPk(order.id, {
    include: [
      {
        model: OrderItem,
        as: 'orderItems',
        include: [{ model: Product, as: 'product' }],
      },
      {
        model: Address,
        as: 'address', // Incluir o endereço na resposta
      },
    ],
  });

  return orderWithItems;
}

export const getOrderService = async (orderId: string) => {
  return Order.findByPk(orderId, {
    include: [
      {
        model: OrderItem,
        as: 'orderItems',
        include: [
          {
            model: Product,
            as: 'product',
          },
        ],
      },
    ],
  });
};
export async function getOrderUserService(userId: string) {
  // Encontrar todos os pedidos do usuário com o ID fornecido
  const orders = await Order.findAll({
    where: { userId },
    include: [
      {
        model: OrderItem,
        as: 'orderItems',
        include: [{ model: Product, as: 'product' }],
      },
      {
        model: Address,
        as: 'address', // Inclua o endereço na resposta
      },
    ],
  });

  if (!orders || orders.length === 0) {
    throw new Error(`Nenhum pedido encontrado para o usuário com ID ${userId}`);
  }

  return orders;
}

export const updateOrderService = async (orderId: string, updateData: any) => {
  const order = await Order.findByPk(orderId);

  if (order) {
    return order.update(updateData);
  }

  return null;
};

export const deleteOrderService = async (orderId: string) => {
  const order = await Order.findByPk(orderId);

  if (order) {
    return order.destroy();
  }

  return null;
};
