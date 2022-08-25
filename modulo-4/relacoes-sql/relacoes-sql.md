### Exercício 1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

#### a)
- Responsável por referenciar um id à outra tabela, ou seja, só é possível criar um movie_id na tabela rating caso na tabela movie tenha um ID igual.

#### b)
INSERT INTO Rating
values('a', 'Filme mais ou menos, poderia ser melhor', 7, 1);

INSERT INTO Rating
values('b', 'Filme muito bom, super recomendo!!', 10, 2);

INSERT INTO Rating
values('c', 'Filme bom!!', 8, 3);

#### c)
INSERT INTO Rating
values('d', 'Filme com id não existente.', 8, 4);

- a foreign key constraint fails -> Não existe na tabela referenciada este valor atribuido a FOREIGN KEY (movie id)

#### d)
ALTER TABLE Movies
DROP COLUMN rating;

#### e) 
DELETE FROM Movies
WHERE id = 2;

- Cannot delete or update a parent row: a foreign key constraint fails -> Não é possível deletar uma informação que esteja sendo referenciada por outra tabela.

### Exercício 2

CREATE TABLE MovieCast (
	movie_id INT,
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

#### a) 

- Tabela que vai ser alimentada com dados de outras duas tabelas (Actor e Movies), ou seja, a junção delas.

#### b)
INSERT INTO MovieCast (movie_id, actor_id)
Values(1, '002');

INSERT INTO MovieCast (movie_id, actor_id)
Values(1, '006');

INSERT INTO MovieCast (movie_id, actor_id)
Values(2, '002');

INSERT INTO MovieCast (movie_id, actor_id)
Values(2, '007');

INSERT INTO MovieCast (movie_id, actor_id)
Values(3, '004');

INSERT INTO MovieCast (movie_id, actor_id)
Values(3, '005');

#### c)
INSERT INTO MovieCast (movie_id, actor_id)
Values(6, '005');

- Cannot add or update a child row: a foreign key constraint fails -> Não existe um movie/actor com este ID.

#### d)
DELETE FROM Actor
WHERE id = '002';

- Cannot delete or update a parent row: a foreign key constraint fails -> Não é possível deletar um ator porque ele está sendo referenciado na tabela MovieCast.

### Exercício 3
#### a)
- É a condição que junta as informações referenciadas, caso os ids forem iguais eles irão se agrupar em uma única linha e retornar.

#### b)
SELECT Movies.id, title, rate
FROM Movies
JOIN Rating
ON Movies.id = Rating.movie_id;