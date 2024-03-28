DROP TABLE IF EXISTS ministry;

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS ministry
    (ministry_id SERIAL NOT NULL, 
    ministry_name VARCHAR(255) NOT NULL, 
    m_change_effective_date DATE NOT NULL,
    m_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER,
    m_datestamp DATE NOT NULL DEFAULT CURRENT_DATE,
    is_current BOOLEAN NOT NULL
    PRIMARY KEY (ministry_id)
    );

DROP TABLE IF EXISTS acronym;

CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS acronym
    (acronym_id SERIAL NOT NULL,
    acronym VARCHAR(20) NOT NULL,
    a_change_effective_date DATE NOT NULL,
    a_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER,
    a_datestamp DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (acronym_id)
    );

DROP TABLE IF EXISTS ministry_acronym;
CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS ministry_acronym
    (ministry_id references ministry(ministry_id),
    acronym_id references acronym(acronym_id),
    FOREIGN KEY (ministry_id)
    );

DROP TABLE IF EXISTS ministry_history;
CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS ministry_history
    (ministry_id references ministry(ministry_id),
    ministry_id_history references ministry(ministry_id)
    );

DROP TABLE IF EXISTS acronym_history;
CREATE TABLE IF NOT EXISTS CREATE TABLE IF NOT EXISTS acronym_history
    (acronym_id references acronym(acronym_id),
    acronym_id_history references acronym(acronym_id)
    );



