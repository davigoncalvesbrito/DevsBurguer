import { Product } from '../../models/product'; // Ajuste o caminho conforme a estrutura do seu projeto
import { formatDateToBrazilianTime } from '../dateUtils'; // Ajuste o caminho conforme a estrutura do seu projeto

export function formatProduct(product: Product | null) {
  if (!product) return null;

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.image,
    available: product.available,
    quantityAvailable: product.quantityAvailable,
    ingredients: product.ingredients,
    createdAt: formatDateToBrazilianTime(product.createdAt),
    updatedAt: formatDateToBrazilianTime(product.updatedAt),
  };
}
