USE P515

CREATE VIEW StudentReport
AS
SELECT * FROM Students


SELECT * FROM StudentReport

CREATE PROCEDURE GetStudentById @id int
AS
SELECT * FROM Students WHERE Id=@id

exec GetStudentById 1
exec GetStudentById 4

CREATE PROCEDURE GetStudentByFirstLetterr @firstLetter char
AS
SELECT * FROM Students WHERE Name LIKE @firstLetter+'%'

exec GetStudentByFirstLetterr a

CREATE FUNCTION GetStuCountByPoint(@mark int)
RETURNS int
AS
BEGIN
DECLARE @Count int
SELECT @Count=COUNT(*) FROM Students WHERE Mark>@mark
RETURN @Count
END

SELECT dbo.GetStuCountByPoint(50)