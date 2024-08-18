import { Product } from '../../models/product';

export const listCategoriesService = async (): Promise<string[]> => {
  try {
    const categories = await Product.findAll({
      attributes: ['category'],
      group: ['category'],
    });
    return categories.map((cat) => cat.category);
  } catch (error) {
    throw new Error(
      `Erro ao buscar categorias: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    );
  }
};
