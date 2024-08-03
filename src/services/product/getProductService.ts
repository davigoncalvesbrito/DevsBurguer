import { Product } from '../../models/product';

export const getProductService = async (id: string): Promise<Product | null> => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error: any) {
    throw new Error(`Erro ao buscar produto: ${error.message}`);
  }
};
