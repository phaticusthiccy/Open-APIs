var export_reelsData = require("../lib/reels");
const insta_story = require("./instagram_story");

async function insta_reel(url) {
    var data;
    try {
        data = await export_reelsData(url);
    } catch {
        throw new Error("There is a problemm with the given link!")
    }
    var payload = new Object();
    payload.expires = "Unlimited"
    payload.url = data
    return payload;
};
module.exports = insta_reel;