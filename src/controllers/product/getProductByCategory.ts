import { Request, Response } from 'express';
import { getProductsByCategoryService } from '../../services/product/getProductByCategoryService';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const products = await getProductsByCategoryService(category);
    const formattedProducts = products.map(formatProduct);

    if (products.length > 0) {
      res
        .status(200)
        .json({ message: 'Produtos encontrados', products: formattedProducts });
    } else {
      res.status(404).json({ message: 'Nenhum produto encontrado para esta categoria' });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar produtos por categoria', error: error.message });
  }
};
