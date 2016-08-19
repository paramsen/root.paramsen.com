#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR/../../modules/run/dev

function execSql {
    docker-compose exec -T "$1" mysql -u $DB_USER -p$DB_PW -D $DB_NAME -Bse "$2"
}

function createArticleTable {
    execSql $1 "create table Article(id int primary key auto_increment, name varchar(64) not null, title varchar(64) not null, body blob not null, excerpt blob not null, created datetime not null, updated datetime not null);"
}

function createUserTable {
    execSql $1 "create table User(id int primary key auto_increment, name varchar(64) not null, username varchar(16) not null, password varchar(128) not null);"
}

function insertUser {
    if [[ "$(execSql $1 'select * from User')" != *root* ]];then
        execSql $1 "insert into User (username, password) values ('root', '\$2a\$10\$P28l/aAtwwidrplUoBldIuj4kToolecvnnWQw02ItrA1Gnh/Y0oRa');"
    else
        echo "User root already exist in db: $1"
    fi
}

function insertArticle {
    execSql $1 "insert into Article (name, title, body, excerpt, created, updated) values ('$2', '$3', '$4', '$5', '$6', '$7');"
}

createArticleTable "db"
createUserTable "db"
insertUser "db"
insertArticle "db" "android-stuff" "Android stuff" "Example body" "Short describing text that adds something to the article" "2016-06-06" "2016-06-06"
insertArticle "db" "smth" "Title" "#A post about smth
##Cool stuff going on
Some brödtext
*Test" "Another short descriptive text about this article" "2016-06-07" "2016-06-07"
insertArticle "db" "another-url" "Title" "Body" "Excerpt" "2016-06-08" "2016-06-08"
insertArticle "db" "yet-another" "Title" "Body" "Excerpt" "2016-07-09" "2016-07-09"

createArticleTable "db-test"
createUserTable "db-test"
insertUser "db-test"

popd