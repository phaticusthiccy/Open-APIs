var getInstaCode_fromUserPKID = require("./stories");
var axios = require("axios");

async function getMetafromStories(username) {
    var data;
    try {
        data = await getInstaCode_fromUserPKID(username)
    } catch {
        throw new Error("User Not Found!")
    }
    var schema = new Object();
    var pkid = data.props.pageProps.user.info.pk
    var pfp = data.props.pageProps.user.info.profile_pic_url_hd
    schema.pkid = pkid
    schema.username = data.props.pageProps.user.info.username
    schema.full_name = data.props.pageProps.user.info.full_name
    schema.profile_pic = pfp
    return schema;
}
module.exports = getMetafromStories;