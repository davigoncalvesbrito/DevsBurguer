import { Product } from '../../models/product';

export const deleteProductService = async (id: string): Promise<Product | null> => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  } catch (error) {
    throw new Error(
      `Erro ao deletar Produto: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
