USE rrhh;
INSERT INTO departaments(departament_id,nom)
	VALUES(103, "Logistica"),
			(104, "Transport");
            
DELETE 
	FROM departaments
WHERE departament_id = 100 OR departament_id = 101;

DELETE 
	FROM departaments
WHERE departament_id IN(101,102);

UPDATE departaments
	SET nom = CONCAT(nom,"-",departament_id)
WHERE localitzacio_id = 1700;

UPDATE departaments
	SET localitzacio_id = 2500
WHERE localitzacio_id IS NULL;
