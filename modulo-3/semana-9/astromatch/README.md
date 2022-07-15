# Projeto Astromatch

link do surge: https://merciful-knee.surge.sh/

**Proposta:** Criar uma plataforma de encontros parecida com o Tinder: o Astromatch.

## Sobre o projeto

O projeto foi feito utilizando React, estilizado com styled-components e Chakra ui (framework). Utilizado requisições de uma API para visualizar cada perfil e escolher dar match ou não (documentação da API: https://documenter.getpostman.com/view/7549981/SW12yx56?version=latest). 
Para a realização do swipe foi utilizado o Tinder card (https://github.com/3DJakob/react-tinder-card).
_Obs: Como o swipe foi feito para ser utilizado com arrays, a solução que eu encontrei para ser feita em um objeto e de ficar do jeito que eu queria, foi de criar dois componentes idênticos (profile e profileDois) onde ao terminar o swipe ele renderizaria o outro componente, fazendo assim a ilusão de que estamos vendo um map que renderiza conforme o state muda em apenas um componente. _

## Funcionalidades/não funcionalidades do projeto

### Página inicial (login)
#### Funciona:<br>
Dois botões responsáveis por fazer o login no site.
Botão **Entrar**: Necessário inserir um numero no input, pois este nome será usado para todas as requisições na api, sempre que alguém acessar utilizando este nome verá o mesmo perfil.
Botão **Entrar como visitante**: Utiliza um nome de usuário padrão, onde qualquer um que clicar neste botão irá visualizar o mesmo perfil. 

### Página dos Perfis

#### Funciona:<br>

1. Canto superior: dois botões que redirecionam para outras páginas. No canto esquerdo, um botão para deslogar (voltar a tela de login) e no canto direito um botão para visualizar os matches.
2. Através das requisições é mostrado um perfil na tela, onde a pessoa poderá "curtir" ou "não curtir", através dos botões na parte inferior.
3. Também existe a possibilidade de escolher através de um SWIPE, onde basta segurar o card com o mouse e puxar para onde deseja, esquerda (não curtir) ou direita (curtir).
4. Quando se esgotam os perfis disponíveis (sim a API tem um limite), é necessário resetar os matches caso queira que voltem a aparecer (feito na página de matches).

### Página dos Matches

#### Funciona:<br>

Página onde é renderizado os perfis que deram match com você (vindos da API) e um botão para resetar estes matches.

## Prints do AstroMatch

<p>Página login</p>
<img src="https://user-images.githubusercontent.com/100432523/178164738-b3c5dce0-3553-4f53-8ce8-94863d25528b.png" alt="tela-login" width="200px" height="300px"/>

<p>Página Perfil</p>
<img src="https://user-images.githubusercontent.com/100432523/178164740-a9f7347f-ab71-496b-90ee-db2748a3508d.png" alt="tela-perfil" width="200px" height="300px"/>

<p>Página Matches</p>
<img src="https://user-images.githubusercontent.com/100432523/178164739-f09a374f-ffbc-4b11-ae34-49cd648adc93.png" alt="tela-matches" width="200px" height="300px"/>

