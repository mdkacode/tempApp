#!/bin/sh
echo "Start Server";
kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:4000)
echo "Killed Port for Server"
cd www;
. /usr/local/opt/nvm/nvm.sh
nvm use 11;

yarn dev > ../frontend.log &
cd ..;
cd api;
. /usr/local/opt/nvm/nvm.sh
nvm use 11;

yarn dev > ../backend.log &

sleep 10 && open  http://localhost:3000
echo "----------------------APPLICATION STARTED SUCCESFULLY -------------------------------"
exit


