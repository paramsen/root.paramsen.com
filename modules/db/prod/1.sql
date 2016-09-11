create table db.Article(id int primary key auto_increment, name varchar(64) not null, title varchar(64) not null, body blob not null, excerpt blob not null, created datetime not null, updated datetime not null);
create table db.User(id int primary key auto_increment, name varchar(64) not null, username varchar(16) not null, password varchar(128) not null);

insert into db.Article (name, title, body, excerpt, created, updated) values ('my-first-article', 'My first article', 'This is a test article.  \nIt doesnt say that much\n\n* Test\n* Test1\n* Test2\n\nSome text `AndAClass`\n\n    Test Code\n    More Code\n    Bye!', 'Just a test article', '2016-09-10', '2016-09-10');
    