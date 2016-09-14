#!/bin/sh

rm build/*

npm run build

cp src/index.html static/* build