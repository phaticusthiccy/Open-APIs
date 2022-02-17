# Tiktok Unlimited Downloader 

An unlimited tiktok downloader with 2 servers.

## 🧾 Usage
```js
// ES 5

const download = require("@phaticusthiccy/open-apis");

async function start() {
    var data = await download.tiktok("tiktok url")
    console.log(data)
}

// Outside of Async Function
download.tiktok("tiktok url").then(async (data) => {
    console.log(data)
})
```

## Response

If One Server Down, You Can Use Another One.

```javascript
{
    status: true | false,
    server1: {
        video: "video download url",
        music: "music download url"
    },
    server2: {
        id: 'task id',
        video_id: 'video id',
        title: 'video title',
        caption: 'video caption',
        cover: 'video thumbnail url',
        url: 'video download url',
        user: {
            name: 'user name',
            username: 'user nickname',
            cover: 'user profile picture'
        },
        music: {
            id: 'music id',
            title: 'music name',
            author: 'music owner',
            url: 'music download url',
            cover: 'music album cover'
        },
        updated_at: 'last update date',
        video_url: 'video url',
        stats: {
            likes: 'like count',
            comments: 'comment count',
            views: 'view count',
            shares: 'share count',
            popularity: 'popularity percentage'
        },
        created_at: 'creation date'
    }
}
```