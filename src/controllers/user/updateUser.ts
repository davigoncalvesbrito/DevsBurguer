import { Request, Response } from 'express';
import { updateUserService } from '../../services/user/updateUserService';
import { formatUser } from '../../utils/formatted/formatUser';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone, password } = req.body;
    const updatedUser = await updateUserService(id, { name, phone, password });

    if (updatedUser) {
      const formattedUser = formatUser(updatedUser);
      res.status(200).json({
        message: 'Usuário atualizado com sucesso',
        user: formattedUser,
      });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado para atualização' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error });
  }
};
