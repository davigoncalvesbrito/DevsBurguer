import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from '../src/dbConfig'; // Importe a função de conexão corretamente
import userRoutes from './routes/userRoutes'; // Importe suas rotas de usuário
import productRouter from './routes/productRouter';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use suas rotas de usuário
app.use('/api', userRoutes); // Use prefixo '/api' para as rotas de usuário
app.use('/menu', productRouter); // Use prefixo '/api' para as rotas de usuário

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao iniciar o servidor:', err);
  });
