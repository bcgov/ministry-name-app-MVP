FROM postgres:alpine
# DB credentials
ARG POSTGRES_HOST=postgres POSTGRES_USER=kat POSTGRES_PASSWORD=mypass POSTGRES_DB=nameapp
ENV POSTGRES_USER=${POSTGRES_USER} POSTGRES_PASSWORD=${POSTGRES_PASSWORD} POSTGRES_DB=${POSTGRES_DB}
RUN chmod a+r /docker-entrypoint-initdb.d/*
# Run db seed scripts
ADD ./db/createDbTables.sql /docker-entrypoint-initdb.d
ADD ./db/populateDbTables.sql /docker-entrypoint-initdb.d