import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './dbconfig';
import { User, Address } from './models/modelAssociation/modelAssociations';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import addressRouter from './routes/addressRouter';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use suas rotas de usuário
app.use('/api', userRouter); // Use prefixo '/api' para as rotas de usuário
app.use('/menu', productRouter); // Use prefixo '/api' para as rotas de usuário
app.use('/api', addressRouter);

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
