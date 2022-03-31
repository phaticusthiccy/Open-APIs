var getMetafromStories = require("../lib/stories_meta");
const formatInstaStoryData = require("../lib/stories_format");
var stories_fetch = require("../lib/stories_fetch");
var axios = require("axios");
var fs = require("fs")
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
async function insta_story_dec(username_query) {
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
async function insta_story(username_query) {
    var data = await axios.get("https://open-apis-rest.up.railway.app/api/instastory?username=" + username_query) 
    // https://open-apis-rest.up.railway.app/api (Open-APIs's Rest Request Server)
    return data.data;
}
async function insta_story_rt(username_query) {
    var data = await axios({
        url: "https://storiesdown.com/users/" + username_query,
        method: "get",
        headers: {
            cookie: "_ga=GA1.2.357659426.1646522958; _gid=GA1.2.1417500451.1646522958; _gat=1; __cf_bm=dOQZFuTF6xLMr8yCCaI9A8WSLUVXqLGfJHsAH5ABV4o-1646522959-0-AYNnAJmcuNnA42ItpC3KGpct/uN7OUEvrUi6FPSwe5dvxzMI460U+TClRBf9EvurrV8MCOMHWSwZN7Kh8sZJ9ErLNbKzGP2zgsYDWd/UV0AledPNwCe0L3hNYUwTmaN0Aw==; _gat_UA-169731965-1=1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
    })
    var json = JSON.parse(data.data.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.user.info
    var pk = json.pk
    var request = require('request');

            var download = function(uri, filename, callback){
                request.head(uri, function(err, res, body){
                    console.log('content-type:', res.headers['content-type']);
                    console.log('content-length:', res.headers['content-length']);

                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
    var media = await axios.get("https://storiesdown.com/api/stories/" + pk + "?_username=" + username_query, { headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"}})
    media.data.stories.map((element) => {
        if (element.media_type == 2) {
            delete element.media_type
            element["type"] = "video"
            delete element.cover_url
            element["url"] = element.video_url
            delete element.video_url
            var n = 1
            download(element.url, "video" + n.toString(), async () => {
                n = n + 1
            })
        } else {
            delete element.media_type
            element["type"] = "photo"
            element["url"] = element.image_url
            delete element.image_url
        }
        
    })

    return {
        id: json.id,
        username: json.username,
        name: json.full_name,
        avatar: json.profile_pic_url_hd,
        story_count: media.data.stories.length,
        stories: media.data.stories
    }
    if (data.data.lastStories.length == 0) {
        throw new Error ("Cannot Found Any Story!")
    }
    var id = data.data.accountInfo.id
    var username = data.data.accountInfo.username
    var full_name = data.data.accountInfo.fullName
    var avatar = data.data.accountInfo.profilePicUrl
    var bio = data.data.accountInfo.biography
    var followers = data.data.accountInfo.followedByCount
    var following = data.data.accountInfo.followsCount
    var post_count = data.data.accountInfo.mediaCount
    data.data.lastStories.map((element) => {
        delete element.id
        delete element.createdTime
        if (element.type == "video") {
            element["url"] = element.videoUrl
        } else {
            element["url"] = element.thumbnailUrl
            element.type = "photo"
        }
        delete element.thumbnailUrl
        delete element.videoUrl
        
    })
    delete data.data.posts
    delete data.data.found
    delete data.data.isPrivate
    
    return {
        id: id,
        username: username,
        name: full_name,
        bio: bio,
        avatar: avatar,
        followers: followers,
        following: following,
        post_count: post_count,
        story_count: data.data.lastStories.length,
        stories: data.data.lastStories
    }
}
async function insta_story_ack2(username_query) {
    var data = await axios({
        url: "https://igs.sf-converter.com/api/profile/" + username_query,
        method: "get",
        headers: {
            "if-none-match": 'W/"332-Ix7MIrnmnZ6fptsIUDhYl9/aYY4"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
    })
    var id = data.data.result.id
    var username = username_query 
    var avatar = data.data.result.profile_pic_url
    var bio = data.data.result.biography
    var name = data.data.result.full_name
    var post_count = data.data.result.edge_owner_to_timeline_media.count
    var followers = data.data.result.edge_followed_by.count
    var following = data.data.result.edge_follow.count
    var data = await axios({
        url: "https://igs.sf-converter.com/api/stories/" + id,
        method: "get",
        headers: {
            "if-none-match": 'W/"5663-2zMUbZI8FsFnbLNQ/QtPGYlofEs"',
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
    })
    var story = sto.data
    story.result.map((element) => {
        delete element.taken_at
        delete element.pk
        delete element.original_width
        delete element.original_height
        delete element.has_audio
        if (element.video_versions) {
            element["url"] = element.video_versions[0].url
            element["type"] = "video"
        } else {
            element["url"] = element.image_versions2.candidates[0].url
            element["type"] = "photo"
        }
        delete element.video_versions
        delete element.image_versions2
    })
    
    return {
        id: id,
        username: username,
        bio: bio,
        avatar: avatar,
        followers: followers,
        following: following,
        post_count: post_count,
        stories: story
    }
}
async function insta_story_ack(username_query) {
    var data = await axios({
        url: "https://instagramdownloads.com/api/info",
        method: "post",
        data: {
            nickname: username_query
        }
    })
    var user = data.data
    var id = user.id
    var username = username_query
    var name = user.full_name
    var followers = user.edge_followed_by.count
    var following = user.edge_follow.count
    var is_verified = user.is_verified
    var avatar = user.profile_pic_url_hd
    var post_count = user.edge_owner_to_timeline_media.count
    var story = await axios({
        url: "https://instagramdownloads.com/api/story",
        method: "post",
        data: {
            pk: id
        }
    })
    story.data.story.map((element) => {
        if (element.video_versions) {
            element["type"] = "video"
        } else {
            element["type"] = "photo"
        }
        delete element.taken_at
        delete element.pk
        delete element.id
        delete element.device_timestamp
        delete element.code
        delete element.media_type
        delete element.client_cache_key
        delete element.filter_type
        delete element.is_unified_video
        delete element.user
        delete element.caption_is_edited
        delete element.like_and_view_counts_disabled
        delete element.commerciality_status
        delete element.is_paid_partnership
        delete element.is_visual_reply_commenter_notice_enabled
        delete element.original_width
        delete element.original_height
        delete element.caption_position
        delete element.is_reel_media
        delete element.photo_of_you
        delete element.can_see_insights_as_brand
        delete element.caption
        delete element.can_viewer_save
        delete element.organic_tracking_token
        delete element.expiring_at
        delete element.imported_taken_at
        delete element.sharing_friction_info
        delete element.comment_inform_treatment
        delete element.product_type
        delete element.profile_grid_control_enabled
        delete element.is_in_profile_grid
        delete element.deleted_reason
        delete element.integrity_review_decision
        delete element.music_metadata
        delete element.can_reshare
        delete element.can_reply
        delete element.story_static_models
        delete element.supports_reel_reactions
        delete element.can_send_custom_emojis
        delete element.show_one_tap_fb_share_tooltip
        delete element.video_dash_manifest
        delete element.video_codec
        delete element.number_of_qualities
        delete element.has_audio
        delete element.video_duration
        delete element.story_feed_media
        delete element.reel_mentions
        delete element.is_dash_eligible
        if (element.video_versions) {
            element["url"] = element.video_versions[0].url
        }
        delete element.video_versions
        if (element.image_versions2) {
            element["url"] = element.image_versions2.candidates[0].url
        }
        delete element.image_versions2
        delete element.story_countdowns
    })
    return story.data
}
module.exports = insta_story;