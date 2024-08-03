import { User } from '../../models/user';
import { formatDateToBrazilianTime } from '../dateUtils';

export function formatUser(user: User | null) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    phone: user.phone,
    password: user.password,
    createdAt: formatDateToBrazilianTime(user.createdAt),
    updatedAt: formatDateToBrazilianTime(user.updatedAt),
    addresses: user.addresses?.map((address) => ({
      id: address.id,
      userId: address.userId,
      cidade: address.cidade,
      bairro: address.bairro,
      rua: address.rua,
      numero: address.numero,
      pontoReferencia: address.pontoReferencia,
      createdAt: formatDateToBrazilianTime(address.createdAt),
      updatedAt: formatDateToBrazilianTime(address.updatedAt),
    })),
  };
}
