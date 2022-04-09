var axios = require("axios");
var getMetaFromNameUsername = require("./search_from_name");

async function getUserMeta(username) {
    var urlGet = await getMetaFromNameUsername(username)
    var data = await axios({
        url: urlGet,
        method: "get",
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            referer: "https://gramhir.com/search/" + username
        }
    })
    var newObj = new Object();
    newObj.profile_pic = data.data.split('<div class="profile-avatar">')[1].split(
        'src="'
    )[1].split('"')[0]
    newObj.bio = data.data.split(
        '<div class="profile-description">'
    )[1].split('</div>')[0].replace("\r\n", "").replace('            ', "").replace('        ', "")
    newObj.post_count = data.data.split('<span class="black-box">')[1].split('Posts')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
    newObj.followers = data.data.split('<span data-followers="')[1].split('"')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
    newObj.following = data.data.split('<span class="bold"><span>')[1].split('<')[0].toString().replace(/,/gi, "").replace(/ /gi, "")
    newObj.id = Number(
        urlGet.split("profile")[1].split(
            '/'
        )[2]
    ).toString()
    var if_rate = false
    try {
        var afdata = data.data.split('Account rate')
        if_rate = true
    } catch {
        if_rate = false
    }
    if (if_rate) {
        try {
            newObj.popularity = data.data.split(
                '<canvas id="chartjs_circle"'
            )[1].split(
                '<span>'
            )[1].split(
                '<'
            )[0]
        } catch {
            newObj.popularity = "0%"
        }
        try {
            newObj.avarage_likes = data.data.split(
                '<div class="profile-statistics__block-stat">'
            )[1].split(
                '</div>'
            )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace("k", "000").replace("m", "000000")
        } catch {
            newObj.avarage_likes = "0"
        }
        try {
            newObj.avarage_comments = data.data.split(
                '<div class="profile-statistics__block-stat">'
            )[2].split(
                '</div>'
            )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace("k", "000").replace("m", "000000")
        } catch {
            newObj.avarage_comments = "0"
        }
        try {
            newObj.avarage_post_time = data.data.split(
                '<div class="profile-statistics__block-stat">'
            )[3].split(
                '</div>'
            )[0].replace(/ /gi, "").replace(/\r\n/gi, "").replace(/ /g, "").replace("day", " day")
        } catch {
            newObj.avarage_post_time = "0 day"
        }
        try {
            newObj.video_percentage = data.data.split(
                '<div class="chart_labels__videos">'
            )[1].split('</span>')[1].split(" ")[0]
            newObj.photo_percentage = data.data.split(
                '<div class="chart_labels__photos">'
            )[1].split('</span>')[1].split(" ")[0]
        } catch {
            newObj.video_percentage = "0%"
            newObj.photo_percentage = "0%"
        }
    }
    return newObj
}
module.exports = getUserMeta;
