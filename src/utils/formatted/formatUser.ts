import { User } from '../../models/user';

export function formatUser(user: User | null) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    phone: user.phone,
    addresses: user.addresses,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
