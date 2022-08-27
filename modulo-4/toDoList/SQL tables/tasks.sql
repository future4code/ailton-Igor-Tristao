CREATE TABLE tasks(
taskId INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
limitDate Date NOT NULL,
creatorUserId VARCHAR(255) NOT NULL,
creatorUserNickname VARCHAR(255) NOT NULL,
status VARCHAR(255) NOT NULL DEFAULT "to_do"
);

INSERT INTO tasks (title, description, limitDate, creatorUserId, creatorUserNickname)
values('Correr', 'acordar cedo e ir correr', '2025/1/1', '2', 'bzerkA');

SELECT * FROM tasks;