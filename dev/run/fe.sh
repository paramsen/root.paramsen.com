#!/bin/sh

rm -rf /www/public/* && mkdir /www/public 2> /dev/null
cp -rfu /www/modules/fe/code/build/* /www/public