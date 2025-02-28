/*Exercici 1*/
SELECT * 
	FROM empleats;

/*Exercici 2*/
SELECT	cognoms
	FROM empleats;

/*Exercici 3*/
SELECT DISTINCT cognoms 
	FROM empleats;
    
/*Exercici 4*/
SELECT nom, cognoms 
	FROM empleats;
    
/*Exercici 5*/
SELECT CONCAT(cognoms, ', ', nom) AS NomComplert
	FROM empleats;
    
/*Exercici 6*/
SELECT UPPER(nom) AS nom_majuscules, LOWER(nom) AS nom_minuscules
	FROM empleats;
    
SELECT UPPER(CONCAT(cognoms, ', ', nom)) AS nom_majuscules, LOWER(CONCAT(cognoms, '. ', nom)) AS nom_minuscules
	FROM empleats;
    
/*Exercici 7*/
SELECT LEFT(cognoms, 6)
	FROM empleats;
    
/*Exercici 8*/
SELECT cognoms, LENGTH(cognoms) AS longitud
	FROM empleats
WHERE LENGTH(cognoms) > 6;

/*Exercici 9*/
USE rrhh;

SELECT id_cap, MIN(salari) AS min_salari
	FROM empleats
WHERE id_cap IS NOT NULL
GROUP BY id_cap
HAVING min_salari > 6000;

/*JOIN
Exercici 1*/
SELECT d.nom, COUNT(e.empleat_id) AS qt
	FROM empleats e
	RIGHT JOIN departaments d ON e.departament_id = d.departament_id
GROUP BY d.departament_id;
    
/*Exercici 2*/
SELECT e.nom, e.cognoms, d.nom, d.departament_id
	FROM empleats e
	INNER JOIN departaments d ON e.departament_id = d.departament_id;
    
/*Exercici 3*/
SELECT d.nom, d.departament_id, e.nom, e.cognoms
	FROM empleats e
	INNER JOIN departaments d ON e.departament_id = d.departament_id
ORDER BY d.nom, e.cognoms, e.nom;

/*Exercici 4*/
SELECT d.departament_id, d.nom, COUNT(e.empleat_id) AS qt
	FROM empleats e
    INNER JOIN departaments d ON e.departament_id = d.departament_id
GROUP BY d.departament_id;

/*Exercici 1*/
SELECT d.nom, d.departament_id, e.nom, e.cognoms
	FROM empleats e
	INNER JOIN departaments d ON e.departament_id = d.departament_id
ORDER BY d.nom, e.cognoms, e.nom;

/*Exercici 2*/
SELECT d.departament_id, d.nom, l.adreca, l.codi_postal, l.ciutat
	FROM departaments d
    INNER JOIN localitzacions l ON d.localitzacio_id = l.localitzacio_id;

/*Exercici 3*/
SELECT d.departament_id, d.nom, l.adreca, l.codi_postal, l.ciutat
	FROM departaments d
    INNER JOIN localitzacions l ON d.localitzacio_id = l.localitzacio_id
WHERE nom = "Marketing";

/*Exercici 4*/
SELECT l.localitzacio_id, l.ciutat, l.estat_provincia, p.nom, r.nom
	FROM localitzacions l
    INNER JOIN paisos p ON p.pais_id = l.pais_id
    INNER JOIN regions r ON r.regio_id = p.regio_id
WHERE (l.localitzacio_id = 1400) OR (l.localitzacio_id = 1700) OR (l.localitzacio_id = 2500);

/*Exercici 5*/
SELECT e.empleat_id, e.nom, e.cognoms, hf.data_inici, hf.data_fi, d.nom, f.nom_treball, e.feina_codi AS feina_codi_actual, f_actual.nom_treball AS feina_nom_actuall
	FROM empleats e 
    LEFT JOIN historial_feines hf ON e.empleat_id = hf.empleat_id
    LEFT JOIN departaments d ON d.departament_id = hf.departament_id
    LEFT JOIN feines f ON f.feina_codi = hf.feina_codi
    INNER JOIN feines f_actual ON f_actual.feina_codi = e.feina_codi;