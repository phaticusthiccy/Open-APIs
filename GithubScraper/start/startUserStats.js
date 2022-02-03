var editBasicMetaGithub = require("../data/editBasicMeta");
async function github_user(username) {
    var payload;
    try {
        payload = await editBasicMetaGithub(username)
    } catch {
        throw new Error("Cannot Found Any User")
    }
    return payload;
}
module.exports = github_user;