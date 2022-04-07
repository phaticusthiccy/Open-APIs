const express = require("express");
var app = express();
var index = require("./api/index");

app.use(express.json({extended:false}));
app.use("/api/index", index);
var port = 8080
app.listen(port, () => console.log("running 8080"))