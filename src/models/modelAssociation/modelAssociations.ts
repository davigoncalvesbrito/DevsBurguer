import { User } from '../user';
import { Address } from '../address';
import { Order } from '../order';
import { OrderItem } from '../orderItem';
import { Product } from '../product';
// Definindo o relacionamento
// Relacionamento entre User e Address
User.hasMany(Address, {
  foreignKey: 'userId',
  as: 'addresses',
});

Address.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Relacionamento entre User e Order
User.hasMany(Order, {
  foreignKey: 'userId',
  as: 'orders',
});

Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Relacionamento entre Order e OrderItem
Order.hasMany(OrderItem, {
  foreignKey: 'orderId',
  as: 'orderItems',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

// Relacionamento entre Product e OrderItem
Product.hasMany(OrderItem, {
  foreignKey: 'productId',
  as: 'orderItems',
});

OrderItem.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
});

// Relacionamento entre Order e Address
Order.belongsTo(Address, {
  foreignKey: 'addressId',
  as: 'address',
});

Address.hasMany(Order, {
  foreignKey: 'addressId',
  as: 'orders',
});

export { User, Address, Product, Order, OrderItem };
