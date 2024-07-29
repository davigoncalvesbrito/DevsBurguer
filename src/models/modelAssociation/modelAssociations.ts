import { User } from '../user';
import { Address } from '../address';

// Definindo o relacionamento
User.hasMany(Address, {
  foreignKey: 'userId',
  as: 'addresses',
});

Address.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export { User, Address };
