import { User } from '../../models/user';
import { Request, Response, NextFunction } from 'express';

export const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = parseInt(req.params.userId, 10);

  // Verifica se o usuário existe com o userId fornecido
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: 'O usuário com o ID fornecido não existe.',
        },
      ],
    });
  }

  // Se o usuário existir, continue para o próximo middleware
  next();
};
