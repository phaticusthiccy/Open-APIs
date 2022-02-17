# GTAVModFinder
Experimental mod finder from [gta5-mods.com](https://www.gta5-mods.com/)

##


## Usage ⌨ ( For Local )
```js
// ES-5
const fs = require('fs')
const exec = require('child_process').exec;
const gta5mods = require('@phaticusthiccy/open-apis')

async function start() {
  // For Mod Search
  await gta5mods.base('Neon Intro')
  var data = await gta5mods.read()
  console.log(data)
  
  // For User Scrap
  var data2 = await gta5mods.readuser('thiccy')
  console.log(data2)
}

// For Outside Async Function

gta5mods.base('Neon Intro').then(async (data) => {
  console.log(await gta5mods.read())
})

gta5mods.readuser('thiccy').then(async (data2) => {
  console.log(data2)
})
```

## Usage ⌨ ( For Web )
```js
// ES-5
const fs = require('fs')
const exec = require('child_process').exec;
const gta5mods = require('@phaticusthiccy/open-apis')

async function start() {
  // For Mod Search
  await gta5mods.baseWeb('Neon Intro')
  var data = await gta5mods.readWeb()
  console.log(data)
  
  // For User Scrap
  var data2 = await gta5mods.readuserWeb('thiccy')
  console.log(data2)
}

// For Outside Async Function

gta5mods.baseWeb('Neon Intro').then(async (data) => {
  console.log(await gta5mods.readWeb())
})

gta5mods.readuserWeb('thiccy').then(async (data2) => {
  console.log(data2)
})
```

## Output 💻

> Mod Search

```javascript
{
  status: true,
  name: "Neon Rockstar Intro",
  url: "https://www.gta5-mods.com/misc/neon-rockstar-intro",
  version: "3.0",
  author: "Thiccy",
  author_page: "https://www.gta5-mods.com/users/Thiccy"
}
```

> User Scrap

```javascript
{
  status: true,
  name: "Thiccy",
  profile_pic: "https://img.gta5-mods.com/q75-w100-h100-cfill/avatars/1358134/d7b595-tumblr_oshm2jYFiT1w320ago8_400.jpg",
  profile_url: "https://www.gta5-mods.com/users/Thiccy",
  likes: "0",
  comments: "14",
  videos: "4",
  mods: "2",
  followers: "1",
  downloads: "1,458"
}
```

### Notes 📝

`status`: If it is false, there is no result.

`name`(Mod Search): The mod's name.

`name`(User Scrap): The User's Name.

`url`: Mod's URL.

`version`: Mod's version.

`author`: Mod Owner's Name.

`author_page`: Mod Owner's Page URL.

`profile_pic`: User's Profile Pic URL.

`profile_url`: User's Profile URL.

`likes`: Number of Mods the User Liked.

`comments`: Number of the User's Comments.

`videos`: Number of the User's Uploaded Youtube Videos.

`mods`: Number of the User's Mods.

`followers`: User's Follower Count.

`downloads`: Total Download of User's Mods.
