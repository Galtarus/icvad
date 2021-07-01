const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.listen(8080);

const url1 = 4567;
const url2 = 5372;

app.get("/serv1", function (req, res) {
  res.send("4567");
});

app.get("/serv2", function (req, res) {
  res.send("5372");
});
