# Complete platform for http://paramsen.com
_A modern Material Design CMS with a Dockerized platform for continous delivery_  
Meant to run on a single Virtual Server for least expense, in my case on Linode for 10$/month 🤓.  
Full Continous Integration with Ansible [Provision and deploy the site to a virtual host without any manual steps]  
Development environment contained in a Vagrant box [VirtualBox]  exactly resembles production server!  
Schematic over system will go here soon enough 🤓

## Prerequirities
- Vagrant
- Ansible
- Node.js 6+
- virtualbox guest additions for vagrant: (vagrant plugin install vagrant-vbguest)

## Setup
    ~> cd <directory of cloned>
    ~> git submodule update --init --recursive # This repo is separated into 3 git submodules, this, [be][], [fe][]

## Run on server [production]
Ansible enables us to provision (install necessary software on) our server, deploy and run the site without manual interaction.  

To get the site up & running on a new virtual server, just;

    ~> cd ./prod
    ~> ansible-playbook init/setup.yml
    # Ansible provisions your server with the necessary software/configs which might take ~20 minutes
    ~> ansible-playbook deploy/deploy_fe.yml
    ~> ansible-playbook deploy/deploy_containers.yml

And we're up! Without Ansible this would take ~2 hours for this system, with more than 50 tasks to execute. Manually. Whew!  
_If you were to run this, you'd need to create your own ./prod/vars/private.yml files (without .template.) and use your own Ansible inventory for your server IPs!_

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


[be]: https://github.com/paramsen/fe.paramsen.com "backend"
[fe]: https://github.com/paramsen/fe.paramsen.com "frontend"
