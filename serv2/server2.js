const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.listen(5372);


app.get("/", function (req, res) {
  console.log("Pinged");
  setTimeout(myPingPong, 500);
});



function myPingPong() {
  fetch("http://172.16.8.36:1111/serv1")
}


