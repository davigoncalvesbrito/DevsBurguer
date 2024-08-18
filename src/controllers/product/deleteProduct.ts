import { Request, Response } from 'express';
import { deleteProductService } from '../../services/product/deleteProductService';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductService(id);

    if (deletedProduct) {
      res.status(200).json({
        message: 'Produto deletado com sucesso',
        product: formatProduct(deletedProduct),
      });
    } else {
      res.status(404).json({ message: 'Produto não encontrado para deleção' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error: error });
  }
};
