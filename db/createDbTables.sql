-- Create tables and corresponding relationships for ministry names, acronyms and histories

-- drop table if exists and add ministry table
DROP TABLE IF EXISTS ministry;
CREATE TABLE IF NOT EXISTS ministry
    (ministry_id SERIAL NOT NULL, 
    ministry_name VARCHAR(255) NOT NULL, 
    m_change_effective_date DATE NOT NULL,
    m_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER,
    m_datestamp DATE NOT NULL DEFAULT CURRENT_DATE,
    is_current BOOLEAN NOT NULL,
    PRIMARY KEY (ministry_id)
    );

-- drop table if exists and add acronym table
DROP TABLE IF EXISTS acronym;
CREATE TABLE IF NOT EXISTS acronym
    (acronym_id SERIAL NOT NULL,
    acronym VARCHAR(20) NOT NULL,
    a_change_effective_date DATE NOT NULL,
    a_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER,
    a_datestamp DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (acronym_id)
    );

-- drop table if exists and add ministry_acronym table which will show the ministry with corresponding acronym
DROP TABLE IF EXISTS ministry_acronym;
CREATE TABLE IF NOT EXISTS ministry_acronym
    (ministry_id integer references ministry(ministry_id),
    acronym_id integer references acronym(acronym_id),
    PRIMARY KEY(ministry_id, acronym_id)
    );

-- drop table if exists and add ministry_history table
DROP TABLE IF EXISTS ministry_history;
CREATE TABLE IF NOT EXISTS ministry_history
    (ministry_id integer references ministry(ministry_id),
    ministry_id_history integer references ministry(ministry_id),
    acronym_id_history integer references acronym(acronym_id),
    PRIMARY KEY(ministry_id, ministry_id_history)
    );




