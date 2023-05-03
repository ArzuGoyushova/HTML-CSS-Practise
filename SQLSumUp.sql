--DDL
--Databases
CREATE DATABASE Workplace

USE Workplace

DROP DATABASE Workplace

--Database objects

CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  hire_date DATE
);

ALTER TABLE employees
ADD salary DECIMAL(10,2);

ALTER TABLE employees DROP COLUMN hire_date

EXEC sp_rename employees,Employees

DROP TABLE employees;

--DML

INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (1, 'John', 'Doe', '2022-01-01', 50000);

UPDATE employees
SET salary = 55000
WHERE employee_id = 1;


DELETE FROM employees
WHERE employee_id = 1;

--DQL
SELECT * FROM employees;

SELECT * FROM employees
WHERE hire_date >= '2022-01-01';

SELECT * FROM employees
ORDER BY last_name, first_name;

--DCL
GRANT SELECT, INSERT, UPDATE, DELETE ON employees TO HR;

REVOKE INSERT, UPDATE, DELETE ON employees FROM HR;

--TCL
BEGIN TRANSACTION;
UPDATE employees SET salary = 60000 WHERE employee_id = 2;
COMMIT;

BEGIN TRANSACTION;
UPDATE employees SET salary = 65000 WHERE employee_id = 3;
ROLLBACK;


--DATATYPES
--Numeric data types:

--BIT: Stores 0 or 1.
--TINYINT: Stores whole numbers from 0 to 255.
--SMALLINT: Stores whole numbers from -32,768 to 32,767.
--INT: Stores whole numbers from -2,147,483,648 to 2,147,483,647.
--BIGINT: Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.
--DECIMAL and NUMERIC: Stores fixed precision and scale decimal numbers.
--FLOAT and REAL: Stores floating-point numbers with a variable precision.
--Character data types:

--CHAR: Stores fixed-length character strings (up to 8,000 characters).
--VARCHAR: Stores variable-length character strings (up to 8,000 characters).
--TEXT: Stores large variable-length character strings (up to 2 GB).
--Binary data types:

--BINARY: Stores fixed-length binary data (up to 8,000 bytes).
--VARBINARY: Stores variable-length binary data (up to 8,000 bytes).
--IMAGE: Stores large variable-length binary data (up to 2 GB).
--Date and time data types:

--DATE: Stores a date value (year, month, and day).
--TIME: Stores a time value (hours, minutes, seconds, and fractions of a second).
--DATETIME and SMALLDATETIME: Stores a date and time value.
--DATETIMEOFFSET: Stores a date and time value with a time zone offset.
--Other data types:

--UNIQUEIDENTIFIER: Stores a unique identifier (GUID).
--XML: Stores XML data.


--LIKE
SELECT *
FROM dbo.Products
WHERE ProductName LIKE 'Chai%';

SELECT *
FROM dbo.Products
WHERE ProductName LIKE '%tea%';

-- Selects all rows from the dbo.Products table where the ProductName column contains the string 'tea' anywhere.

SELECT *
FROM dbo.Products
WHERE ProductName LIKE '_hai%';

-- Selects all rows from the dbo.Products table where the ProductName column starts with any single character followed by the string 'hai'.

SELECT *
FROM dbo.Products
WHERE ProductName LIKE '[BC]ha%';

-- Selects all rows from the dbo.Products table where the ProductName column starts with the string 'Bha' or 'Cha'.

SELECT *
FROM dbo.Products
WHERE ProductName LIKE 'C[^ha]%';

-- Selects all rows from the dbo.Products table where the ProductName column starts with the letter 'C' followed by any character except 'h' or 'a'.

--SUBSTRING
SUBSTRING (expression, start, length)

SELECT SUBSTRING('Hello, world!', 8, 5);

-- Returns the substring 'world' starting from position 8.

SELECT SUBSTRING('Hello, world!', CHARINDEX(',', 'Hello, world!') + 2, 5);

-- Returns the substring 'world' by first finding the position of the comma and adding 2 to skip the space after it.

SELECT SUBSTRING('12345', 2, 2);

-- Returns the substring '23' starting from position 2.

SELECT SUBSTRING('Hello, world!', 7);

-- Returns the substring 'world!' starting from position 7 to the end of the string.

SELECT SUBSTRING(Surname, CHARINDEX('a',Surname)+1,LEN(Surname)) FROM Students


--One to One

CREATE TABLE Employee (
    EmployeeID int PRIMARY KEY,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Email varchar(100) NOT NULL,
    Phone varchar(20) NOT NULL
);

CREATE TABLE EmployeeDetail (
    EmployeeID int PRIMARY KEY,
    JobTitle varchar(50) NOT NULL,
    Salary decimal(10,2) NOT NULL,
    HireDate date NOT NULL,
    CONSTRAINT FK_EmployeeDetail_Employee FOREIGN KEY (EmployeeID)
    REFERENCES Employee(EmployeeID)
);


