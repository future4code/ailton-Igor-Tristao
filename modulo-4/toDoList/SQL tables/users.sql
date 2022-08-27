CREATE TABLE ToDoListUsers(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE
);

SELECT * FROM ToDoListUsers;

INSERT INTO ToDoListUsers (name, nickname, email)
value('Lena', 'Lena', 'lena@hotmail.com');

DELETE FROM ToDoListUsers
WHERE id = "1";



