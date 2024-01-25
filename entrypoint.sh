#!/bin/sh -l

ls -al
read -a array <<< "$1"
echo "Hello: $array[0] $array[1]"
echo "Hello1 $1"
echo "Hello1 $2"

code_dir=app/code
for vendor in "$code_dir"/*
do
    for MODULE in "$vendor"/*
    do
        MODULE_NAME=${MODULE#app/code/}
        echo $MODULE_NAME | sed 's#/#_#g')
    done
done
