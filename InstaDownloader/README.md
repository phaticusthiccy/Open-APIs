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
    var data = await instagram.insta_story("story url")
    console.log(data)
}

// Outside of Async Function
instagram.insta_story("story url").then(async (data) => {
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
```graphq
{
    post1: {
        url: 'download url',
        type: 'media type' 
    },
    post2: {
        url: 'download url',
        type: 'media type' 
    },
    post3: {
        ... (type = "jpg / png / mp4 / webm")
    }
}
``` 

#### REEL DOWNLOADER
```graphq
{
    expires: 'Unlimited',
    url: 'download url'
}
```

#### STORY DOWNLOADER
```graphq
{
    stories: [
        {
            media_type: "story type",
            url: "download url"
        },
        {
            media_type: "story type",
            url: "download url"
        },
        {
            ... (media_type = "photo / video")
        }
    ]
}
```

#### PROFILE ANALYZER 
```graphq
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