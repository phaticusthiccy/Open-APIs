var axios = require("axios");
async function recent_art(limit, model) {
    if (!limit) {
        limit = 24
    }
    if (typeof limit == "string") limit = Number(limit)
    if (!model) {
        model = "all"
    }
    if (limit < 1) {
        // throw new Error("Search limit must be between 1-24")
        limit = 1
    } 
    if (limit > 24) {
        // throw new Error("Search limit must be between 1-24")
        limit = 24
    }
    if (model == "all") model = "all"
    else if (model == "general") model = "general"
    else if (model == "portrait") model = ["portraits_sg2"]
    else if (model == "landscape") model = ["landscapes_sg2_concept"]
    else if (model == "building") model = ["buildings"]
    else if (model == "painting") model = ["paintings"]
    else if (model == "sci") model = ["sci_bio_art"]
    else if (model == "character") model = ["characters"]
    else if (model == "album") model = ["albums"]
    else if (model == "furry") model = ["furries"]
    else if (model == "anime") model = ["anime_portraits"]
    else model = "all"
    var data = await axios({
        url: "https://www.artbreeder.com/images",
        method: "post",
        data: {
            tags:[],
            tag_search_type:"substring",
            models:model,
            offset:0,
            starred_by: "any",
            limit:limit
        },
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
        }
    })
    var payload = []
    data.data.map((Element) => {
        payload.push({author: Element.creator_name, likes: Element.likes == null ? 0 : Element.likes, creation_date: Element.time_string, url: "https://artbreeder.b-cdn.net/imgs/" + Element.key + ".jpeg"})
    })
    return payload;
    /**
     * [
         {
            author: 'valentinaegami',
            likes: 1,
            creation_date: '3 minutes ago',
            url: 'https://artbreeder.b-cdn.net/imgs/fe3606919ead97a59812c82682fe.jpeg'
         },
         {
            author: 'autonnaton',
            likes: 1,
            creation_date: '4 minutes ago',
            url: 'https://artbreeder.b-cdn.net/imgs/f10775dc9e73855cc5458c8fa12a.jpeg'
         }
     * ]
     */
}
module.exports = recent_art;