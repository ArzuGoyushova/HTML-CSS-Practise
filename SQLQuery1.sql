--DDL QUERY

CREATE DATABASE P515
DROP DATABASE P515

USE P515

CREATE TABLE Students(
Id int,
[Name] nvarchar(50),
Surname nvarchar(50)
)

ALTER TABLE Students
ADD [Address] nvarchar(50), Age int

ALTER TABLE Students DROP COLUMN Age
ALTER TABLE Students DROP COLUMN [Address]

EXEC sp_rename Students,Stu
EXEC sp_rename Stu,Students

EXEC sp_rename 'Students.Age',Yash
EXEC sp_rename 'Students.Yash',Age

--DML query CRUD

SELECT * FROM Students

INSERT INTO Students VALUES(1,'aci','acili','baki',20)
INSERT INTO Students VALUES
(2,'accii','acililll','baki',28),
(3,'tae','kim','seoul',28)
INSERT INTO Students ([Address],Age) VALUES
('baki',28)

SELECT Age FROM Students

SELECT s.Age,s.Surname FROM Students s

SELECT s.Age Yash,s.Surname as Soyad FROM Students s

SELECT * FROM Students WHERE Id<4
SELECT Id, [Name] FROM Students WHERE Id BETWEEN 2 AND 4


UPDATE Students SET [Name]='Lorem' WHERE Id=5
UPDATE Students SET Surname='Loremova' WHERE Name='Lorem'
UPDATE Students SET [Address]='Sumqayit' WHERE Id=5
UPDATE Students SET Age=30 WHERE Name='Lorem'

DELETE FROM Students WHERE Id=5

