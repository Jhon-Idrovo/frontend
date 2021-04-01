// var path = require("path");
// var express = require("express");

// var app = express();

// app.use(express.static(path.join(__dirname, "dist")));
// app.set("port", process.env.PORT || 3000);

// var server = app.listen(app.get("port"), function () {
//   console.log("listening on port ", server.address().port);
// });
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
