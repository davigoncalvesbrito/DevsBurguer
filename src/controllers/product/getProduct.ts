import { Request, Response } from 'express';
import { getProductService } from '../../services/product/getProductService';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProductService(id);
    if (product) {
      res
        .status(200)
        .json({ message: 'Produto encontrado', product: formatProduct(product) });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
  }
};
