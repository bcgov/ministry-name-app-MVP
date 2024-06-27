--Create the database and user with password:
CREATE DATABASE nameapp;
CREATE USER kat WITH PASSWORD 'mypass';
GRANT ALL PRIVILEGES ON DATABASE nameapp TO kat;
--if exists, drop all tables first to avoid foreign/primary key constrait errors
DROP TABLE IF EXISTS ministry_history;
DROP TABLE IF EXISTS ministry_acronym;
DROP TABLE IF EXISTS acronym;
DROP TABLE IF EXISTS ministry;

-- Create tables and corresponding relationships for ministry names, acronyms and histories
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
    acronym VARCHAR(10) NOT NULL,
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

-- add descriptive comment for the ministry table:
COMMENT ON TABLE ministry IS 'Stores ministry name data';
-- add descriptive comment for each column in ministry table:
COMMENT ON COLUMN ministry.ministry_id IS 'An auto-generated unique id number that functions as the primary key and the ministrys id number. e.g. 22';
COMMENT ON COLUMN ministry.ministry_name IS 'The official name of a ministry, e.g. CITIZENS SERVICES';
COMMENT ON COLUMN ministry.m_change_effective_date IS 'The date of when the ministry change is effective as yyyy-mm-dd, e.g., 2015-11-22';
COMMENT ON COLUMN ministry.m_change_user IS 'The database user who made the change. Current database user will be automatically inserted here';
COMMENT ON COLUMN ministry.m_datestamp IS 'The date and time the record was created or last changed. The current date and time will automatically be inserted here.';
COMMENT ON COLUMN ministry.is_current IS 'A boolean value showing if the ministry is currently active. Is currently active = true, no longer active = false';

-- add descriptive comment for the acronym table:
COMMENT ON TABLE acronym IS 'Stores ministry acronym data';
-- add descriptive comment for each column in acronym table:
COMMENT ON COLUMN acronym.acronym_id IS 'An auto-generated unique id number that functions as the primary key and the acronym id number. e.g. 16';
COMMENT ON COLUMN acronym.acronym IS '3-6 letters that signify the official acronym of a ministry. , e.g. CITZ';
COMMENT ON COLUMN acronym.a_change_effective_date IS 'The date of when the acronym change is effective as yyyy-mm-dd, e.g., 2015-11-22';
COMMENT ON COLUMN acronym.a_change_user IS 'The database user who made the change. Current database user will be automatically inserted here';
COMMENT ON COLUMN acronym.a_datestamp IS 'The date and time the record was created or last changed. The current date and time will automatically be inserted here.';

-- add descriptive comment for the ministry_acronym table:
COMMENT ON TABLE ministry_acronym IS 'Utility table used for joining ministries to their assigned acronyms via ministry.ministry_id and acronym.acronym_id ';
-- add descriptive comment for each column in ministry_acronym table:
COMMENT ON COLUMN ministry_acronym.ministry_id IS 'The ministry_id, a unique numeric value referencing the ministry_id in the ministry table. Functions as one half of a composite primary key along with ministry_acronym.acronym_id';
COMMENT ON COLUMN ministry_acronym.acronym_id IS 'The acronym_id, a unique numeric value referencing the acronym_id in the acronym table. Functions as one half of a composite primary key along with ministry_acronym.ministry_id';

-- add descriptive comment for the ministry_history table:
COMMENT ON TABLE ministry_history IS 'Utility table used to attach ministries to their historical ministries using a self join on ministry_id. Functions as many-to-many relationship.';
-- add descriptive comment for each column in ministry_history table:
COMMENT ON COLUMN ministry_history.ministry_id IS 'The ministry_id, a unique numeric value referencing the ministry_id in the ministry table. Functions as one half of a composite primary key along with ministry_history.ministry_id_history';
COMMENT ON COLUMN ministry_history.ministry_id_history IS 'The ministry_id of the ministry that is a parent of the corresponding ministry_history.ministry_id , a unique numeric value referencing the ministry_id in the ministry table. Functions as one half of a composite primary key along with ministry_history.ministry_id';
COMMENT ON COLUMN ministry_history.acronym_id_history IS 'The most recent acronym_id of the historical (parent) ministry';
            