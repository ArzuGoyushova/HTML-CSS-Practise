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