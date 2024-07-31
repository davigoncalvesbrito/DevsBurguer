# DevsBurguer

## Descrição

DevsBurguer é um sistema de pedidos de hambúrguer desenvolvido com TypeScript, Express e Sequelize. O sistema permite a gestão até agora de usuários, produtos e endereços, integrando com um banco de dados PostgreSQL hospedado na nuvem.

## Funcionalidades

- Cadastro de usuários
- Cadastro de produtos
- Cadastro de endereços
- Listagem de usuários com seus endereços associados
- Listagem de produtos com categorias
- Validação de dados de entrada
- Formatação de dados para exibição

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- Dotenv
- Body-parser
- Cors
- Ts-node
- Nodemon

## Endpoints

### Usuários

- **GET /api/users**: Lista todos os usuários
- **POST /api/users**: Cria um novo usuário
- **GET /api/users/:id**: Obtém um usuário por ID
- **PUT /api/users/:id**: Atualiza um usuário por ID
- **DELETE /api/users/:id**: Deleta um usuário por ID

### Produtos

- **GET /menu/products**: Lista todos os produtos
- **POST /menu/products**: Cria um novo produto
- **GET /menu/products/:id**: Obtém um produto por ID
- **PUT /menu/products/:id**: Atualiza um produto por ID
- **DELETE /menu/products/:id**: Deleta um produto por ID

### Endereços

- **GET /api/addresses**: Lista todos os endereços
- **POST /api/addresses**: Cria um novo endereço
- **GET /api/addresses/:id**: Obtém um endereço por ID
- **PUT /api/addresses/:id**: Atualiza um endereço por ID
- **DELETE /api/addresses/:id**: Deleta um endereço por ID

## NOTA

Este projeto está em constante atualização e várias mudanças podem ocorrer no futuro. Fique atento às atualizações e novos recursos que serão adicionados.
