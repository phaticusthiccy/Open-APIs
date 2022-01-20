var export_data = require("../lib/export");

async function insta_post(url) {
    var data;
    try {
        data = await export_data(url);
    } catch {
        throw new Error("There is a problemm with the given link!")
    }
    var payload = new Object();
    var if_one_post = false
    try {
        var test = data.url[0].url
        if_one_post = true
    } catch {
        if_one_post = false
    }
    if (!if_one_post) {
        if (data.length == 1) {
            payload.post1 = {}
            payload.title = data.meta.title
            payload.expires = "15 Minute"
            payload.post1.url = data.url[0].url
            payload.post1.type = data.url[0].type
        } else if (data.length == 2) {
            payload.post1 = {}
            payload.post2 = {}
            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

        } else if (data.length == 3) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type
            delete payload.post3
        } else if (data.length == 4) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type
            delete payload.post4
        } else if (data.length == 5) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type
            delete payload.post5
        } else if (data.length == 6) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type
            delete payload.post6
        } else if (data.length == 7) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}
            payload.post7 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type

            payload.post7.url = data[6].url[0].url
            payload.post7.type = data[6].url[0].type
            delete payload.post7
        } else if (data.length == 8) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}
            payload.post7 = {}
            payload.post8 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type

            payload.post7.url = data[6].url[0].url
            payload.post7.type = data[6].url[0].type

            payload.post8.url = data[7].url[0].url
            payload.post8.type = data[7].url[0].type
            delete payload.post8
        } else if (data.length == 9) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}
            payload.post7 = {}
            payload.post8 = {}
            payload.post9 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type

            payload.post7.url = data[6].url[0].url
            payload.post7.type = data[6].url[0].type

            payload.post8.url = data[7].url[0].url
            payload.post8.type = data[7].url[0].type

            payload.post9.url = data[8].url[0].url
            payload.post9.type = data[8].url[0].type
            delete payload.post9
        } else if (data.length == 10) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}
            payload.post7 = {}
            payload.post8 = {}
            payload.post9 = {}
            payload.post10 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type

            payload.post7.url = data[6].url[0].url
            payload.post7.type = data[6].url[0].type

            payload.post8.url = data[7].url[0].url
            payload.post8.type = data[7].url[0].type

            payload.post9.url = data[8].url[0].url
            payload.post9.type = data[8].url[0].type

            payload.post10.url = data[9].url[0].url
            payload.post10.type = data[9].url[0].type
            delete payload.post10
        } else if (data.length == 11) {
            payload.post1 = {}
            payload.post2 = {}
            payload.post3 = {}
            payload.post4 = {}
            payload.post5 = {}
            payload.post6 = {}
            payload.post7 = {}
            payload.post8 = {}
            payload.post9 = {}
            payload.post10 = {}
            payload.post11 = {}

            payload.title = data[0].meta.title
            payload.expires = "15 Minute"

            payload.post1.url = data[0].url[0].url
            payload.post1.type = data[0].url[0].type

            payload.post2.url = data[1].url[0].url
            payload.post2.type = data[1].url[0].type

            payload.post3.url = data[2].url[0].url
            payload.post3.type = data[2].url[0].type

            payload.post4.url = data[3].url[0].url
            payload.post4.type = data[3].url[0].type

            payload.post5.url = data[4].url[0].url
            payload.post5.type = data[4].url[0].type

            payload.post6.url = data[5].url[0].url
            payload.post6.type = data[5].url[0].type

            payload.post7.url = data[6].url[0].url
            payload.post7.type = data[6].url[0].type

            payload.post8.url = data[7].url[0].url
            payload.post8.type = data[7].url[0].type

            payload.post9.url = data[8].url[0].url
            payload.post9.type = data[8].url[0].type

            payload.post10.url = data[9].url[0].url
            payload.post10.type = data[9].url[0].type

            payload.post11.url = data[10].url[0].url
            payload.post11.type = data[10].url[0].type
            delete payload.post11
        }
    } else {
        payload.post1 = {}
        payload.title = data.meta.title
        payload.expires = "15 Minute"
        payload.post1.url = data.url[0].url
        payload.post1.type = data.url[0].type
    }
    
    return payload;
}
module.exports = insta_post;
