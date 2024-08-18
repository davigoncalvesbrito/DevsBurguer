import { Request, Response } from 'express';
import { getUserService } from '../../services/user/getUserService';
import { formatUser } from '../../utils/formatted/formatUser';

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserService(id);
    const formattedUser = formatUser(user);

    if (formattedUser) {
      res.status(200).json({ message: 'Usuário encontrado', user: formattedUser });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário', error: error });
  }
};