--One to Many

CREATE TABLE Author (
    AuthorID int PRIMARY KEY,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Email varchar(100) NOT NULL,
    Phone varchar(20) NOT NULL
);

CREATE TABLE Book (
    BookID int PRIMARY KEY,
    Title varchar(100) NOT NULL,
    ISBN varchar(20) NOT NULL,
    PublishedDate date NOT NULL,
    AuthorID int NOT NULL,
    CONSTRAINT FK_Book_Author FOREIGN KEY (AuthorID)
    REFERENCES Author(AuthorID)
);


--Many to many

CREATE TABLE Student (
    StudentID int PRIMARY KEY,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Email varchar(100) NOT NULL,
    Phone varchar(20) NOT NULL
);

CREATE TABLE Course (
    CourseID int PRIMARY KEY,
    Title varchar(100) NOT NULL,
    Description varchar(500) NOT NULL,
    Instructor varchar(100) NOT NULL
);

CREATE TABLE Enrollment (
    EnrollmentID int PRIMARY KEY,
    StudentID int NOT NULL,
    CourseID int NOT NULL,
    CONSTRAINT FK_Enrollment_Student FOREIGN KEY (StudentID)
    REFERENCES Student(StudentID),
    CONSTRAINT FK_Enrollment_Course FOREIGN KEY (CourseID)
    REFERENCES Course(CourseID)
);




-- `SUM`: In this example, we can calculate the total sales amount for each month in the year by grouping the sales by month and using the `SUM` function:

SELECT DATEPART(MONTH, OrderDate) AS Month, SUM(TotalAmount) AS TotalSales
FROM Orders
GROUP BY DATEPART(MONTH, OrderDate)
ORDER BY Month;


-- `COUNT`: We can count the number of orders placed by each customer using the `COUNT` function and the `GROUP BY` clause:

SELECT CustomerID, COUNT(*) AS OrderCount
FROM Orders
GROUP BY CustomerID
ORDER BY OrderCount DESC;

-- `MAX` and `MIN`: We can find the highest and lowest sales amounts for each product using the `MAX` and `MIN` functions and the `GROUP BY` clause:

SELECT ProductID, MAX(SalesAmount) AS MaxSale, MIN(SalesAmount) AS MinSale
FROM Sales
GROUP BY ProductID;

-- `AVG`: We can calculate the average rating for each product using the `AVG` function and the `GROUP BY` clause:

SELECT ProductID, AVG(Rating) AS AvgRating
FROM Reviews
GROUP BY ProductID;


-- `TOP`: We can find the top 5 customers who have spent the most money using the `TOP` clause and the `ORDER BY` clause:

SELECT TOP 5 CustomerID, SUM(TotalAmount) AS TotalSpent
FROM Orders
GROUP BY CustomerID
ORDER BY TotalSpent DESC;

--HAVING

SELECT Category, SUM(SalesAmount) AS TotalSales
FROM Sales
GROUP BY Category
HAVING SUM(SalesAmount) > 1000;


--`JOIN` is a keyword in MS SQL Server that is used to combine rows from two or more tables based on a related column between them. A join operation allows you to retrieve data from multiple tables and present it as a single result set.

--There are several types of joins in MS SQL Server:

--1. Inner Join: An inner join returns only the rows that have matching values in both tables. The syntax for an inner join is as follows:

SELECT *
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

--2. Left Join: A left join returns all the rows from the left table and the matching rows from the right table. If there is no match in the right table, the result will have NULL values for the columns from the right table. The syntax for a left join is as follows:

SELECT *
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;


--3. Right Join: A right join returns all the rows from the right table and the matching rows from the left table. If there is no match in the left table, the result will have NULL values for the columns from the left table. The syntax for a right join is as follows:

SELECT *
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

--4. Full Outer Join: A full outer join returns all the rows from both tables and NULL values for the columns where there is no match. The syntax for a full outer join is as follows:

SELECT *
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name;


--Here's an example of using an inner join to combine two tables, `Orders` and `Customers`, based on the `CustomerID` column:

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;


--In this query, the `INNER JOIN` clause combines the rows from the `Orders` and `Customers` tables based on the `CustomerID` column. The result is a table that shows the order ID, customer name, and order date for each order.

--Joins are a powerful tool for combining data from multiple tables in MS SQL Server, and they allow you to create complex queries that retrieve and analyze data from multiple sources.


--VIEW is a virtual table

CREATE VIEW [SalesByRegion]
AS
SELECT Region, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY Region;

SELECT TotalSales
FROM SalesByRegion
WHERE Region = 'North';

