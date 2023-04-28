CREATE DATABASE Company

USE Company

CREATE TABLE Countries(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
)

CREATE TABLE Cities(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
CountryID int FOREIGN KEY REFERENCES Countries(Id)
)

CREATE TABLE Employees(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
Surname nvarchar(50) DEFAULT('XXX'),
Age int,
Salary decimal(10,3) NOT NULL,
Position nvarchar(50) NOT NULL,
isDeleted bit,
CityID int FOREIGN KEY REFERENCES Cities(Id)
)


INSERT INTO Countries VALUES
('Azerbaijan'),
('South Korea'),
('Japan'),
('US')

INSERT INTO Cities VALUES
('Baki',1),
('Sumqayit',1),
('Tokio',3),
('Yokohama',3),
('Seoul',2),
('Daegu',2),
('Los Angeles',4),
('Texas City',4)

INSERT INTO Employees VALUES
('Chuuya', 'Nakahara', 32, 6000.92, 'Reception',0,4),
('Dazai', 'Osamu', 36, 1200,'CEO',0,3),
('Benji', 'Ovich',26, 2000.50, 'Security', 1, 7),
('Levi', 'Ackerman', 33, 1800, 'Reception',0,8),
('Rosa', 'Diaz', 34, 3000.50,'Detective', 0, 5),
('Amy', 'Santiago', 30, 2400, 'Chief Officer', 1, 6)

--1.Ishcilerin ozleri, yashadigi sheher ve olke
SELECT e.id as Employye_Id, e.name as Employee_Name, e.surname as Employee_Surname, e.Age as Age, e.Position as Position, e.Salary as Salary, ci.name as City, co.name as Country
FROM Employees e
INNER JOIN Cities ci ON e.CityID = ci.Id
INNER JOIN Countries co ON ci.CountryID = co.Id

--2.Maashi 2000+ olan ishcilerin adlari ve yashadigi olke
SELECT e.name as Employee_Name, co.name as Country
FROM Employees e 
INNER JOIN Cities ci ON e.CityID = ci.Id
INNER JOIN Countries co ON ci.CountryID = co.Id 
WHERE e.Salary>2000

--3.Hansi sheher hansi olkeye aiddir
SELECT ci.name as City, co.name as Country
FROM Cities ci 
INNER JOIN Countries co ON ci.CountryID = co.Id 

--4. Position Reception olan ishciliren infosu, id-den bashqa
SELECT * INTO #TempTable FROM Employees WHERE Position='Reception'
ALTER TABLE #TempTable DROP COLUMN Id
SELECT * FROM #TempTable

--5.Ishden chixan ishchilerin ad, soyad, sheher, olke
SELECT e.name as Employee_Name, e.Surname as Employee_Surname, ci.Name as City, co.name as Country
FROM Employees e 
INNER JOIN Cities ci ON e.CityID = ci.Id
INNER JOIN Countries co ON ci.CountryID = co.Id 
WHERE e.isDeleted=1