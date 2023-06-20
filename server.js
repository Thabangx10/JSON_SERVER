// This file will contain the code for your JSON server

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
