### Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#### a) 

- VARCHAR(255) - recebe uma string e até 255 caracteres, porém se receber menos ela ocupa menos espaço porque varia de acordo com os caracteres.

- PRIMARY KEY -> Identificador, só pode existir um único para cada ator.
- NOT NULL -> Não pode receber um valor nulo.
- DATE -> Só pode receber um valor no estilo data.

#### b)

show databases;
show tables;

- show databases -> mostra todas os bancos de dados que temos no MySQL
- show tables -> mostra todas as tabelas que temos criadas no banco de dados que estamos usando.

#### c)

describe Actor;

- retorna a estrutura da tabela contendo todas as informações das variáveis.

### Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#### a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

#### b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Cleo Pires",
  200000,
  "1982-10-2", 
  "female"
);

- Duplicate entry '002' for key -> A variável ID não pode ser repetida, já que é uma PRIMARY KEY.

#### c)
- Está sendo passado 3 parametros e 5 valores, logo da erro. 

- Forma correta:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
  );

#### d)
- Variável name possui propriedade NOT NULL, então não é possível adicionar um novo ator sem inserir um nome.
- Forma correta:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "004",
    "Fulano de Tal",
    400000,
    "1949-04-18", 
    "male"
  );

#### e) 
- Birth_date precisa receber um valor como string, e está recebendo um número

- Forma correta:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
  );

#### f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fabio Jr",
  100000,
  "1953-11-21", 
  "male"
);

### Exercício 3

SELECT * FROM Actor;

#### a)
SELECT * FROM Actor
where gender = "female";

#### b)
SELECT salary FROM Actor
where name = "Tony Ramos";

#### c)
SELECT * FROM Actor
where gender = "invalid";

- Não retorna nenhum usuário, pois todos possuem um gender definido, male ou female.

#### d)
SELECT id, name, salary FROM Actor
where salary <= 500000;

#### e)
SELECT id, nome FROM Actor WHERE id = "002";

- Não exise variável chamada "nome", o certo é "name".

- Forma correta:
  SELECT id, name FROM Actor WHERE id = "002";

### Exercício 4

SELECT * FROM Actor
WHERE name LIKE "A%" OR "J%" AND salary > 300000;

#### a)
- Verifica se "name" começa com A ou J e depois verifica se o salário é menor que 300000, caso as duas sejam true retorna o ator/atriz.

#### b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

#### c)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

#### d)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary > 350000 AND salary < 900000;

### Exercício 5
#### a)
CREATE TABLE Movies(
id INT PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

#### b)
INSERT INTO Movies 
values(001, 
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
"2006/01/06", 
7
);

#### c)
INSERT INTO Movies
values(002, 
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
"2012/12/27", 
10
);

#### d)
INSERT INTO Movies
values(003, 
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
"2017/11/02", 
8
);

#### e)
INSERT INTO Movies
values(005, 
"Central do Brasilzzz", 
"Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, o filho de nove anos de idade de uma de suas clientes, acaba sozinho quando a mãe é morta em um acidente de ônibus. Ela reluta em cuidar do menino, mas se junta a ele em uma viagem pelo interior do Nordeste em busca do pai de Josué, que ele nunca conheceu.", 
"2050/04/03", 
10
);

### Exercício 6
#### a)
SELECT id, title, rating FROM Movies
WHERE id = 003;

#### b)
SELECT * FROM Movies
WHERE title = "Central do Brasil";

#### c)
SELECT id, title, synopsis FROM Movies
WHERE rating >= 7;

### Exercício 7

#### a)
SELECT * FROM Movies
WHERE title LIKE "%vida%";

####  b)
SELECT * FROM Movies
WHERE title LIKE "%brasil%" OR synopsis LIKE "%brasil%";

####  c)
SELECT * FROM Movies
WHERE release_date < CURRENT_DATE();

#### d)
SELECT * FROM Movies
WHERE release_date < CURRENT_DATE() AND (title LIKE "%flor%" OR synopsis LIKE "%flor%") AND rating >= 7;