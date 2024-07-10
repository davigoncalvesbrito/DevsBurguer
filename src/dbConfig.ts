// dbConfig.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432', 10),
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Ajuste para true em produção se usar SSL
    },
  },
});

export async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados PostgreSQL');

    // Sincroniza os modelos com o banco de dados (cria as tabelas)
    await sequelize.sync({}); // Use { force: true } para resetar o banco de dados
    console.log('Modelos sincronizados com o banco de dados');
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error);
    throw error; // Lança o erro para que seja tratado ao iniciar o servidor
  }
}

export default sequelize;
