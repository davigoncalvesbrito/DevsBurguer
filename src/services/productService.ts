import { Product } from '../models/product';
import { ProductAttributes } from '../utils/types';

export class ProductService {
  // Método para criar um novo produto
  async createProduct(data: ProductAttributes): Promise<Product> {
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
  }

  // Método para obter um produto por ID
  async getProduct(id: string): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error: any) {
      throw new Error(`Erro ao buscar produto: ${error.message}`);
    }
  }

  // Método para obter todos os produtos
  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error: any) {
      throw new Error(`Erro ao buscar todos os produtos: ${error.message}`);
    }
  }

  // Método para buscar todas as categorias
  async listCategories(): Promise<string[]> {
    try {
      const categories = await Product.findAll({
        attributes: ['category'],
        group: ['category'],
      });

      return categories.map((cat) => cat.category);
    } catch (error: any) {
      throw new Error(`Erro ao buscar categorias: ${error.message}`);
    }
  }

  // Método para buscar produtos por categoria
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const products = await Product.findAll({
        where: {
          category: category,
        },
      });
      return products;
    } catch (error: any) {
      throw new Error(`Erro ao buscar produtos por categoria: ${error.message}`);
    }
  }

  // Método para atualizar um produto existente
  async updateProduct(
    id: string,
    data: Partial<ProductAttributes>,
  ): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      if (product) {
        await product.update(data);
        return product;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao atualizar produto: ${error.message}`);
    }
  }

  // Método para deletar um produto
  async deleteProduct(id: string): Promise<Product | null> {
    try {
      const product = await Product.findByPk(id);
      if (product) {
        await product.destroy();
        return product;
      }
      return null;
    } catch (error: any) {
      throw new Error(`Erro ao deletar produto: ${error.message}`);
    }
  }
}
