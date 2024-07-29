import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from '../src/dbConfig'; // Importe a função de conexão corretamente
import { User, Address } from './models/modelAssociation/modelAssociations'; // Importar todos os modelos
import userRouter from './routes/userRouter'; // Importe suas rotas de usuário
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
