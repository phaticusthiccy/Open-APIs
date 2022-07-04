var lib_reels = require("../lib/reels");
const insta_story = require("./instagram_story");

async function insta_reel(url) {
    var data;
    try {
        data = await lib_reels(url);
    } catch {
        throw new Error("There is a problemm with the given link!")
    }
    var payload = new Object();
    payload.expires = "Unlimited"
    payload.data = {}
    payload.data.url = data.media.data.mediaList[0].videos[0].url
    payload.data.user = {
        id: data.media.data.user.id,
        name: data.media.data.user.name,
        username: data.media.data.user.username,
        pic: data.media.data.user.profile.pic.normal,
        follower: data.media.data.user.metrics.followers
    }
    payload.data.likes = data.media.data.metrics.likes
    payload.data.views =  data.media.data.metrics.views
    payload.data.comments =  data.media.data.metrics.comments
    return payload;
};
module.exports = insta_reel;