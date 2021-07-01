const fetch = require("node-fetch");
const express = require("express");

const app = express();

let PORT=null;

app.listen(5372);



app.get("/", function (req, res) {
  res.send("Ping");
  setTimeout(myPingPong, 500);
});



function myPingPong() {

  fetch("http://172.17.0.2:" + PORT)
    .then((res) => res.text())
    .then((text) => console.log(text));
}





async function fetchPort() {
    PORT = await fetch("http://172.17.0.3:8080/serv1").then((res) =>
    res.text()
  );

  console.log("boop"+PORT);

  console.log("restart");
  myPingPong(PORT);
}





if(PORT==null){
  fetchPort();

}
