CREATE DATABASE JCWDOL15;

SHOW DATABASES;

USE JCWDOL15;

DROP DATABASE JCWDOL15;

CREATE TABLE expense (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    TYPE ENUM("income","expense") NOT NULL,
    category ENUM("food","transport","salary") NOT NULL,
    nominal FLOAT(10,2) NOT NULL
);

SHOW TABLES;

ALTER TABLE expense
ADD date DATE NOT NULL;


INSERT INTO expense(title, type, category, nominal, date) VALUES ('Beli Ayam Bakar','expense','food',20000, '2024-08-12');

SELECT * FROM expense;

INSERT INTO expense(title, type, category, nominal, date)
VALUE
('Beli Bensin', 'expense', 'transport', 59000, '2024-08-01'),
('Gaji Bulanan', 'income', 'salary', 200000, '2024-08-10');

SELECT id, title, nominal FROM expense;

SELECT DISTINCT id, title, nominal FROM expense;

UPDATE expense SET title = "Beli Batagor", category = "food", date = "2024-08-02" where id = 2;

UPDATE expense SET nominal = 50000 where id = 6;

DELETE FROM expense WHERE id = 3;

ALTER TABLE expense
MODIFY COLUMN category ENUM("food", "transport","salary") NOT NULL;

SELECT * FROM expense WHERE id = 2;

SELECT * FROM expense WHERE category = "food" AND nominal >10000;

SELECT category, count(id) as total FROM expense GROUP BY category HAVING total > 2;

SELECT * FROM expense ORDER BY nominal DESC LIMIT 2;

SELECT * FROM expense;

SELECT * FROM expense LIMIT 5 OFFSET 2;

SELECT type, sum(nominal) FROM expense GROUP BY type;

SELECT avg(nominal) FROM expense WHERE type ="expense";

SELECT * FROM expense where type = "expense" and nominal > (select avg(nominal) from expense where type = "expense");





