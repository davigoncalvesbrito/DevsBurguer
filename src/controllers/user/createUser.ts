import { Request, Response } from 'express';
import { createUserService } from '../../services/user/createUserService';
import { CreateUserInput } from '../../utils/types';
import { formatUser } from '../../utils/formatted/formatUser';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, phone, password } = req.body as CreateUserInput;
    const newUser = await createUserService({ name, phone, password });
    const formattedUser = formatUser(newUser);

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso',
      user: formattedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
