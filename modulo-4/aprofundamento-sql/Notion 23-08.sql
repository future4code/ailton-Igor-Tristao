-- Exercício 1
-- a)
-- Removeria a coluna que contem a propriedade salary e seus dados.

-- b)
-- Trocaria o nome da coluna Gender para Sex.

-- c)
-- Trocaria o nome da coluna Gender para Gender e só ganharia a propriedade VARCHAR(255), caso tivesse outras seriam removidas.

-- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2
-- a)
UPDATE Actor
SET name = "Igor Castro", birth_date = "1995/11/30"
WHERE id = "003";

-- b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c)
UPDATE Actor
SET name = "Ciclana de Tal",
salary = 600000,
birth_date = "1990/11/23",
gender = "female"
WHERE id = "005";

-- d)
UPDATE Actor
SET name = "Teste falho"
WHERE id = "20";

-- Ele executa, porém não altera nada, pois não existe um dado com id 20. 

-- Exercício 3
-- a)
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor
WHERE gender = "male" AND 
salary > 1000000;

-- Exercício 4
-- a)
SELECT MAX(salary) as max_salary FROM Actor;

-- b)
SELECT MIN(salary) as min_actress_salary FROM Actor
WHERE gender = "female";

-- c)
SELECT COUNT(*) as actress_count FROM Actor
WHERE gender = "female";

-- d)
SELECT SUM(salary) as all_salary_sum FROM Actor;

-- Exercício 5
-- a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Ela pega todos os atores e atrizes e os divide com relação ao seu gênero, nos retornando a quantidade total de pessoas daquele gênero.

-- b)
SELECT id, name FROM Actor
ORDER BY name DESC;

-- c)
SELECT * FROM Actor
ORDER BY salary ASC;

-- d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e)
SELECT avg(salary), gender
from Actor
GROUP BY gender;

-- Exercício 6
-- a)
ALTER TABLE Movies
ADD playing_limit_date Date;

-- b)
ALTER TABLE Movies
CHANGE rating rating DOUBLE NOT NULL;

-- c)
UPDATE Movies
SET playing_limit_date = "2023/1/10/"
WHERE id = "003";

UPDATE Movies
SET playing_limit_date = "2020/9/27/"
WHERE id = "004";

-- d)
DELETE FROM Movies
WHERE id = "005";

UPDATE Movies
SET synopsis = "Testando o erro"
WHERE id = "005";

-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- Ele executa porém como não encontra nada com id 5 nada muda.

-- Desafios
-- Exercício 7
-- a)
SELECT * FROM Movies
WHERE playing_limit_date > current_date() AND rating > 7.5;

-- b)
SELECT avg(rating) FROM Movies;

-- c)
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > current_date();

-- d)
SELECT COUNT(*) FROM Movies
WHERE release_date > current_date();

-- e)
SELECT MAX(rating) FROM Movies;

-- f)
SELECT MIN(rating) FROM Movies;

-- Exercício 8
-- a)
SELECT * FROM Movies
ORDER BY title ASC;

-- b)
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;

-- c)
SELECT * FROM Movies
WHERE release_date < CURRENT_DATE() 
ORDER BY release_date DESC
LIMIT 3;

-- d)
SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;
