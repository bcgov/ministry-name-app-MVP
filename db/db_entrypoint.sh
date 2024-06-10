#!/bin/sh
# Adjust permissions if necessary
chmod 700 /var/lib/postgresql/data /var/run/postgresql || true
chmod 775 /var/lib/postgresql/data || true

# Execute the original entrypoint script with the original arguments
exec docker-entrypoint.sh "$@"