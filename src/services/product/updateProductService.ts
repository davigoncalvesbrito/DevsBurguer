import { Product } from '../../models/product';
import { ProductAttributes } from '../../utils/types';

export const updateProductService = async (
  id: string,
  data: Partial<ProductAttributes>,
): Promise<Product | null> => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data);
      return product;
    }
    return null;
  } catch (error) {
    throw new Error(
      `Erro ao atualizar Produto: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
