create table cookenu_recipe(
id VARCHAR(255) PRIMARY KEY NOT NULL,
title VARCHAR(64) NOT NULL,
description VARCHAR(255) NOT NULL,
creator_id VARCHAR(255) NOT NULL,
create_date Date not null
);

select * from cookenu_recipe;
