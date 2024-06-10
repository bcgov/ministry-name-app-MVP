FROM postgres:alpine
# DB credentials
ARG POSTGRES_USER=kat 
ARG POSTGRES_PASSWORD=mypass 
ARG POSTGRES_DB=nameapp

ENV POSTGRES_USER=${POSTGRES_USER} 
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD} 
ENV POSTGRES_DB=${POSTGRES_DB}

# Run db seed scripts
ADD ./db/createDbTables.sql /docker-entrypoint-initdb.d
ADD ./db/populateDbTables.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*

EXPOSE 5432