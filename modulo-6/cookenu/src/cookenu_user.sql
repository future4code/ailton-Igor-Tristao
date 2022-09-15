CREATE TABLE cookenu_user(
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(64) NOT NULL DEFAULT('NORMAL')
);

select * from cookenu_user;

