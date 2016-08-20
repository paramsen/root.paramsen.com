#!/bin/expect
# rebuild and start be in vagrant
# needs to be run from paramsendotcom/dev to access Vagrantfile (the bash script does this)

set timeout -1

spawn vagrant ssh
expect "vagrant@*"
send "cd /www/modules/run/dev/\r"

send "docker-compose stop be\r"
expect "vagrant@*"

send "docker-compose build be\r"
expect "vagrant@*"

send "docker-compose create be\r"
expect "vagrant@*"

send "docker-compose start be\r"
expect "*done"

exit 0
