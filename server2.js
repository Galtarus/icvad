const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.listen(5372);

app.get("/", function (req, res) {
  res.send("Pong");
  setTimeout(myFetch, 500);
});

function myFetch() {
  fetch("http://localhost:4567")
    .then((res) => res.text())
    .then((text) => console.log(text));
}
