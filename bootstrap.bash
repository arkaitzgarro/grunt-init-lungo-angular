#!/bin/bash

usage() {
  cat << EOF
usage "./bootstrap.bash [-N] [-G] [-h]"

Installs the dependencies to get started with the Lungo Angular Bridge

OPTIONS:
  -h Prints this message and exits
  -N Skips the installation of nvm and node.js
  -G Skips the installation of grunt-init

EOF
}

SKIP_NODE=
SKIP_GRUNT_INIT=
while getopts "hNG" OPTION
do
         case $OPTION in
             h)
                 usage
                 exit 0
             ;;
             N)
                 SKIP_NODE=1
             ;;
             G)
                 SKIP_GRUNT_INIT=1
             ;;
         esac
done

echo $'\e[1;33m'"1/4 -- installing node version manager.."$'\e[00m'
if [ -z $SKIP_NODE ]
then
    curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    source ~/.nvm/nvm.sh

    echo $'\e[1;33m'"2/4 -- installing node.js.."$'\e[00m'
    nvm install 0.10
    nvm use 0.10
else
    echo $'\e[1;33m'"Skipping step 1 and 2..."$'\e[00m'
fi

if [ -z $SKIP_GRUNT_INIT ]
then
    echo $'\e[1;33m'"3/4 -- installing grunt-init.."$'\e[00m'
    npm install -g grunt-cli grunt-init
else
    echo $'\e[1;33m'"Skipping step 3..."$'\e[00m'
fi

echo $'\e[1;33m'"4/4 -- installing grunt-init LAB template.."$'\e[00m'
git clone https://github.com/centralway/grunt-init-lungo-angular.git ~/.grunt-init/lungo-angular-bridge

echo $'\e[1;33m'"DONE!"$'\e[00m'
