import { Request, Response } from 'express';
import { authenticateUser } from '../../services/auth/authenticateUserService';

export const login = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try {
    const token = await authenticateUser(phone, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
