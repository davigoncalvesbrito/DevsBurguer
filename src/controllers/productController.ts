import { Request, Response } from 'express';
import { ProductService } from '../services/productService';
import { ProductAttributes } from '../utils/types';

const productService = new ProductService();

export class ProductController {
  // Método para criar um novo produto
  static async createProduct(req: Request, res: Response) {
    try {
      const {
        name,
        description,
        price,
        category,
        image,
        available,
        quantityAvailable,
        ingredients,
      } = req.body as ProductAttributes;
      const product = await productService.createProduct({
        name,
        description,
        price,
        category,
        image,
        available,
        quantityAvailable,
        ingredients,
      });

      res.status(201).json({
        message: 'Produto cadastrado com sucesso',
        product,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // Método para obter um produto por ID
  static async getProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await productService.getProduct(id);
      if (product) {
        res.status(200).json({ message: 'Produto encontrado', product });
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
    }
  }

  // Método para obter todos os produtos
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json({ message: 'Produtos listados com sucesso', products });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
    }
  }

  // Método para buscar todas as categorias
  static async listCategories(req: Request, res: Response) {
    try {
      const categories = await productService.listCategories();
      res.status(200).json({
        message: 'Categorias listadas com sucesso',
        categories: categories,
      });
    } catch (error: any) {
      res.status(500).json({
        message: 'Erro ao listar categorias',
        error: error.message,
      });
    }
  }

  // Método para buscar produtos por categoria
  static async getProductsByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;
      const products = await productService.getProductsByCategory(category);

      if (products.length > 0) {
        res.status(200).json({ message: 'Produtos encontrados', products });
      } else {
        res
          .status(404)
          .json({ message: 'Nenhum produto encontrado para esta categoria' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao buscar produtos por categoria', error: error.message });
    }
  }

  // Método para atualizar um produto existente
  static async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        price,
        category,
        image,
        available,
        quantityAvailable,
        ingredients,
      } = req.body as Partial<ProductAttributes>;
      const updatedProduct = await productService.updateProduct(id, {
        name,
        description,
        price,
        category,
        image,
        available,
        quantityAvailable,
        ingredients,
      });

      if (updatedProduct) {
        res.status(200).json({
          message: 'Produto atualizado com sucesso',
          product: updatedProduct,
        });
      } else {
        res.status(404).json({ message: 'Produto não encontrado para atualização' });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro ao atualizar produto', error: error.message });
    }
  }

  // Método para deletar um produto
  static async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedProduct = await productService.deleteProduct(id);

      if (deletedProduct) {
        res.status(200).json({
          message: 'Produto deletado com sucesso',
          product: deletedProduct,
        });
      } else {
        res.status(404).json({ message: 'Produto não encontrado para deleção' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
    }
  }
}
