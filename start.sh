cd /home/ubuntu/website
yarn
yarn run build
pm2 start 'yarn start'
