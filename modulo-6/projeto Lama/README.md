# Lama-labenu

#### Sobre o projeto

Criação de uma API para um show de músicas que conta com a participação de bandas. 

Documentação da API: https://documenter.getpostman.com/view/21551909/2s83tDpCtY#16ed24ba-c8d3-4847-93bf-4716e8da5311

Para gerenciar o evento é necessário organizar e centralizar as informações dos shows em um servidor (bando de dados mySQL), que então disponibiliza os dados para o website no front-end. Além de controlar os eventos com suas bandas e datas do show, a aplicação também gerencia os ingressos de cada show. A arena tem uma capacidade máxima de 5000 pessoas.

Funcionalidades:

- **Cadastro**

O usuário pode se cadastrar informando um nome, email, senha. Não é possível criar dois usuários com o mesmo email.

- **Login**

Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro retornam **um** **token.**

- **Agendar um show**

A partir do token de autenticação fornecido no login, o usuário que for administrador é capaz de agendar um novo show (não é possível agendar duas bandas no mesmo dia).

- **Visualizar todos os shows (feed)** 

A partir do token de autenticação fornecido no login, o usuário pode visualizar todos os shows agendados e os seus dias.

- **Comprar um ingresso**

A partir do token de autenticação fornecido no login, um usuário pode comprar ingresso para um show, cada usuário só é capaz de comprar um ingresso para cada dia.

- **Deletar um ingresso**

A partir do token de autenticação fornecido no login, um usuário pode cancelar seu ingresso (somente os comprado pelo usuário). 



### Algumas tecnologias utilizadas

- mySQL
- Typescript
- Testes unitários (Jest) com 85%+ de cobertura.

#### Algumas bibliotecas utilizadas:

- Express
- Knex
- Uuid
- JsonWebToken
- Bcryptjs
- Cors
- Dotenv



