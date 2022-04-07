# Artbreeder Scraper

A data fetch tool from https://www.artbreeder.com/

## 🧾 Usage
```js
// Class

const art = require("@phaticusthiccy/open-apis");
var Artbreeder = new art.Artbreeder(2, "all")

// Random Art
async function start() {
    var data = await Artbreeder.random()
    console.log(data)
}

// Trending Arts
async function start() {
    var data = await Artbreeder.trend()
    console.log(data)
}

// Recent Arts
async function start() {
    var data = await Artbreeder.recent()
    console.log(data)
}

// Search
async function start() {
    var data = await Artbreeder.search("cat boy")
    console.log(data)
}
```

## 

## 🔁 VARIABLES


|        Code        | Value  |              Desc               |          Example           |
|--------------------|--------|---------------------------------|----------------------------|
| `new Artbreeder()` | number | how many result you want to see (1-24) | `new Artbreeder(2)`        |
| `new Artbreeder()` | string | which [model](https://github.com/phaticusthiccy/Open-APIs/tree/main/Artbreeder#MODELS) you want to see | `new Artbreeder(2, "all")` |
| `.search("")`      | string | search query                    | `.search("cat boy")`       |


## MODELS


| Model Name  |                     Description                      |
|-------------|------------------------------------------------------|
| `all`       | including all models                                 |
| `general`   | general arts                                         |
| `portrait`  | human portraits                                      |
| `landscape` | sea, oceon, forest, dawn etc.                        |
| `building`  | skyscraper, office etc.                              |
| `painting`  | paint arts                                           |
| `sci`       | galaxy, sky, planets etc.                            |
| `character` | full body character of game, movie or something else |
| `album`     | album covers                                         |
| `furry`     | furries, foxies etc.                                 |
| `anime`     | anime portraits                                      |


##

## 📂 Response

```javascript
[
  {
    author: 'jschlaggz',
    likes: 1,
    creation_date: 'a few seconds ago',
    url: 'https://artbreeder.b-cdn.net/imgs/59c8458be5dd35da299590f5e7c3.jpeg'
  },
  {
    author: 'firehorse',
    likes: 1,
    creation_date: 'a few seconds ago',
    url: 'https://artbreeder.b-cdn.net/imgs/df188fc2a2bd034e6b7db4012273.jpeg'
  },
  {
    author: 'rctechdoctor',
    likes: 1,
    creation_date: 'a few seconds ago',
    url: 'https://artbreeder.b-cdn.net/imgs/b8c13fc3d443471b64c2fb3842c8.jpeg'
  }
]
```