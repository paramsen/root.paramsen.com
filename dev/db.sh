#!/bin/sh

findDb () {
    echo $(docker inspect --format '{{ .NetworkSettings.Networks.dev_default.IPAddress }}' $(docker ps | grep $1 | cut -d " " -f 1));
}

mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "_db_") -Bse "create table Article(id int primary key auto_increment, title char(64), body blob, created date, updated date);" 2> /dev/null || true
mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "db-test") -Bse "create table Article(id int primary key auto_increment, title char(64), body blob, created date, updated date);" 2> /dev/null || true
