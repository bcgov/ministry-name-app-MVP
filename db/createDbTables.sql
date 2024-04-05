-- Create tables and corresponding relationships for ministry names, acronyms and histories

--if exists, drop all tables first to avoid foreign/primary key constrait errors
DROP TABLE IF EXISTS ministry_history;
DROP TABLE IF EXISTS ministry_acronym;
DROP TABLE IF EXISTS acronym;
DROP TABLE IF EXISTS ministry;

-- create ministry table
CREATE TABLE IF NOT EXISTS ministry
    (ministry_id SERIAL NOT NULL, 
    ministry_name VARCHAR(255) NOT NULL, 
    m_change_effective_date DATE,
    m_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER, -- will automatically input current user
    m_datestamp DATE NOT NULL DEFAULT CURRENT_DATE, -- will automatically input current date
    is_current BOOLEAN NOT NULL,
    PRIMARY KEY (ministry_id)
    );

-- create acronym table
CREATE TABLE IF NOT EXISTS acronym
    (acronym_id SERIAL NOT NULL,
    acronym VARCHAR(20) NOT NULL,
    a_change_effective_date DATE,
    a_change_user VARCHAR(255) NOT NULL DEFAULT CURRENT_USER, -- will automatically input current user
    a_datestamp DATE NOT NULL DEFAULT CURRENT_DATE, -- will automatically input current date
    PRIMARY KEY (acronym_id)
    );

-- create ministry_acronym table which will keep track of a ministrys' associated acronym
CREATE TABLE IF NOT EXISTS ministry_acronym
    (ministry_id integer references ministry(ministry_id),
    acronym_id integer references acronym(acronym_id),
    PRIMARY KEY(ministry_id, acronym_id)
    );

-- create ministry_history table to keep track of historical ministry data
CREATE TABLE IF NOT EXISTS ministry_history
    (ministry_id integer references ministry(ministry_id),
    ministry_id_history integer references ministry(ministry_id),
    acronym_id_history integer references acronym(acronym_id),
    PRIMARY KEY(ministry_id, ministry_id_history)
    );

                
