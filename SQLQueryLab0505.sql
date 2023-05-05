CREATE DATABASE Pharmacy

USE Pharmacy

CREATE TABLE Depot(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
City nvarchar(50) NOT NULL,
ZipCode nvarchar(50) NOT NULL
)
INSERT INTO Depot VALUES
('Depo1', 'Baku', 'AZ1129'),
('Depo2', 'Sumgayit', 'AZ1011')


CREATE TABLE Medicines(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
Manufacturer nvarchar(50) NOT NULL,
Price decimal(18,2) NOT NULL
)
INSERT INTO Medicines VALUES
('Derman1', 'Firma1', 22),
('Derman2', 'Firma1', 24),
('Derman3', 'Firma1', 21),
('Derman4', 'Firma1', 22),
('Derman5', 'Firma2', 32),
('Derman6', 'Firma2', 34),
('Derman7', 'Firma2', 36),
('Derman8', 'Firma3', 6.5),
('Derman9', 'Firma3', 12),
('Derman10', 'Firma4', 64)


CREATE TABLE Pharmacies(
Id int IDENTITY PRIMARY KEY,
[Name] nvarchar(50) NOT NULL,
ZipCode nvarchar(50) NOT NULL,
City nvarchar(50) NOT NULL,
DepotId int FOREIGN KEY REFERENCES Depot(Id)
)

INSERT INTO Pharmacies VALUES
('Aptek1', 'Baku', 'AZ1129',1),
('Aptek2', 'Baku', 'AZ1111',1),
('Aptek3', 'Sumgayit', 'AZ1010',2),
('Aptek4', 'Sumgayit', 'AZ1065',2)

CREATE TABLE PharmacyMedicines(
Id int IDENTITY PRIMARY KEY,
MedicineId int FOREIGN KEY REFERENCES Medicines(Id),
PharmacyId int FOREIGN KEY REFERENCES Pharmacies(Id),
MedicineCountAtPharmacy int
)
INSERT INTO PharmacyMedicines VALUES
(1,1,10),
(2,1,4),
(3,1,20),
(4,2,12),
(5,2,6),
(6,2,24),
(1,3,14),
(3,3,4),
(5,3,10),
(7,3,6),
(1,4,8),
(2,4,4),
(3,4,20),
(8,4,12),
(9,4,6),
(10,4,24)

CREATE TABLE DepotMedicines(
Id int IDENTITY PRIMARY KEY,
MedicineId int FOREIGN KEY REFERENCES Medicines(Id),
DepotId int FOREIGN KEY REFERENCES Depot(Id),
MedicineCountAtDepot int
)

INSERT INTO DepotMedicines VALUES
(1,1,100),
(2,1,40),
(3,1,20),
(4,1,60),
(5,1,70),
(6,1,24),
(5,1,10),
(7,1,6),
(8,1,12),
(9,1,6),
(10,1,24),
(1,2,200),
(2,2,60),
(3,2,20),
(4,2,60),
(5,2,77),
(6,2,24),
(5,2,10),
(7,2,60),
(8,2,20),
(9,2,46),
(10,2,240)

CREATE VIEW Medireport
AS
SELECT m.Name as Derman_adi, m.Manufacturer as Istehsalci, m.Price as Qiymeti, p.Name as Aptek, d.Name as Depo FROM Medicines m
INNER JOIN PharmacyMedicines pm ON pm.MedicineId=m.Id
INNER JOIN Pharmacies p ON p.Id=pm.PharmacyId
INNER JOIN DepotMedicines dm ON dm.MedicineId=m.Id
INNER JOIN Depot d ON d.Id=dm.DepotId

SELECT * FROM Medireport





CREATE VIEW LessThan10
AS
SELECT m.Name as Derman_adi, p.Name as Aptek, pm.MedicineCountAtPharmacy as Sayi FROM Medicines m
INNER JOIN PharmacyMedicines pm ON pm.MedicineId=m.Id
INNER JOIN Pharmacies p ON p.Id=pm.PharmacyId
WHERE pm.MedicineCountAtPharmacy<10

SELECT * FROM LessThan10


CREATE PROCEDURE IncreaseCount @med_id INT
AS
BEGIN
    UPDATE PharmacyMedicines
    SET MedicineCountAtPharmacy = MedicineCountAtPharmacy + 100
    WHERE MedicineID = @med_id
        AND MedicineCountAtPharmacy < 10;
END

exec IncreaseCount 2

SELECT m.Name as Derman_adi, p.Name as Aptek, pm.MedicineCountAtPharmacy as Sayi FROM Medicines m
INNER JOIN PharmacyMedicines pm ON pm.MedicineId=m.Id
INNER JOIN Pharmacies p ON p.Id=pm.PharmacyId
WHERE MedicineId=2

CREATE PROCEDURE TransferMed @med_id int, @beforePH_id int, @afterPH_id int, @count int
AS
BEGIN
    UPDATE PharmacyMedicines
    SET MedicineCountAtPharmacy=MedicineCountAtPharmacy-@count
    WHERE MedicineID = @med_id 
	AND @beforePH_id=PharmacyId;
END
BEGIN
	 INSERT INTO PharmacyMedicines (PharmacyID, MedicineID, MedicineCountAtPharmacy)
            VALUES (@afterPH_id, @med_id, @count) 
END

exec TransferMed 1,1,2,5


CREATE FUNCTION AverageCountt(@zipcode nvarchar(50))
RETURNS float
AS
BEGIN
DECLARE @Avg float
SELECT @Avg=AVG(pm.MedicineCountAtPharmacy) FROM PharmacyMedicines pm
INNER JOIN Pharmacies p ON p.Id=pm.PharmacyId 
WHERE p.ZipCode=@zipcode
RETURN @Avg
END

SELECT dbo.AverageCountt('AZ1129') as AverageCount
