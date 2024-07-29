import { body } from 'express-validator';
import { UniqueAddress } from './checkUniqueAddress';

const addressValidator = [
  body('cidade')
    .isString()
    .withMessage('Cidade deve ser uma string.')
    .notEmpty()
    .withMessage('Cidade é obrigatória.')
    .custom(UniqueAddress),
  body('bairro')
    .isString()
    .withMessage('Bairro deve ser uma string.')
    .notEmpty()
    .withMessage('Bairro é obrigatório.'),
  body('rua')
    .isString()
    .withMessage('Rua deve ser uma string.')
    .notEmpty()
    .withMessage('Rua é obrigatória.'),
  body('numero')
    .isString()
    .withMessage('Número deve ser uma string.')
    .notEmpty()
    .withMessage('Número é obrigatório.'),
  body('pontoReferencia')
    .optional()
    .isString()
    .withMessage('Ponto de referência deve ser uma string se fornecido.'),
];

export { addressValidator };
