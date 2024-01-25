#!/bin/sh -l

echo "Hello $1"
echo "Hello $2"
time=$(date)
ls -al
echo "time=$time" >> $GITHUB_OUTPUT


