#!/bin/sh
# Environment vars for dev

#db
export MYSQL_ROOT_PASSWORD="root"
export MYSQL_DATABASE="db"
export MYSQL_USER="root"
export MYSQL_PASSWORD="root"

#be
export NODE_ENV="development"
export DB_HOST="db"
export DB_USER=$MYSQL_USER
export DB_PW=$MYSQL_PASSWORD
export DB_NAME=$MYSQL_DATABASE
