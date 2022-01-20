var getMetafromStories = require("./stories_meta");
var axios = require("axios");

async function formatInstaStoryData(pk, username) {
    var data = new Object();
    var pay = await axios.get(
        "https://storiesdown.com/api/stories/" + pk + "?_username=" + username
    )
    return pay;
}

module.exports = formatInstaStoryData;