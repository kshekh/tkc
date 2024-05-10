using apache2 not nginx
using pm2 nut tumx

pm2 start npm --name stage-bi-ai -- run start -- -p 3000
