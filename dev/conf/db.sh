#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR/../../modules/run/dev

function execSql {
    docker-compose exec -T "$1" mysql -u $DB_USER -p$DB_PW -D $DB_NAME -Bse "$2"
}

function createArticleTable {
    execSql $1 "create table Article(id int primary key auto_increment, title varchar(64) not null, body blob not null, excerpt blob not null, created datetime not null, updated datetime not null);"
}

function createUserTable {
    execSql $1 "create table User(id int primary key auto_increment, username varchar(16) not null, password varchar(128) not null);"
}

function insertUser {
    if [[ "$(execSql $1 'select * from User')" != *root* ]];then
        execSql $1 "insert into User (username, password) values ('root', '\$2a\$10\$P28l/aAtwwidrplUoBldIuj4kToolecvnnWQw02ItrA1Gnh/Y0oRa');"
    else
        echo "User root already exist in db: $1"
    fi
}

createArticleTable "db"
createUserTable "db"
insertUser "db"

createArticleTable "db-test"
createUserTable "db-test"

popd