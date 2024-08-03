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
  } catch (error: any) {
    throw new Error(`Erro ao buscar produtos por categoria: ${error.message}`);
  }
};
