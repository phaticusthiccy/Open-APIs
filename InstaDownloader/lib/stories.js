var axios = require("axios");
async function getInstaCode_fromUserPKID(username) {
    var data;
    data = await axios.get("https://storiesdown.com/users/" + username)
    var payload = JSON.parse(data.data.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0])
    return payload;
};
module.exports = getInstaCode_fromUserPKID;