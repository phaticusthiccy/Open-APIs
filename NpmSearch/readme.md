# NPM Module & User Data Scraper

An unlimited npm scraper.

## 🧾 Usage
```js
// ES 5

const NPM = require("@phaticusthiccy/open-apis");

// ========== NPM PACKAGE SEARCH ========== 
async function start() {
    var data = await NPM.npm_module("package name", "limit", "more info")
    console.log(data)
}

// Outside of Async Function
 NPM.npm_module("package name", "limit", "more info").then(async (data) => {
    console.log(data)
})



// ========== USER SEARCH ========== 
async function start() {
    var data = await NPM.npm_user("username")
    console.log(data)
}

// Outside of Async Function
NPM.npm_user("username").then(async (data) => {
    console.log(data)
})
```

##

## 📂 Response

#### NPM PACKAGE SEARCH
```javascript
[
    {
        name: 'packge name',
        version: 'version',
        description: 'module description',
        author: 'author name',
        author_github_username: 'author github name',
        keywords: [ 'keywords' ],
        npm_url: 'module url',
        repository_homepage: 'repository homepage',
        repository_url: 'repository url',
        issues_url: 'repository issues url',
        publisher_name: 'publisher name',
        publisher_mail: 'publisher mail address',
        maintainers: [ 
            { 
                username: "maintainer username",
                email: "maintainers mail address" 
            }  
        ],
        more_info: {
            last_publish: 'last publish date',
            dependencies: 'dependencies',
            dependents: 'dependents',
            all_versions: 'versions',
            weekly_downloads: 'weekly download count',
            lisance: 'lisance name',
            size: 'repository size',
            total_files: 'files count',
            install_command: 'module install command'
        }
    }
]
```

#### NPM USER SEARCH

```javascript
{
  username: 'username',
  name: 'npm name',
  github_link: 'github url',
  twitter_link: 'twitter url',
  profile_pic: 'hd profile picture',       
  packages: 'package count',
  organizations: 'organization count'
}
```

##

## VARIABLES 

#### MODULE SEARCH

```
NPM.npm_module(
    "package name you want to search",      → string - packge name 
    "how many results you want to see",     → number - 1 / 2 / 3    
    "need more information? type true"      → boolean - true / false
)

NPM.npm_module("open apis", 3, true) <<< Example >>>
```

#### USER SEARCH

```
NPM.npm_user("username you want to search")
                ↓
                > string - username

NPM.npm_user("phaticusthiccy") <<< Example >>>
```

