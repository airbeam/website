cd /home/ubuntu/website
yarn
yarn run build
cp ../../ubuntu/../ubuntu/.env ./.env
pm2 start 'yarn start'
