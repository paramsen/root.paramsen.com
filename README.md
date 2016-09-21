# Complete platform for http://paramsen.com
_A modern Material Design CMS with a Dockerized platform for continous delivery_  
Meant to run on a single Virtual Server for least expense, in my case on Linode for 10$/month 🤓.  
Development environment contained in a Vagrant box [VirtualBox]  
Schematic over system will go here soon enough 🤓

## Prerequirities
- vagrant
- Ansible
- Node.js 6+
- virtualbox guest additions for vagrant: (vagrant plugin install vagrant-vbguest)

## Setup
    ~> cd <directory of cloned>
    ~> git submodule update --init --recursive # This repo is separated into 3 git submodules, this, [be][], [fe][]

## Run local [dev]: First start instructions
    ~> cd ./dev  
    ~> vagrant up  
    #Wait until it is up & running, open new terminal
    ~> cd ./dev  
    ~> vagrant ssh  
    ~> bash /www/dev/conf/db.sh  
    ~> exit  
    ~> cd modules/fe/src && npm start  
    open browser -> browse to http://localhost:1337

## Run on server [production]
Currenct manual steps until Ansible:  
* Conf. server
    * install docker
    * install docker-compose
    * Setup non-privileged docker user, to not run docker with sudo in prod 
    * create /www/db and /www/public folders, grant docker user read permission
    * conf firewall redirect 80->8080 (& basic security)
* Git clone this
* Add env vars to satisfy ./modules/run/prod/docker-compose.yml
* Setup backup of database file, maybe with systemd.time or cron
* start docker-compose (cd ./modules/run/prod && docker-compose up)

[be]: https://github.com/paramsen/fe.paramsen.com "backend"
[fe]: https://github.com/paramsen/fe.paramsen.com "frontend"
