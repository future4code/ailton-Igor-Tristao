# Cookenu-labenu

_Documentação da API:_ https://documenter.getpostman.com/view/21551909/2s7YtNocrD

#### Sobre o projeto

Esse projeto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. 

Ela possui todas as funcionalidades mais comuns em redes sociais:

- **Cadastro**

O usuário pode se cadastrar informando um nome, email, senha. Não é possível criar dois usuários com o mesmo email.

- **Login**

Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro retornam **um** **token.**

- **Informações do próprio perfil**

A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

- **Criar receitas**

O usuário pode criar uma receita que será vista por todos os usuários que o seguem no seus feeds.

- **Seguir usuário**

Um usuário pode seguir outros usuários para visualizar suas receitas.

- **Feed**

Um usuário pode visualizar as receitas criadas pelos usuários que ele segue. 



### Algumas tecnologias utilizadas

- mySQL
- Typescript

#### Algumas bibliotecas utilizadas:

- Express
- Knex
- Uuid
- JsonWebToken
- Bcryptjs
- mySQL
- Typescript
- Cors
- Dotenv



