cd /home/ubuntu/website
rm -rf website

pm2 kill
yarn
yarn run build
pm2 start server.js
