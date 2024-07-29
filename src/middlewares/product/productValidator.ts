import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { Product } from '../../models/product';
export const productValidator = [
  check('name')
    .notEmpty()
    .withMessage('O nome do produto é obrigatório.')
    .isString()
    .withMessage('O nome do produto deve ser um texto.')
    .custom(async (value) => {
      const product = await Product.findOne({ where: { name: value } });
      if (product) {
        throw new Error('Este produto já foi cadastrado no sistema.');
      }
      return true;
    }),

  check('description')
    .notEmpty()
    .withMessage('A descrição do produto é obrigatória.')
    .isString()
    .withMessage('A descrição do produto deve ser um texto.'),

  check('price')
    .notEmpty()
    .withMessage('O preço do produto é obrigatório.')
    .isFloat({ min: 0 })
    .withMessage('O preço do produto deve ser um número positivo.'),

  check('category')
    .notEmpty()
    .withMessage('A categoria do produto é obrigatória.')
    .isString()
    .withMessage('A categoria do produto deve ser um texto.'),

  check('image')
    .notEmpty()
    .withMessage('A imagem do produto é obrigatória.')
    .isURL()
    .withMessage('A URL da imagem deve ser um texto válido.'),

  check('available')
    .notEmpty()
    .withMessage('A disponibilidade do produto é obrigatória.')
    .isBoolean()
    .withMessage('A disponibilidade do produto deve ser um valor booleano.'),

  check('quantityAvailable')
    .notEmpty()
    .withMessage('A quantidade disponível do produto é obrigatória.')
    .isInt({ min: 0 })
    .withMessage(
      'A quantidade disponível do produto deve ser um número inteiro não negativo.',
    ),

  check('ingredients')
    .optional()
    .isArray()
    .withMessage('A lista dos ingredientes deve ser preenchida.'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: extractedErrors });
    }
    next();
  },
];
