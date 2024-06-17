FROM postgres:alpine
# DB credentials
ARG POSTGRES_USER=kat 
ARG POSTGRES_PASSWORD=mypass 
ARG POSTGRES_DB=nameapp

ENV POSTGRES_USER=${POSTGRES_USER} 
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD} 
ENV POSTGRES_DB=${POSTGRES_DB}

# entrypoint script
COPY ./db/db_entrypoint.sh /usr/local/bin/

# db seed init scripts
COPY ./db/createDbTables.sql /docker-entrypoint-initdb.d/
COPY ./db/populateDbTables.sql /docker-entrypoint-initdb.d/

# Ensure scripts are executable
#RUN chmod +x /usr/local/bin/db_entrypoint.sh

# Expose postgres port
EXPOSE 5432

# entrypoint to the custom script
#ENTRYPOINT ["/usr/local/bin/db_entrypoint.sh"]
CMD ["postgres"]