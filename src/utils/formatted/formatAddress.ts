import { Address } from '../../models/address';

export function formatAddress(address: Address | null) {
  if (!address) return null;

  return {
    id: address.id,
    userId: address.userId,
    cidade: address.cidade,
    bairro: address.bairro,
    rua: address.rua,
    numero: address.numero,
    pontoReferencia: address.pontoReferencia,
    createdAt: address.createdAt,
    updatedAt: address.updatedAt,
  };
}
