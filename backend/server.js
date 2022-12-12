const http = require('http');
const app = require('./app')
const server = http.createServer(app);

require('./db/config')

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')