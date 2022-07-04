# Instagram Unlimited Downloader 

An unlimited instagram posts, reels, igtv, and stories.

## 🧾 Usage
```js
const instagram = require("@phaticusthiccy/open-apis");

// ========== POST & IGTV DOWNLOADER ========== 
async function start() {
    var data = await instagram.insta_post("post url or igtv url")
    console.log(data)
}

// Outside of Async Function
instagram.insta_post("post url or igtv url").then(async (data) => {
    console.log(data)
})



// ========== REEL DOWNLOADER ========== 
async function start() {
    var data = await instagram.insta_reel("reel url")
    console.log(data)
}

// Outside of Async Function
instagram.insta_reel("reel url").then(async (data) => {
    console.log(data)
})



// ========== STORY DOWNLOADER ========== 
async function start() {
    var data = await instagram.insta_story("username")
    console.log(data)
}

// Outside of Async Function
instagram.insta_story("username").then(async (data) => {
    console.log(data)
})



// ========== PROFILE ANALYZER ========== 
async function start() {
    var data = await instagram.insta_profile("username")
    console.log(data)
}

// Outside of Async Function
instagram.insta_profile("username").then(async (data) => {
    console.log(data)
})
```

##

## 📂 Response

#### POST & IGTV DOWNLOADER
```javascript
{
    post1: {
        url: 'download url',
        type: 'media type' 
    },
    post2: {
        url: 'download url',
        type: 'media type' // can be "jpg", "png", "mp4" or "webm"
    },
    post3: {
        ...
    }
}
``` 

#### REEL DOWNLOADER
```es6
{
  expires: 'Unlimited',
  data: {
    url: 'Reel Video Download URL',
    user: {
      id: 'user id',
      name: 'user name',
      username: 'username',
      pic: 'user profile picture',
      follower: number // follower count
    },
    likes: number, // Reel likes
    views: number, // Reel views
    comments: number // Reel comments
  }
}
```

#### STORY DOWNLOADER
```javascript
{
   data: [
      'https://www.storydownloader.org/d.php?h=788361735176296', // Video
      'https://www.storydownloader.org/d.php?h=274995514191688', // Video
      'https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/277319635_716980279550355_8850489061613463665_n.jpg?se=8&stp=dst-jpg_e35&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=8azzPBHr00AAX8pYXFh&edm=ANmP7GQBAAAA&ccb=7-4&ig_cache_key=MjgwNjMwMTA1MzQzMzEwMDUyOQ%3D%3D.2-ccb7-4&oh=00_AT-QXbGBDA0kHjjv9G2IqMQR90lOGeguoMnyVOPHoV6GjQ&oe=62488E1E&_nc_sid=276363&dl=1', // Photo
      'https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/277654901_7231415706929762_1707475140100892146_n.jpg?se=8&stp=dst-jpg_e35&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=0DDpTDjcaL8AX_On5oW&edm=ANmP7GQBAAAA&ccb=7-4&ig_cache_key=MjgwNjI3NDE4NjIwNjI2NjUzMw%3D%3D.2-ccb7-4&oh=00_AT8spDW3wFV1i4y8K6fr0EizKcUIsuSjGeArUvi9tdd35A&oe=62484012&_nc_sid=276363&dl=1' // Photo
    ],
    author: 'https://github.com/phaticusthiccy'
  }
}
```

#### PROFILE ANALYZER 
```javascript
{
    profile_pic: "sd profile photo url",
    bio: "profile biography",
    followers: "followers count",
    following: "following count",
    id: "user id",
    popularity: "account popularity",
    avarage_likes: "avarage like count from all posts",
    avarage_comments: "avarage comment count from all posts",
    avarage_post_time: "avarage time between uploded posts",
    video_percentage: "percentage of videos",
    photo_percentage: "percentage of photos"
}
```