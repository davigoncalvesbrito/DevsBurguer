import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './dbconfig';
import { User, Address } from './models/modelAssociation/modelAssociations';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import addressRouter from './routes/addressRouter';
import passport from 'passport';
import authRouter from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(passport.initialize());

app.use(cors());
app.use(express.json());

app.use('/api', userRouter);
app.use('/menu', productRouter);
app.use('/api', addressRouter);
app.use(authRouter);

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(async () => {
    // Sincronizar os modelos com o banco de dados
    await User.sync();
    await Address.sync();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao iniciar o servidor:', err);
  });
