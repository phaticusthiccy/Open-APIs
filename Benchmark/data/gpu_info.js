var axios = require("axios")
async function gpu_info(gpu) {
    var data;
    var time = new Date().getTime().toString()
    var payload = await axios({
        url: "https://www.techpowerup.com/gpu-specs/?ajaxsrch=" + gpu + "&_=" + time,
        method: "get",
        headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            "x-requested-with": "XMLHttpRequest"
        }
    })
    if (payload.data == "Nothing found.\n") {
        throw new Error ("Cannot Found Any GPU")
    } else {
        data = "https://www.techpowerup.com" + payload.data.split('<a href="')[1].split('"')[0]
    }
    return data;
}
module.exports = gpu_info;