FROM postgres:alpine
# DB credentials
ENV POSTGRES_USER=kat 
ENV POSTGRES_PASSWORD=mypass 
ENV POSTGRES_DB=nameapp

# db seed init scripts
COPY ./db/createDbTables.sql /docker-entrypoint-initdb.d/
COPY ./db/populateDbTables.sql /docker-entrypoint-initdb.d/

# Expose postgres port
EXPOSE 5432

CMD ["postgres"]