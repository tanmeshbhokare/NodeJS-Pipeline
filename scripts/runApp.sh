#!/usr/bin/env sh

echo 'The following "npm" command runs your Node.js application'

set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Now you can'
echo 'Visit below urls to see your Node.js application'
echo 'CloudFront - https://d17c2iititoysw.cloudfront.net/'
echo 'Load Balancer - http://nodeapp-lb-63587391.ap-south-1.elb.amazonaws.com/'
echo 'EC2 IP - http://13.233.216.138:3000/'
