// src/middlewares/userValidator.ts
import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';

export const userValidator = [
  check('name')
    .notEmpty()
    .withMessage('O nome é obrigatório.')
    .isString()
    .withMessage('O nome deve ser um texto.'),

  check('phone')
    .isMobilePhone('pt-BR')
    .withMessage('O telefone deve ser válido.')
    .notEmpty()
    .withMessage('O telefone é obrigatório.')
    .custom(async (value) => {
      const user = await User.findOne({ where: { phone: value } });
      if (user) {
        throw new Error('Este telefone já está em uso.');
      }
      return true;
    }),

  check('password')
    .notEmpty()
    .withMessage('A senha é obrigatória.')
    .isLength({ min: 6 })
    .withMessage('A senha deve ter pelo menos 6 caracteres.')
    .matches(/(?=.*[a-z])/, 'g')
    .withMessage('A senha deve conter pelo menos uma letra minúscula.')
    .matches(/(?=.*[A-Z])/, 'g')
    .withMessage('A senha deve conter pelo menos uma letra maiúscula.')
    .matches(/(?=.*[0-9])/, 'g')
    .withMessage('A senha deve conter pelo menos um número.')
    .matches(/(?=.*[!@#$%^&*])/, 'g')
    .withMessage('A senha deve conter pelo menos um caractere especial.'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Extrair apenas as mensagens de erro
      const extractedErrors: string[] = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: extractedErrors });
    }
    next();
  },
];
