CREATE TABLE drugs
(
	id      INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name    VARCHAR(100)        NOT NULL,
	content TEXT                NOT NULL
) engine = InnoDB
  default charset = latin1;

CREATE TABLE user
(
	id       INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	username VARCHAR(100)        NOT NULL UNIQUE,
	email    VARCHAR(100)        NOT NULL UNIQUE,
	password VARCHAR(100)        NOT NULL,
	role     VARCHAR(15)         NOT NULL DEFAULT 'utilisateur'
) engine = InnoDB
  default charset = latin1;

INSERT INTO user (username, email, password, role)
VALUES ('Yhugzee', 'yhugzee@pm.me', 'bypassadmin', 'admin');

CREATE TABLE article
(
	id      INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name    VARCHAR(100)        NOT NULL,
	content VARCHAR(100)        NOT NULL,
	date    DATE                NOT NULL,
	comment VARCHAR(100)
) engine = InnoDB
  default charset = utf8mb4;

INSERT INTO article (name, content, date)
VALUES ('Cannabis et antidépresseurs ?', 'Article contenu', '2023-02-04');