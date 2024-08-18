import { Product } from '../../models/product';

export const getAllProductsService = async (): Promise<Product[]> => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error(
      `Erro ao buscar todos os Produto: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
