# Car Shop :car:
Projeto construído durante o módulo de Back End da Trybe com o intuito de aplicar os conhecimentos de `MongoDB` em uma API com CRUD.

## Contexto :books:
O desafio do projeto era de construir uma API CRUD para gerenciar o estoque de uma concessionária de veículos. As funcionalidades esperadas eram de:
- cadastrar carros (`/cars`) e motocicletas (`/motorcycles`) através de requisições do tipo `POST`;
- listar todos os veículos cadastrados e seus detalhes através de suas rotas e requisição do tipo `GET`;
- listar um veículo específico atráves de seu ID (`/tipo-de-veículo/:id`) e requisição do tipo `GET`;
- atualizar os dados de um veículo através de seu ID utilizando requisição do tipo `PUT`;
- excluir um veículo do banco de dados através de seu ID utilizando requisição do tipo `DELETE` (*Função ainda não implementada*);

## Tecnologias e Conceitos Utilizados :brain:
### Conceitos :book::
- POO (Programação Orientada a Objetos);
- API REST (*Representational State Transfer*);
- Princípios SOLID;
- CRUD (Create, Read, Update e Delete);

### API :dart::
- TypeScript;
- Express;
- Node.js

### Banco de Dados :floppy_disk::
- MongoDB:
- Mongoose;
- Docker;

### Testes de integração :wrench::
- Mocha;
- Chai:
- Sinon;
