import { Request, Response } from 'express';
import { getAllUsersService } from '../../services/user/getAllUserService';
import { formatUser } from '../../utils/formatted/formatUser';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    const formattedUsers = users.map((user) => formatUser(user));

    res
      .status(200)
      .json({ message: 'Usuários listados com sucesso', users: formattedUsers });
  } catch (error: any) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
  }
};
