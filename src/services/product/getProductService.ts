import { Product } from '../../models/product';

export const getProductService = async (id: string): Promise<Product | null> => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw new Error(
      `Erro ao buscar Produto: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
