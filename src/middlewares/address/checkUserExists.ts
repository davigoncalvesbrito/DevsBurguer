import { User } from '../../models/user';
import { Request, Response, NextFunction } from 'express';

export const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = parseInt(req.params.userId, 10);

  // Verifique se o usuário existe com o userId fornecido
  const user = await User.findByPk(userId); // Supondo que `findByPk` seja o método para encontrar um usuário pelo ID

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
