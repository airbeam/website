pm2 kill
cd /home/ubuntu/website
rm -rf /home/ubuntu/website
yarn
yarn run build
pm2 start server.js
