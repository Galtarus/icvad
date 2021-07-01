const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.listen(4567);

app.get("/", function (req, res) {
  res.send("Ping");
  setTimeout(myFetch, 500);
});

function myFetch() {
  fetch("http://localhost:5372")
    .then((res) => res.text())
    .then((text) => console.log(text));
}

myFetch();
