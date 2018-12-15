### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	plain BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);