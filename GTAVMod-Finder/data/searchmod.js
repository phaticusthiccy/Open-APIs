const fs = require('fs')
const exec = require('child_process').exec;
const call = require('axios')

var trimbf = '<div class="name">'
var trimaf = '<a href="'
var usermeta = '<div id="profile" data-user-id="'

async function read() {
  var former = {
    status: false,
    name: "",
    url: "",
    version: "",
    author: "",
    author_page: ""
  }
  var text = fs.readFileSync(
    './response.txt','utf8'
  )
  var count = 1
  try {
    var test = text.split(usermeta)
  } catch {
    count = 0
  }
  var prog = text
  if (count == 1) {
    former.status = true
    former.name = prog.split(
      trimbf
    )[1].split(
      'title="'
    )[1].split(
      '">'
    )[0]
    former.url = "https://www.gta5-mods.com" + prog.split(
      trimbf
    )[1].split(
      trimaf
    )[1].split(
      '"'
    )[0]
    former.version = prog.split(
      trimbf
    )[1].split(
      '<div class="version" dir="ltr" title="'
    )[1].split(
      '"'
    )[0]
    former.author_page = "https://www.gta5-mods.com" + prog.split(
      trimbf
    )[1].split(
      '<span class="bottom-by">By</span> <a href="'
    )[1].split(
      '"'
    )[0]
    former.author = prog.split(
      trimbf
    )[1].split(
      '<span class="bottom-by">By</span> <a href="'
    )[1].split(
      'title="'
    )[1].split(
      '"'
    )[0]                                               
  } else {
    former.status = false                                                                 
  }
  return former                                                                         
}
                                                                                       
module.exports = read
