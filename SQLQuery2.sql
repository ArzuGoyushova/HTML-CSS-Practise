
CREATE DATABASE Academy

USE Academy

CREATE TABLE Groups (
Id int,
[Name] nvarchar(20),
Size int
)

ALTER TABLE Groups ADD Description nvarchar(20)

SELECT * FROM Groups

INSERT INTO Groups VALUES (1, 'P515', 16, 'BEST')
INSERT INTO Groups VALUES (2, 'P516', 14, 'BESST'),(3, 'P517', 14, 'BESTT')
INSERT INTO Groups VALUES (2, 'P516', 14, 'BESST'),(3, 'P517', 14, 'BESTT')
INSERT INTO Groups VALUES (4, 'N516', 14, 'BESST'),(5, 'P517', 14, 'BESTT')
INSERT INTO Groups VALUES (6, 'N516', 14, 'BESST'),(7, 'P517', 14, 'BESTT')

UPDATE Groups SET [Name]='Lorem' WHERE Id=2
DELETE FROM Groups WHERE Id=1

SELECT Name FROM Groups
WHERE Name LIKE '%6'
SELECT Name FROM Groups
WHERE Name LIKE 'N%'

DELETE FROM Groups WHERE Name='P515'
DELETE FROM Groups WHERE Name LIKE '%m'

CREATE TABLE Students (
Id int,
[Name] nvarchar(20),
Age int
)
INSERT INTO Students VALUES (1, 'aci', 14)
INSERT INTO Students (Id, Name) VALUES (2, 'acis')

SELECT * FROM Students