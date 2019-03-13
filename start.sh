cd /home/ubuntu/website
sudo pm2 kill
sudo yarn
sudo yarn run build
sudo pm2 start server.js