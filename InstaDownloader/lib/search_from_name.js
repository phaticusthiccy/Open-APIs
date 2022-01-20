var axios = require("axios");

async function getMetaFromNameUsername(name) {
    var data = await axios({
        url: "https://gramhir.com/search/" + name,
        method: "get"
    })
    var getMeta = data.data.split('<div class="profile-result"')[1].split('<a href="')[1].split('"')[0]
    return getMeta;
}

module.exports = getMetaFromNameUsername;
