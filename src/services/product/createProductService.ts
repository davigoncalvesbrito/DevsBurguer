import { Product } from '../../models/product';
import { ProductAttributes } from '../../utils/types';

export const createProductService = async (data: ProductAttributes): Promise<Product> => {
  try {
    const newProduct = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      image: data.image,
      available: data.available,
      quantityAvailable: data.quantityAvailable,
      ingredients: data.ingredients,
    });
    return newProduct;
  } catch (error: any) {
    throw new Error(`Erro ao criar produto: ${error.message}`);
  }
};
