#!/bin/bash
# rebuild and start be in vagrant

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $DIR/../

expect util/be_restart.tcl

popd