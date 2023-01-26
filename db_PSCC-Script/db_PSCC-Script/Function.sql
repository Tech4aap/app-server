	
CREATE FUNCTION ID_Generate()
RETURNS varchar(9)
AS
BEGIN
    RETURN concat(
      char(round(rand()*25,0)+65), 
      round(rand()*100,0), 
      char(round(rand()*25,0)+65), 
      round(rand()*100,0), 
      char(round(rand()*25,0)+65), 
      round(rand()*32,0), 
      char(round(rand()*25,0)+65)
      );
END