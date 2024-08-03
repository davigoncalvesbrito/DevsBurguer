import { Request, Response } from 'express';
import { updateProductService } from '../../services/product/updateProductService';
import { ProductAttributes } from '../../utils/types';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const updateProduct = async (req: Request, res: Response) => {
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
    const updatedProduct = await updateProductService(id, {
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
        product: formatProduct(updatedProduct),
      });
    } else {
      res.status(404).json({ message: 'Produto não encontrado para atualização' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
  }
};
