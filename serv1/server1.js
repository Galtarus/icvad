const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.listen(4567);


app.get("/", function (req, res) {
  console.log("Ponged");
  setTimeout(myPingPong, 500);
});



function myPingPong() {
  fetch("http://172.16.8.36:1111/serv2")
}


myPingPong();