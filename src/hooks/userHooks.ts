import { User } from '../models/user';

// Hook para personalizar a serialização para JSON após o find
User.addHook('afterFind', (users: User | User[]) => {
  const convertAddress = (user: User) => {
    if (user && typeof user.getDataValue === 'function') {
      const addressString = user.getDataValue('address');
      try {
        user.setDataValue('address', JSON.parse(addressString));
      } catch (error) {
        // Em caso de erro na serialização, mantenha como está
        console.error('Erro ao deserializar o endereço:', error);
      }
    }
  };

  if (Array.isArray(users)) {
    users.forEach((user) => convertAddress(user));
  } else {
    convertAddress(users);
  }
});
