var axios = require("axios")
async function banner(url) {
    var img = {
        banner: "",
        avatar: ""
    };
    var data;
    var pay = await axios({
        url: url,
        method: "get",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        }
    })
    data = pay.data
    try {
        img.banner = data.split("<div class='headline_bg mblur'>")[1].split("<img src='")[1].split("'")[0]
    } catch {
        img.banner = undefined
    }
    try {
        img.avatar = data.split("<div class='game_head_cover'>")[1].split("<img src='")[1].split("'")[0]
    } catch {
        img.avatar = undefined
    }
    return img;
}
module.exports = banner;