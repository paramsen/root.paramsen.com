# README
## Prerequirities
- vagrant
- virtualbox
- node [to run tests]
- virtualbox guest additions for vagrant: (vagrant plugin install vagrant-vbguest)

## Dev: First start instructions
    ~> cd ./dev  
    ~> vagrant up  
    #Wait until it is up & running, open new terminal
    ~> cd ./dev  
    ~> vagrant ssh  
    ~> bash /www/dev/conf/db.sh  
    ~> exit  
    ~> cd modules/fe/src && npm start  
    open browser -> browse to http://localhost:1337

## Prod
Currenct manual steps:  
* Conf. server
    * Setup non-privileged user
    * install docker
    * install docker-compose
    * Setup non-privileged docker runner user
    * conf firewall redirect 80->8080
* Git clone this
* Add env vars to satisfy ./modules/run/prod/docker-compose.yml
* Setup backup of database file, maybe with systemd.time or cron
* start docker-compose (cd ./modules/run/prod && docker-compose up)