var axios = require("axios")
async function review_bench(url) {
    url = url + "/reviews"
    var data = await axios({
        url: url,
        method: "get",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        }
    })
    var reviews = {
        Graphics: "",
        Design: "",
        Gameplay: "",
        Sound: "",
        Music: "",
        Innovations: "",
        Overall: "",
        Reviews: ""
    }
    var gap = data.data.split("<div class='main-panel'>")[1]
    reviews.Graphics = gap.split("<div class='g_rating_sum_rnum'>")[1].split("</div>")[0]
    reviews.Sound = gap.split("<div class='g_rating_sum_rnum'>")[2].split("</div>")[0]
    reviews.Design = gap.split("<div class='g_rating_sum_rnum'>")[3].split("</div>")[0]
    reviews.Music = gap.split("<div class='g_rating_sum_rnum'>")[4].split("</div>")[0]
    reviews.Gameplay = gap.split("<div class='g_rating_sum_rnum'>")[5].split("</div>")[0]
    reviews.Innovations = gap.split("<div class='g_rating_sum_rnum'>")[6].split("</div>")[0]
    reviews.Overall = gap.split("<div class='g_rating_sum_rnum'>")[7].split("</div>")[0]
    reviews.Reviews = data.data.split("<div class='game_head_mr'>")[1].split("Reviews")[1].split("<span>")[1].split("</span>")[0]
    return reviews;
}
module.exports = review_bench;