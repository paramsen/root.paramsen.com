#!/bin/sh

findDb () {
    echo $(docker inspect --format '{{ .NetworkSettings.Networks.dev_default.IPAddress }}' $(docker ps | grep $1 | cut -d " " -f 1));
}

mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "_db_") -Bse "create table Article(id int primary key auto_increment, title varchar(64) not null, body blob not null, excerpt blob not null, created datetime not null, updated datetime not null);"
mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "_db_") -Bse "create table User(id int primary key auto_increment, username varchar(16) not null, password varchar(128) not null);"

mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "db-test") -Bse "create table Article(id int primary key auto_increment, title varchar(64) not null, body blob not null, excerpt blob not null, created datetime not null, updated datetime not null);"
mysql -u $DB_USER -p$DB_PW -D $DB_NAME -h $(findDb "db-test") -Bse "create table User(id int primary key auto_increment, username varchar(16) not null, password varchar(128) not null);"
