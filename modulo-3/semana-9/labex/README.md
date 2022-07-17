# Projeto Labe X

link do surge: https://labex-igor.surge.sh
senha do admin: admin@labex.com / admin

**Proposta:** Criar uma plataforma de gerenciamento de viagens espaciais. 

## Sobre o projeto

O projeto foi feito utilizando React, estilizado com styled-components e Chakra-ui (framework). Feito através de requisições de uma API para cadastrar, visualizar, remover, aplicar, aceitar aplicações etc, documentação da API: https://documenter.getpostman.com/view/9133542/TzCTZkQr

Dei preferencia em aprender um pouco de animação visto que não temos diretamente isto no curso Labenu. Por isto algumas partes não foram estilizadas, como os botões do chakra-ui, pois queria aprender coisas novas e senti que o padrão do chakra-ui estava bom suficiente.

## Funcionalidades/não funcionalidades do projeto

### Página inicial (home)
#### Funciona:<br>

- Visualização das viagens cadastradas pelo admin
- Capacidade de escolher uma viagem para se inscrever -> leva à página de inscrição.
- Filtro para buscar as viagens por planetas
- Botão para fazer login -> leva à pagina de login.

### Página inscrição
#### Funciona:<br>

- Preenchimento de um formulário que faz uma requisição na API para se candidatar a viagem.

### Página login
#### Funciona:<br>

- Página de login da parte administrativa. Para ter acesso é necessário informar um email e senha previamente criado na API. Caso inseridos corretamente leva as páginas de administração, senão os informa que a senha esta errada e mantém na tela de login. Autorização é realizada através do token retornado da API, que é guardado no localStorage e usado nas outras páginas.

### Página admin
#### Funciona:<br>

- Visualização das viagens e capacidade de excluir/ver detalhes das viagens.
- Painel onde é capaz de criar uma nova viagem e de deslogar.
- Deslogar significa apagar o localStorage e retornar o usuário a página de login.

### Página detalhes da viagem
#### Funciona:<br>

- Visualização das informações da viagem e dos candidatos que aplicaram/que foram aprovados.
- Ao visualizar os candidatos que se inscreveram é possível aceitar/removar suas inscrições.

## Prints do LabeX:

<p>Página inicial</p>
<img src="https://user-images.githubusercontent.com/100432523/179381989-23f85ed3-ec9a-462a-8b8b-3fad7f4450f9.png" alt="tela-inicial" width="350px" height="200px"/>



<p>Página Inscrição</p>
<img src="https://user-images.githubusercontent.com/100432523/179381896-256f564c-7f22-4f64-a296-8e76fcb09323.png" alt="tela-inscrição" width="350px" height="200px"/>

<p>Página Login</p>
<img src="https://user-images.githubusercontent.com/100432523/179381898-efff3cbf-01b3-4e3d-96a6-0bfd6f6d6a0d.png" alt="tela-login" width="350px" height="200px"/>

<p>Página Admin page</p>
<img src="https://user-images.githubusercontent.com/100432523/179381892-e515717a-475b-4d96-85f0-b48c7b6ef8ac.png" alt="tela-admin-page" width="350px" height="200px"/>

<p>Página Criar viagens</p>
<img src="https://user-images.githubusercontent.com/100432523/179381893-ff50242b-eb69-4059-ae1a-4017cf2aa520.png" alt="tela-cadastro-viagens" width="350px" height="200px"/>



<p>Página Detalhes das viagens</p>
<img src="https://user-images.githubusercontent.com/100432523/179381894-a10c3691-a76b-41b0-a2da-814049acb72e.png" alt="tela-detalhes" width="350px" height="200px"/>
