import { Request, Response } from 'express';
import { listCategoriesService } from '../../services/product/listCategoriesService';

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await listCategoriesService();
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
};
