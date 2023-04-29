USE P515

CREATE TABLE Positions(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50),
DependOn int
)


--self
SELECT p.Name ManageName, po.Name DependName FROM Positions p
JOIN Positions po
ON p.Id=po.DependOn

CREATE TABLE Products(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50)
)
CREATE TABLE Sizes(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50)
)

SELECT * FROM Products
CROSS JOIN Sizes

CREATE TABLE Grades(
Id int IDENTITY PRIMARY KEY,
Letter nvarchar(20),
MaxGrade int,
MinGrade int
)

ALTER TABLE Students Add Mark int

SELECT s.Id, s.Name, s.Surname, s.Mark, g.letter FROM Students s
JOIN Grades g
ON
s.Mark>=g.MinGrade AND s.Mark<=g.MaxGrade


--union
CREATE TABLE OldStudents(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50),
Surname nvarchar(50),
[Address] nvarchar(50),
Age int,
Mark int
)

SELECT  s.Name, s.Surname FROM Students s
union all
SELECT  o.Name, o.Surname FROM OldStudents o


--eynilerin 1in saxliyir
SELECT  s.Name, s.Surname FROM Students s
union
SELECT  o.Name, o.Surname FROM OldStudents o

SELECT * FROM Students
except 
SELECT * FROM OldStudents


SELECT * FROM Students
intersect 
SELECT * FROM OldStudents


CREATE TABLE Users(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50)
)

INSERT INTO Users VALUES
('Chuuya'),
('Chuuya'),
('Dazai'),
('Chuuya'),
('Levi'),
('Dazai')

SELECT Name, COUNT(NAME) as NameCount FROM Users GROUP BY NAME
