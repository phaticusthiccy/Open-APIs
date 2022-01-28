var axios = require("axios");
async function getPackageMetaFromQuery(query) {
    var data = await axios.get("https://www.npmjs.com/search/suggestions?q=" + encodeURI(query))
    return data.data;
}
module.exports = getPackageMetaFromQuery;