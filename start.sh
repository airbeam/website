pm2 kill
cd /home/ubuntu/website
yarn
yarn run build
pm2 start server.js
