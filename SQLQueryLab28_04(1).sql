CREATE DATABASE University

USE University

CREATE TABLE Students(
Id int  IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
Surname nvarchar(50) DEFAULT('XXX'),
Age int
)

INSERT INTO Students VALUES
('Chuuya', 'Nakahara', 22),
('Dazai', 'Osamu', 18),
('Benji', 'Ovich', 26),
('Levi', 'Ackerman', 19),
('Rosa', 'Diaz', 21),
('Amy', 'Santiago', 23)

SELECT * FROM Students

--1. Ilk 2 telebe
SELECT TOP 2 * FROM Students

--2.En chox yashi olan telebe
SELECT MAX(Age) AS MaxAge FROM Students

--3.Telebenin adinda "A" ve "D" herfi olmayan
SELECT * FROM Students WHERE name NOT LIKE '%a%' AND name NOT LIKE '%d%'

--4.Telebenin adi A ve D arasinda olmayan telebeler
SELECT * FROM Students WHERE name NOT LIKE '%[a-d]%'

--5.Telebelerin yashlarinin cemi
SELECT SUM(Age) AS SumAges FROM Students

--6.Yasha gore artan sira
SELECT * FROM Students ORDER BY Age

--7.Yasha gore azalan sira
SELECT * FROM Students ORDER BY Age DESC

--8.ID-e gore telebelerin sayi
SELECT COUNT(Id) AS NumberOfStudents FROM Students
