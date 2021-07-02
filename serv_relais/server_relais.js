const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.listen(1111);


app.get("/serv1", function (req, res) {
    fetch("http://172.16.8.36:4567")
    .then(console.log("Pinged serv1" ));
});

app.get("/serv2", function (req, res) {
  fetch("http://172.16.8.36:5372")
  .then(console.log("Pinged serv2" ));
});

