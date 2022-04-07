var express = require("express");
var rest = express.Router();
var fs = require("fs")
var exec = require("child_process").exec

rest.get("/", async (req, res) => {
    res.json({
        status: "OK",
        avaliable_https: fs.readdirSync("./rest/apis").map((Element => {
            return "/" + Element.split(".")[0]
        })),
        author: "https://github.com/phaticusthiccy"
    })
})
module.exports = rest;