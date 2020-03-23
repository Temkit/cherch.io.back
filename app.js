const express = require("express");
const bodyParser = require("body-parser");
const searchEngine = require("./channel");
var net = require("net");
var server = net.createServer();

var cors = require("cors");
const app = express();

searchEngine.searchClose();
searchEngine.ingestClose();
searchEngine.searchConnect();
searchEngine.ingestConnect();

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    credentials: true,
    origin: ["127.0.0.1", `http://localhost`, `http://localhost:3000`]
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");
app.use("/yet/api", routes);

server.once("error", function(err) {
  if (err.code === "EADDRINUSE") {
    console.log(`Already in use`);
  }
});

server.once("listening", () => {
  app.listen(3000, () => {
    console.log(`http://localhost:3000`);
  });
  server.close();
});
