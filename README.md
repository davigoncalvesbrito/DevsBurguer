### README do Projeto DevsBurguer

# DevsBurguer

DevsBurguer é um sistema de pedidos de hambúrguer, desenvolvido utilizando TypeScript e Express. O objetivo é criar um sistema backend capaz de gerenciar usuários e processar pedidos de forma eficiente. Atualmente, o sistema permite a criação, listagem e busca de usuários.

## Funcionalidades Implementadas

### Usuários
- **Criar Usuário:** Permite criar um novo usuário com as informações fornecidas.
- **Listar Todos os Usuários:** Retorna a lista de todos os usuários cadastrados.
- **Buscar Usuário por ID:** Retorna os detalhes de um usuário específico com base no ID fornecido.

## Estrutura do Projeto

### Entidades

- **User:** Representa um usuário no sistema. Possui os seguintes campos:
  - `id`: Identificador único do usuário.
  - `name`: Nome do usuário.
  - `phone`: Número de telefone do usuário.
  - `password`: Senha do usuário.
  - `address`: Endereço do usuário.
  - `email`: (Opcional) Email do usuário.

### Arquitetura MVC

- **Modelos:** Representa a estrutura dos dados.
  - `User`: Classe que define a estrutura do usuário.
  
- **Serviços:** Contém a lógica de negócios.
  - `UserService`: Classe que gerencia a criação, listagem e busca de usuários.
  
- **Controladores:** Gerencia a interação entre o serviço e as rotas.
  - `UserController`: Classe que define os métodos para criar, listar e buscar usuários.

### Estrutura de Pastas

```plaintext
src/
├── controllers/
│   └── userController.ts
├── models/
│   └── user.ts
├── routes/
│   └── userRoutes.ts
├── services/
│   └── userService.ts
└── server.ts
```

Configuração do Ambiente de Desenvolvimento
Pré-requisitos
Node.js instalado
npm instalado


Instale as dependências:
npm install
Crie um arquivo .env na raiz do projeto com as seguintes configurações:
.env
PORT=3000


Para iniciar o servidor de desenvolvimento, execute:
npm run dev
O servidor estará rodando em http://localhost:3000.

Testando as Funcionalidades
Você pode usar ferramentas como Postman ou cURL para testar as rotas da API.

Criar Usuário

Endpoint: POST http://localhost:3000/api/users
Body:
json
{
  "name": "John Doe",
  "phone": "1234567890",
  "password": "password",
  "address": "123 Main St"
}

Resposta esperada:
json
{
  "message": "Usuário cadastrado com sucesso",
  "user": {
    "id": "1",
    "name": "John Doe",
    "phone": "1234567890",
    "password": "password",
    "address": "123 Main St"
  }
}

Listar Todos os Usuários

Endpoint: GET http://localhost:3000/api/users
Resposta esperada quando há usuários:
json
{
  "message": "Usuários listados com sucesso",
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "phone": "1234567890",
      "password": "password",
      "address": "123 Main St"
    }
  ]
}
Resposta esperada quando não há usuários:
json
{
  "message": "Usuários não encontrados"
}
Buscar Usuário por ID

Endpoint: GET http://localhost:3000/api/users/1
Resposta esperada:
json
{
  "id": "1",
  "name": "John Doe",
  "phone": "1234567890",
  "password": "password",
  "address": "123 Main St"
}