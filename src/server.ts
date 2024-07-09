import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
// Importe outras rotas conforme necessário

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes); // Usando prefixo '/api' para as rotas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
