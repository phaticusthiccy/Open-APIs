var getUserMeta = require("../lib/getUserMeta");
var axios = require("axios");

async function insta_profile(username) {
    var payload;
    try {
        payload = await getUserMeta(username)
    } catch {
        throw new Error ("Profile is Private!")
    }
    return payload;
}

module.exports = insta_profile;