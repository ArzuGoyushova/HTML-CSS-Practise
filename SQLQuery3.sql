USE P515
SELECT * FROM Students

SELECT SUBSTRING(Surname, CHARINDEX('a',Surname)+1,LEN(Surname)) FROM Students

SELECT * FROM Students WHERE Age>(SELECT AVG(Age) FROM Students)