import { Op } from 'sequelize';
import { Product } from '../../models/product';

export const getProductsByCategoryService = async (
  category: string,
): Promise<Product[]> => {
  try {
    const products = await Product.findAll({
      where: {
        category: {
          [Op.iLike]: category,
        },
      },
    });
    return products;
  } catch (error) {
    throw new Error(
      `Erro ao buscar Produtos por Categorias: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
