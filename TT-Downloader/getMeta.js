const axios = require("axios");
async function tpost(schema) {
    var data = new Object();
    data.status = true;
    if (!schema.url) {
        data.status = false
        data.error = "Please, Provide a Tiktok Link!"
    }
    var ifMobile = false
    try {
        var sch1 = schema.url.split("vm.")
        ifMobile = true
    } catch {
        try {
            sch2 = schema.url.split("@")
            ifMobile = false
        } catch {
            ifMobile = undefined
        }
    }
    if (ifMobile == undefined) {
        data.status = false
        data.error = "Input URL is not Valid!"
    }
    if (data.status) {
        var data2 = await axios.post("https://tikdown.org/getAjax", {
            url: schema.url,
            _token: schema.token
        })
        data.server1 = {}
        data.server1.video = data2.data.html.split('<a class="button-primary w-button download-button"   href="')[1].split('"')[0]
        try {
          data.server1.music = data2.data.html.split('<a class="button-primary w-button download-button"  href="')[1].split('"')[0]
        } catch {
          data.server1.music = undefined
        }
        var new_token = await axios({
          url: "https://tiktokdownloader.one/",
          method: "get",
          headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
          }
        })
        new_token = new_token.data.split('token_" content="')[1].split('"')[0]
        var tt_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
        var af_url = ""
        if (schema.url.includes('?') ) {
          af_url = schema.url.split('?')[0]
        } else {
          af_url = schema.url
        }
        var data4;
        data.server2 = {}
        try {
          data4 = await axios.request({
            method: "get",
            url: "https://tiktokdownloader.one/api/v1/fetch?url=" + af_url,
            headers: {
              token: new_token,
              "user-agent": tt_agent
            }
          })
          data.server2 = data4.data
          data4.data.id = data4.data.id.toString()
          data4.data.stats.comments = data4.data.stats.comments.toString()
          data4.data.stats.likes = data4.data.stats.likes.toString()
          data4.data.stats.play = data4.data.stats.play.toString()
          data4.data.stats.shares = data4.data.stats.shares.toString()
          var after_edit = [];
          after_edit.push(data4.data.stats.likes)
          after_edit.push(data4.data.stats.comments)
          after_edit.push(data4.data.stats.play)
          after_edit.push(data4.data.stats.shares)
          delete data.server2.stats
          data.server2.stats = {}
          data.server2.stats.likes = after_edit[0]
          data.server2.stats.comments = after_edit[1]
          data.server2.stats.views = after_edit[2]
          data.server2.stats.shares = after_edit[3]
          var populerity = (after_edit[0] / after_edit[2]) * ((after_edit[3] / after_edit[1])*10)*10 * 10
          if (populerity > 100) populerity = 100;
          data.server2.stats.popularity = "%" + Math.floor(populerity).toString()
          if (data.server2.stats.popularity == "%NaN") {
            data.server2.stats.popularity = "%0"
          }
          delete data.server2.share_url
          delete data.server2.created_at
          data.server2.created_at = data.server2.uploaded_at
          delete data.server2.uploaded_at
          delete data.server2.dl_count
          delete data.server2.url_num
          delete data.server2.url_nwm
        } catch {
          data.server2 = undefined
        }
    }
    return data;
}

async function tiktok(url) {
  var data = new Object()
  data.url = url
  data.token = "8Oz7BbSvJdKJpK7If78L0eD1fS6JdxtANu8LAuTh"
  var payload = await tpost(data)
  return payload;
};
module.exports = tiktok;
