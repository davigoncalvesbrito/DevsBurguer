import { Request, Response } from 'express';
import { getAllProductsService } from '../../services/product/getAllProductService';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
    const formattedProducts = products.map(formatProduct);
    res
      .status(200)
      .json({ message: 'Produtos listados com sucesso', products: formattedProducts });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error });
  }
};
