var axios = require("axios");
async function uncacheToken(name) {
    var uncache = await axios.get("https://metrics.lecoq.io/.uncache?user=" + name)
    var token = await await axios.get("https://metrics.lecoq.io/.uncache?&token="+ uncache.data.token)
}
module.exports = uncacheToken;