const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3300, () => {
  console.log('JSON Server is running');
});