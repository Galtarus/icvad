const fetch = require("node-fetch");
const express = require("express");

const app = express();

let PORT=null;

app.listen(4567);



app.get("/", function (req, res) {
  res.send("Pong");
  setTimeout(myPingPong, 500);
});



function myPingPong() {

  fetch("http://172.17.0.4:" + PORT)
    .then((res) => res.text())
    .then((text) => console.log(text));
}





async function fetchPort() {
    PORT = await fetch("http://172.17.0.3:8080/serv2").then((res) =>
    res.text()
  );

  console.log("boop"+PORT);

  console.log("restart");
  myPingPong(PORT);
}





if(PORT==null){
  fetchPort();

}
