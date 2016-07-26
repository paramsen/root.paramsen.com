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