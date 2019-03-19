cd /home/ubuntu/website
yarn
yarn run build
cp /home/ubuntu/env/env /home/ubuntu/website/.env
pm2 start 'yarn start'
