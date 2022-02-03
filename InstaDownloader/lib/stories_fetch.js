var axios = require("axios");
async function stories_fetch(username) {
    var fetch_api = await axios({
        url: "https://storiesig.me/api/profile/" + username,
        method: "get",
        headers: {
            cookie: "_ga=GA1.2.1114031624.1643814472; _gid=GA1.2.410662117.1643814472; session_id=0170cd16-bb67-44ec-a951-a3fe4c26ce2e; _gat=1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    })
    return fetch_api.data
}
module.exports = stories_fetch;