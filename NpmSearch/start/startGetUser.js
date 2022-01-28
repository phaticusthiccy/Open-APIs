var getUserMetaFromQuery = require("../data/getUserMetaFromQuery");
async function npm_user(query) {
    var payload;
    try {
        payload = await getUserMetaFromQuery(query)
    } catch {
        throw new Error("Cannot Find Any NPM User!")
    }
    return payload
}
module.exports = npm_user;