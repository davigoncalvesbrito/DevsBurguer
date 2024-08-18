import { Request, Response } from 'express';
import { deleteUserService } from '../../services/user/deleteUserService';
import { formatUser } from '../../utils/formatted/formatUser';

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);

    if (deletedUser) {
      const formattedUser = formatUser(deletedUser);
      res.status(200).json({
        message: 'Usuário deletado com sucesso',
        user: formattedUser,
      });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado para deleção' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error: error });
  }
};
