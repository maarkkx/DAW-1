USE municipis_covid19;

ALTER TABLE comarca
	RENAME TO comarques;
    
ALTER TABLE comarques
	MODIFY COLUMN comarca_id INT UNSIGNED AUTO_INCREMENT,
    MODIFY COLUMN codi CHAR(2) NOT NULL,
    MODIFY COLUMN nom VARCHAR(25) NOT NULL,
    ADD CONSTRAINT uk_comarques_codi UNIQUE (codi),
    ADD CONSTRAINT pk_comarques_comarcaid PRIMARY KEY (comarca_id);

ALTER TABLE municipis
	MODIFY COLUMN municipi_id INT UNSIGNED AUTO_INCREMENT,
    ADD COLUMN num_habitants INT UNSIGNED
		AFTER nom,
    CHANGE COLUMN comarca comarca_id INT UNSIGNED
		AFTER municipi_id,
	MODIFY COLUMN codi CHAR(40) NOT NULL,
    MODIFY COLUMN codi_ine INT,
    ADD CONSTRAINT uk_municipis_codi UNIQUE (codi),
    ADD CONSTRAINT uk_municipis_codiine UNIQUE (codi_ine),
    ADD CONSTRAINT fk_municipis_comarques FOREIGN KEY (comarca_id)
		REFERENCES comarques(comarca_id),
    ADD CONSTRAINT pk_municipis PRIMARY KEY (municipi_id);

ALTER TABLE casos
	DROP FOREIGN KEY fk_casos_tipus_casos,
	DROP INDEX fk_casos_tipus_casos;

ALTER TABLE tipus_casos
    DROP PRIMARY KEY;
    
ALTER TABLE tipus_casos
	MODIFY COLUMN tipus_cas ENUM("PCR","TAR","ELISA","TR","EPID"),
    ADD CONSTRAINT pk_tipuscasos PRIMARY KEY (tipus_cas);
        
ALTER TABLE casos
	RENAME TO municipi_casos;

UPDATE municipi_casos
	SET quantitat = 0
	WHERE quantitat IS NULL;

ALTER TABLE municipi_casos
    MODIFY COLUMN municipi_id INT UNSIGNED,
    MODIFY COLUMN sexe ENUM("H","D"),
    MODIFY COLUMN tipus_cas ENUM("PCR","TAR","ELISA","TR","EPID"),
    MODIFY COLUMN quantitat SMALLINT NOT NULL DEFAULT 0,
    ADD COLUMN any YEAR AS (YEAR(data)) VIRTUAL
		AFTER tipus_cas,
    ADD CONSTRAINT ck_municipicasos_tipuscas CHECK (tipus_cas = UPPER(tipus_cas)),
    ADD CONSTRAINT pk_municipicasos_municipiid_data_sexe_tipuscas PRIMARY KEY (municipi_id,data,sexe,tipus_cas),
    ADD CONSTRAINT fk_municipiscasos_municipis FOREIGN KEY (municipi_id)
		REFERENCES municipis(municipi_id),
	ADD CONSTRAINT fk_municipicasos_tipuscasos FOREIGN KEY (tipus_cas)
		REFERENCES tipus_casos(tipus_cas);
        
CREATE VIEW v_municipicasos AS
	SELECT municipi_id,data,sexe,tipus_cas
		FROM municipi_casos;
	
CREATE VIEW v_municipis_municipiid_nom AS
    SELECT municipi_id,nom
		FROM municipis
	WHERE nom LIKE "A%";
    
CREATE VIEW v_municipis AS
	SELECT *
		FROM municipis
	WHERE codi_ine > "111";

CREATE VIEW v_municipis_girona AS
	SELECT municipi_id,comarca_id,nom
		FROM municipis
	WHERE comarca_id = 2 OR comarca_id = 10 OR comarca_id = 15 OR comarca_id = 19 OR comarca_id = 20 OR comarca_id = 28 OR comarca_id = 31 OR comarca_id = 34;