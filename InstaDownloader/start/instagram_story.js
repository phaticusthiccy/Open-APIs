var getMetafromStories = require("../lib/stories_meta");
const formatInstaStoryData = require("../lib/stories_format");
var stories_fetch = require("../lib/stories_fetch");
var axios = require("axios");

var if_cont = false

async function insta_story_legacy(username) {
    var data;
    try {
        data = await getMetafromStories(username)
    } catch {
        throw new Error("User Not Found!")
    }
    var getData = await formatInstaStoryData(data.pkid, data.username)
    var payload;
    var if_null = false
    if (getData.data.stories.length == 0) {
        var tryagain = await axios({
            url: "https://instasaved.net/en/save-stories/" + username,
            method: "get",
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
                cookie: "_ga=GA1.2.1879351071.1642593054; _gid=GA1.2.477553109.1642593054; _ym_uid=16425930541060425832; _ym_d=1642593054; _ym_isad=1; __cf_bm=VBPJoM2n7MMJOGyLSQExQ0O6ZpmEYMoJ.n7nm2OzIcM-1642593063-0-AWl3OvNzWZCgdX19MjgpmeN7xiT26p45yZDt0JjpUgxLkA8QLofzM6vgsob8q0htQtzUGsDI+pdpS/aLcTmvuRq5Uj47/IkZgdaQ+VoEOfEW7Qg2lufLQKoZCSphWoyzFQ==; XSRF-TOKEN=eyJpdiI6IkxjYXhlcFA3S1ovU2h1cWdPdldyT1E9PSIsInZhbHVlIjoiTGh3cGFvTHBGai9SR05nUlpDOXlvblA3QS8zZGtlVGw1ekRhT05SYW8rRVNlWUVMM05lYkZDME8rem5sZUpKYk1xK25wV2JGSnBJU0toU00raDhPMFBGQlNXYm9PbkxRWmxQQURvZk01WG1rTGlGS0V0VkNBR0ZHR1RKc2pZbWsiLCJtYWMiOiJlODE0ZTkzNDcxZTAyYmZkYTExYTFlZjRlYThiODdjMmQ4OWZjOGQ3MmJmMTFkNWJhOWNmZWI3Yzg3NjU5MDE2In0%3D; instasaved_session=eyJpdiI6IlYwaFRhbG9va2xOcm85cnk0bkhRaFE9PSIsInZhbHVlIjoiTUVpRFRsTFdsQXJZRVgxMXlIaGRQU2R2ZVhEcG9QVmVLWEFXU3ZjRWtKLzJOL3lxdWpuWDd2U1pqOS9odkRDc25LelRkUnBzUXRBZDBUQmJ3UGxIQkNEdm5mcGlnelJQVE9xY2w3TzdIallGOFJCU2h6NEx4aTNaUFVaWkZFbisiLCJtYWMiOiI5ZWQyMTk1YmMxODRmMmJlYTI3NTU3ZGM1Njc5NmM5MDhhZDFlNWMwMmJkNmE3OWZhYTQ1OTM4Nzg5ZGMzMTQ5In0%3D"
            }
        })
        var token;
        var xscrf;
        try {
            token = tryagain.data.split('id="token" value="')[1].split('"')[0]
            xscrf = tryagain.data.split('<body data-wsid="')[1].split('"')[0]
            if_cont = true
        } catch {
            if_cont = false
        }

        if (!if_cont) {
            payload = "User's Account Private or There is any Stories, Else All User May Not Recognize Permission to Share Stories!"
            if_null = true
        } else {
            var getAgainStory = await axios({
                url: "https://instasaved.net/ajax-instasaver",
                method: "post",
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                    "x-ws-token": xscrf,
                    cookie: "_ga=GA1.2.1879351071.1642593054; _gid=GA1.2.477553109.1642593054; _ym_uid=16425930541060425832; _ym_d=1642593054; _ym_isad=1; __cf_bm=VBPJoM2n7MMJOGyLSQExQ0O6ZpmEYMoJ.n7nm2OzIcM-1642593063-0-AWl3OvNzWZCgdX19MjgpmeN7xiT26p45yZDt0JjpUgxLkA8QLofzM6vgsob8q0htQtzUGsDI+pdpS/aLcTmvuRq5Uj47/IkZgdaQ+VoEOfEW7Qg2lufLQKoZCSphWoyzFQ==; XSRF-TOKEN=eyJpdiI6IkxjYXhlcFA3S1ovU2h1cWdPdldyT1E9PSIsInZhbHVlIjoiTGh3cGFvTHBGai9SR05nUlpDOXlvblA3QS8zZGtlVGw1ekRhT05SYW8rRVNlWUVMM05lYkZDME8rem5sZUpKYk1xK25wV2JGSnBJU0toU00raDhPMFBGQlNXYm9PbkxRWmxQQURvZk01WG1rTGlGS0V0VkNBR0ZHR1RKc2pZbWsiLCJtYWMiOiJlODE0ZTkzNDcxZTAyYmZkYTExYTFlZjRlYThiODdjMmQ4OWZjOGQ3MmJmMTFkNWJhOWNmZWI3Yzg3NjU5MDE2In0%3D; instasaved_session=eyJpdiI6IlYwaFRhbG9va2xOcm85cnk0bkhRaFE9PSIsInZhbHVlIjoiTUVpRFRsTFdsQXJZRVgxMXlIaGRQU2R2ZVhEcG9QVmVLWEFXU3ZjRWtKLzJOL3lxdWpuWDd2U1pqOS9odkRDc25LelRkUnBzUXRBZDBUQmJ3UGxIQkNEdm5mcGlnelJQVE9xY2w3TzdIallGOFJCU2h6NEx4aTNaUFVaWkZFbisiLCJtYWMiOiI5ZWQyMTk1YmMxODRmMmJlYTI3NTU3ZGM1Njc5NmM5MDhhZDFlNWMwMmJkNmE3OWZhYTQ1OTM4Nzg5ZGMzMTQ5In0%3D",
                    "x-xsrf-token": "eyJpdiI6ImpBYnJCTDUwR202UENDTG1JeVNsUkE9PSIsInZhbHVlIjoiNWxQMFJyelZrdWF4R1p6amdEOUVoQnF6THVNalFTR0ZmM1ZmQjlSRUpVRHU4bHhGVDcxbFZqdUxKandCRzZMc0VBR2JpVVZLZjZiK2JNeDR3cGxWVzhlUlE2ekc1Q0dMWStXY3d1c0l6bWh5aTVOWFBMeFpjY25mLzdGUVN3emciLCJtYWMiOiIyZTAxMjEwOWU0NjRhODg4M2I5YmU3NDRkMzA4Zjg5NDkyNWJlNjE2MDBmMjY3YzA4NzhlN2NlMjM1YWU3NjUxIn0="
                },
                data: {
                    cursor: 1,
                    igtv_ids: [],
                    token: token,
                    type: "story",
                    username: "https://instagram.com/" + username
                }
            })
            var render_all_with_same_output = getAgainStory.data
            delete render_all_with_same_output.user
            delete render_all_with_same_output.type
            /*
            @param {Object} render_all_with_same_output
            {
                medias: [
                    {
                        type?: string,
                        fileType?: string,
                        url?: string,
                        downloadUrl: string
                    },
                    {
                        type?: string,
                        fileType?: string,
                        url?: string,
                        downloadUrl: string
                    }
                ]
            }
            */
           render_all_with_same_output.medias.map(newElement => {
               delete newElement.fileType
               newElement['media_type'] = newElement.type
               delete newElement.type
               if (newElement.media_type == "image") {
                   newElement.media_type = "photo"
               }
               if (newElement.decode !== undefined) {
                   delete newElement.decode
               }
               if (newElement.preview !== undefined) {
                   delete newElement.preview
               }
               delete newElement.downloadUrl
            })
            
            payload = render_all_with_same_output;
            var testwithreplace = JSON.stringify(payload).replace("medias", "stories")
            var finalres = JSON.parse(testwithreplace)
            payload = finalres
        }
    } else {
        payload = getData.data
        if_null = false
    }
    delete getData.data.status
    /*
    @param {Object} payload
    {
        stories: [
            {
                media_type?: number,
                cover_url?: string,
                video_url?: string
            },
            {
                media_type?: number,
                cover_url?: string,
                video_url?: string
            }
        ]
    }
    */
    if (if_cont) {
        payload = payload
    } else {
        if (!if_null) {
            payload.stories.map(element => {
                if (element.media_type == 1) {
                    element.media_type = "photo"
                }
                if (element.media_type == 2) {
                    element.media_type = "video"
                }
                if (element.image_url !== undefined) {
                    element['url'] = element.image_url
                    delete element.image_url
                }
                if (element.video_url !== undefined) {
                    element["url"] = element.video_url
                    delete element.cover_url
                    delete element.video_url
                }
            });
        }
    }

    return payload;
};
async function insta_story(username_query) {
    var payload = {
        id: 0,
        username: username_query,
        name: "",
        bio: "",
        website: "",
        avatar: "https://storiesig.me",
        followers: 0,
        following: 0,
        post_count: 0,
        story_count: 0,
        stories: []
    }
    var ex_Data;
    if (typeof username_query !== "string") {
        throw new Error ("Username Must Be String, Not a " + typeof username_query + "!")
    }
    if (username_query.split("").length > 30) {
        throw new Error ("Input Must Be A Username! Not a Profile Link or Something Else!")
    }
    try {
        ex_Data = await stories_fetch(username_query)
        await axios({
            url: "https://storiesig.me/tr/" + username_query,
            method: "get",
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
            }
        })
    } catch {
         throw new Error ("Cannot Found Any User!")
    }
    if (ex_Data.profileInfo.isPrivate == true) {
        throw new Error ("Account is Private!")
    }
    payload.id = ex_Data.profileInfo.id
    try {
        ex_Data.stories.map(element => {})
    } catch {
        throw new Error ("There is No Story From " + username_query)
    }
    ex_Data.stories.map(element => {
        if (typeof element.originalUrl == "string") {
            delete element.originalUrl
        }
        element.url = "https://storiesig.me" + element.url
        payload.stories.push(element)
    })
    payload.followers = ex_Data.profileInfo.subscriber
    payload.following = ex_Data.profileInfo.subscription
    payload.post_count = ex_Data.profileInfo.publication
    payload.name = ex_Data.profileInfo.name
    payload.bio = ex_Data.profileInfo.bio
    payload.website = ex_Data.profileInfo.website
    payload.avatar = payload.avatar + ex_Data.profileInfo.avatar
    payload.story_count = payload.stories.length
    return payload;
}
module.exports = insta_story;