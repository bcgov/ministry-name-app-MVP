--Create the database and user with password:
CREATE DATABASE nameapp;
CREATE USER kat WITH PASSWORD 'mypass';
GRANT ALL PRIVILEGES ON DATABASE nameapp TO kat;