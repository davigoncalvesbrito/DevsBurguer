import { User } from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    'JWT_SECRET não está definido. Configure a variável de ambiente JWT_SECRET.',
  );
}

export const authenticateUser = async (phone: string, password: string) => {
  if (!phone || !password) {
    throw new Error('Telefone e senha são obrigatórios.');
  }

  try {
    // Encontre o usuário pelo telefone
    const user = await User.findOne({ where: { phone } });

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    // Compare a senha fornecida com a senha armazenada
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Telefone ou Senha incorreta.');
    }

    // Gere o token JWT
    const payload = { id: user.id };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    return {
      message: 'Autenticado com sucesso',
      token,
      user,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro na autenticação do usuário: ${error.message}`);
    }

    throw new Error('Erro desconhecido na autenticação do usuário.');
  }
};
