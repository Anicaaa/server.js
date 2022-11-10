const express = require("express");

const app = express();

app.get("/", function (req, res) {
  //console.log(req);
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: anica@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is Anica and I'm learning Express");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Travelling</li><li>Content Creation</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
