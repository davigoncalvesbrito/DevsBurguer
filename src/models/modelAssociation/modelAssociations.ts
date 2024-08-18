import { User } from '../user';
import { Address } from '../address';
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

export { User, Address, Product };
