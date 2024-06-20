FROM postgres:alpine
# DB credentials
ARG POSTGRES_USER=kat 
ARG POSTGRES_PASSWORD=mypass 
ARG POSTGRES_DB=nameapp

ENV POSTGRES_USER=${POSTGRES_USER} 
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD} 
ENV POSTGRES_DB=${POSTGRES_DB}

# db seed init scripts
COPY ./db/createDbTables.sql /docker-entrypoint-initdb.d/
COPY ./db/populateDbTables.sql /docker-entrypoint-initdb.d/

# Expose postgres port
EXPOSE 5432

CMD ["postgres"]