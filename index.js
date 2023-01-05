const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.port || 3001;

server.use((req, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  next();
});
server.use(jsonServer.bodyParser());
server.use(router);
server.use(middleware);
server.use(cors({ origin: "*" }));
server.listen(port, () => {
  console.log(`Server is up and running at port: ${port}`);
});
