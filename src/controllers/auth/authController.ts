import { Request, Response } from 'express';
import { authenticateUser } from '../../services/auth/authenticateUserService';
import { formatUser } from '../../utils/formatted/formatUser';

export const login = async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  try {
    const { token, user } = await authenticateUser(phone, password);
    const formattedUser = formatUser(user);
    res.json({ token, user: formattedUser });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
