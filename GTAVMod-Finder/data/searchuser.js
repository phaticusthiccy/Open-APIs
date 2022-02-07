const fs = require('fs')                                                                        
const exec = require('child_process').exec;
const call = require('axios')

let trimbf = '<div class="name">'                                                               
let trimaf = '<a href="'
let usermeta = '<div id="profile" data-user-id="'

async function readuser(name) {
  var metadata = {
    status: false,
    name: "",                                                         
    profile_pic: "",
    profile_url: "",
    likes: "",
    comments: "",                                                     
    videos: "",                                                       
    mods: "",                                                         
    followers: "",
    downloads: ""                                                   
  }
  var count2 = 1                                                                                  
  var AccData = await call.get(
    "https://www.gta5-mods.com/users/" + name
  )
  try {
    var ch = AccData.data.split(
      '<span class="stat-label">'
    )
  } catch {
    count2 = 0
  }
  if (count2 == 1) {
    metadata.status = true
    metadata.name = AccData.data.split(
      usermeta
    )[1].split(
      '<a href='
    )[1].split(
      '/'
    )[2].split(
      '"'
    )[0]
    metadata.profile_pic = AccData.data.split(
      usermeta
    )[1].split(
      '<img class="img-responsive" src="'
    )[1].split(
      '"'
    )[0]
    metadata.likes = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-thumbs-o-up"></span>'
    )[1].split(
      '">'
    )[1].split(
      'files'
    )[0].replace(
      '\n', ''
    ).replace(
      ' ', ''
    )
    metadata.comments = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-comments-o"></span>'
    )[1].split(
      '">'
    )[1].split(
      'comments'
    )[0].replace(
      '\n', ''
    ).replace(
      ' ', ''
    )
    metadata.videos = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-youtube-play"></span>'
    )[1].split(
      '">'
    )[1].split(
      'videos'
    )[0].replace(
      '\n', ''
    ).replace(
      ' ', ''
    )
    metadata.mods = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-upload"></span>'
    )[1].split(
      '">'
    )[1].split(
      'upload'
    )[0].replace(
      '\n', ''
    ).replace(
      ' ', ''
    )
    metadata.followers = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-bullhorn"></span>'
    )[1].split(
      '">'
    )[1].split(
      'followers'
    )[0].replace(
      '\n', ''
    ).split(
      ' '
    )[0]
    metadata.downloads = AccData.data.split(
      usermeta
    )[1].split(
      '<span class="stat-icon fa fa-download"></span>'
    )[1].split(
      '">'
    )[1].split(
      'downloads'
    )[0].replace(
      '\n', ''
    ).replace(
      ' ', ''
    )
    metadata.profile_url = "https://www.gta5-mods.com/users/" + name
  } else {
    metadata.status = false
  }
  return metadata;
}

module.exports = readuser
