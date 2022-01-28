var axios = require("axios");
async function getUserMetaFromQuery(name) {
    var data = await axios.get("https://www.npmjs.com/~" + name)
    var payload = new Object();
    payload.username = data.data.split('class="b219ea1a black tracked-tight fw6 mv1">')[1].split('<')[0]
    payload.name = data.data.split('<div class="black-50 mv2">')[1].split("<")[0]
    var github_url;
    try {
        github_url = data.data.split(
            '<span class="_34da67ba a11667ce mr2 flex-none"></span>'
        )[1].split('href="')[1].split('"')[0]
    } catch {
        github_url = "unknown"
    }
    payload.github_link = github_url
    var twitter_url;
    try {
        twitter_url = data.data.split(
            '<span class="_139c488a a11667ce mr2 flex-none"></span>'
        )[1].split('href="')[1].split('"')[0]
    } catch {
        twitter_url = "unknown"
    }
    payload.twitter_link = twitter_url
    payload.profile_pic = "https://www.npmjs.com" + data.data.split('<div class="_73a8e6f0 w-100 w-auto-l pv4 pv0-l"')[1].split('<img src="')[1].split('"')[0]
    payload.packages = data.data.split('<span class="c3fc8940">')[1].split('<')[0]
    payload.organizations = data.data.split('<span class="c3fc8940">')[2].split('<')[0]
    return payload;
}
 module.exports = getUserMetaFromQuery;