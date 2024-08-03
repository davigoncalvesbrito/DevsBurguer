import { Request, Response } from 'express';
import { createProductService } from '../../services/product/createProductService';
import { ProductAttributes } from '../../utils/types';
import { formatProduct } from '../../utils/formatted/formatProduct';

export const createProduct = async (req: Request, res: Response) => {
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
    const product = await createProductService({
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
      product: formatProduct(product),
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
