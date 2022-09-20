create table cookenu_followers(
user_following VARCHAR(255) NOT NULL,
user_being_followed VARCHAR(255) NOT NULL,
FOREIGN KEY (user_following) REFERENCES cookenu_user(id)
);

select * from cookenu_followers;		