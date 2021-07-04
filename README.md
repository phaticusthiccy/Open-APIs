# Textpro - Photooxy - Instagram Graphql Unlimited API

### Only [WhatsAsena](github.com/phaticusthiccy/WhatsAsenaDuplicated) Users Can Use This API ⚠️
##
This api can handle thousands of requests. Also its completely free
and unlimited resources. 

##

## 📦 NPM Installation

`npm i textmaker-thiccy`

##

## 🧾 Examples

### Textpro 1

```js
const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

thiccysapi.textpro("<textpro_html>",
    // "Message One" (One Message)
    // ["Message One"], ["Message Two"] (Two Message)
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Textpro 2 ( Real Usage With One Message )

```js
const thiccysapi = require('textmaker-thiccy');

thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
    "Phaticusthiccy"
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Textpro 3 ( Real Usage With Two Message )

```js
const thiccysapi = require('textmaker-thiccy');

thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
    ["Developer"], ["Phaticusthiccy"]
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

#### Interest More Textpro Examples? Check [Here!](https://github.com/phaticusthiccy/EPhoto-360/blob/e473cce16294794d967d10362b9a848b69387ace/textpro-examples/textpro-ex.js)

##

### Photooxy 1

```js
const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

thiccysapi.photooxy("<photooxy_html>",
    // "Message One" (One Message)
    // ["Message One"], ["Message Two"] (Two Message)
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Photooxy 2 ( Real Usage With One Message )

```js
const thiccysapi = require('textmaker-thiccy');

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
    "Phaticusthiccy"
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Photooxy 3 ( Real Usage With Two Message )

```js
const thiccysapi = require('textmaker-thiccy'); 

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["Developer"], ["Phaticusthiccy"] 
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

#### Interest More Photooxy Examples? Check [Here!](https://github.com/phaticusthiccy/EPhoto-360/blob/2ca3c79fb6330f9dea2b1401f63a3e409e197f34/photooxy-examples/photooxy-ex.js)

##

### Instagram Post 1 

```js                                                                      
const thiccysapi = require('textmaker-thiccy')

thiccysapi.instagram("<instagram_post_link>"
    ).then(async (dat) => {
    try { 
        console.log(dat) // Raw Response
        console.log(dat.moreinfo) 
        console.log(dat.moreinfo.graphql)
        console.log(dat.moreinfo.graphql.shortcode_media) // Final Response
    } catch(err) {
        console.log(err) 
    }
 });
```

### Instagram Post ( Real Usage With Responses )

```js
const thiccysapi = require('textmaker-thiccy')

thiccysapi.instagram("https://www.instagram.com/p/CO9PC9DFDCz/?utm_medium=copy_link"
    ).then(async (dat) => {
    try { 
        console.log(dat) // 1
        console.log(dat.moreinfo) // 2
        console.log(dat.moreinfo.graphql) // 3
        console.log(dat.moreinfo.graphql.shortcode_media) // 4
    } catch(err) {
        console.log(err) // Error
    }
 });

// Response 1
```
```bash
{
  link: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
  type: 'Image',
  moreinfo: { graphql: { shortcode_media: [Object] } }
}
```
```js
// Response 2
```
```graphql
graphql: {
    shortcode_media: {
      __typename: 'GraphImage',
      id: '2575280735612317875',
      shortcode: 'CO9PC9DFDCz',
      dimensions: [Object],
      gating_info: null,
      fact_check_overall_rating: null,
      fact_check_information: null,
      sensitivity_friction_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACYq06jlcoMj8akNROgfr/n61bv0CKSeoolB7HNS1nLcNDIEkCtu7jjGfz4/KrSSAnBOf8KCnFdN/MsfSio2cdufpRTM/vHkVXnl8uNm6EdPqelWqydRYYVe+SfwHAoLYlvc+aDExw5BwfXP9R+oqdiGIGPTP/66yeyBBhs9e5Yn+QH9a2kkDscDHb0z+HoaNtSm7qxKg44opicgZ7dP8KKCB7SbePX86zprZ5ZC2QAf0qyOT/n0qVu1N6Dhq9StBB5IYZ3dMEjnnt64qycZ9M9cd/X/AB+lQZ/e49qmHX8v50JdQk+gqgk8DPt/WinNwBRQSf/Z',
      display_url: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
      display_resources: [Array],
      accessibility_caption: 'Photo shared by 𝘾 𝙔 𝘽 𝙀 𝙍 𝙀 𝙏 𝙍 𝙊⚡💜🌴🌙 on May 16, 2021 tagging @vapor95, @marmaladica, @vaporwave1995, @vaporwave_1980, @vaporwavezone, @vaporgrade, and @vaporwavevault. May be an anime-style image of outdoors.',
      is_video: false,
      tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMjhmOTZiODBkMmUzNDhmNGJlODJlNmQ4MjUxMzIwMTIyNTc1MjgwNzM1NjEyMzE3ODc1In0sInNpZ25hdHVyZSI6IiJ9',
      upcoming_event_info: null,
      edge_media_to_tagged_user: [Object],
      edge_media_to_caption: [Object],
      can_see_insights_as_brand: false,
      caption_is_edited: true,
      has_ranked_comments: false,
      like_and_view_counts_disabled: false,
      edge_media_to_parent_comment: [Object],
      edge_media_to_hoisted_comment: [Object],
      edge_media_preview_comment: [Object],
      comments_disabled: false,
      commenting_disabled_for_viewer: false,
      taken_at_timestamp: 1621217408,
      edge_media_preview_like: [Object],
      edge_media_to_sponsor_user: [Object],
      is_paid_partnership: false,
      location: null,
      viewer_has_liked: false,
      viewer_has_saved: false,
      viewer_has_saved_to_collection: false,
      viewer_in_photo_of_you: false,
      viewer_can_reshare: true,
      owner: [Object],
      is_ad: false,
      edge_web_media_to_related_media: [Object],
      coauthor_producers: [],
      edge_related_profiles: [Object]
    }
  }
}
```
```js
// Response 3
```
```graphql
{
  shortcode_media: {
    __typename: 'GraphImage',
    id: '2575280735612317875',
    shortcode: 'CO9PC9DFDCz',
    dimensions: { height: 1201, width: 1080 },
    gating_info: null,
    fact_check_overall_rating: null,
    fact_check_information: null,
    sensitivity_friction_info: null,
    sharing_friction_info: { should_have_sharing_friction: false, bloks_app_url: null },
    media_overlay_info: null,
    media_preview: 'ACYq06jlcoMj8akNROgfr/n61bv0CKSeoolB7HNS1nLcNDIEkCtu7jjGfz4/KrSSAnBOf8KCnFdN/MsfSio2cdufpRTM/vHkVXnl8uNm6EdPqelWqydRYYVe+SfwHAoLYlvc+aDExw5BwfXP9R+oqdiGIGPTP/66yeyBBhs9e5Yn+QH9a2kkDscDHb0z+HoaNtSm7qxKg44opicgZ7dP8KKCB7SbePX86zprZ5ZC2QAf0qyOT/n0qVu1N6Dhq9StBB5IYZ3dMEjnnt64qycZ9M9cd/X/AB+lQZ/e49qmHX8v50JdQk+gqgk8DPt/WinNwBRQSf/Z',
    display_url: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
    display_resources: [ [Object], [Object], [Object] ],
    accessibility_caption: 'Photo shared by 𝘾 𝙔 𝘽 𝙀 𝙍 𝙀 𝙏 𝙍 𝙊⚡💜🌴🌙 on May 16, 2021 tagging @vapor95, @marmaladica, @vaporwave1995, @vaporwave_1980, @vaporwavezone, @vaporgrade, and @vaporwavevault. May be an anime-style image of outdoors.',
    is_video: false,
    tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMmNiYWU0ZmU1Yjk2NDczYjgxZGQ0MTYwMGI2MjQ0NDUyNTc1MjgwNzM1NjEyMzE3ODc1In0sInNpZ25hdHVyZSI6IiJ9',
    upcoming_event_info: null,
    edge_media_to_tagged_user: { edges: [Array] },
    edge_media_to_caption: { edges: [Array] },
    can_see_insights_as_brand: false,
    caption_is_edited: true,
    has_ranked_comments: false,
    like_and_view_counts_disabled: false,
    edge_media_to_parent_comment: { count: 13, page_info: [Object], edges: [Array] },
    edge_media_to_hoisted_comment: { edges: [] },
    edge_media_preview_comment: { count: 13, edges: [Array] },
    comments_disabled: false,
    commenting_disabled_for_viewer: false,
    taken_at_timestamp: 1621217408,
    edge_media_preview_like: { count: 5237, edges: [] },
    edge_media_to_sponsor_user: { edges: [] },
    is_paid_partnership: false,
    location: null,
    viewer_has_liked: false,
    viewer_has_saved: false,
    viewer_has_saved_to_collection: false,
    viewer_in_photo_of_you: false,
    viewer_can_reshare: true,
    owner: {
      id: '16823946044',
      is_verified: false,
      profile_pic_url: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/148996705_1317041168672483_5279130718120964326_n.jpg?tp=1&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_ohc=wwihCveyTMsAX9hsj0-&edm=AABBvjUBAAAA&ccb=7-4&oh=2464a15f4cccfa4231baaefdf0ef0d7d&oe=60D22BBD&_nc_sid=83d603',
      username: 'shapesoftime',
      blocked_by_viewer: false,
      restricted_by_viewer: null,
      followed_by_viewer: false,
      full_name: '𝘾 𝙔 𝘽 𝙀 𝙍 𝙀 𝙏 𝙍 𝙊⚡💜🌴🌙',
      has_blocked_viewer: false,
      is_private: false,
      is_unpublished: false,
      requested_by_viewer: false,
      pass_tiering_recommendation: true,
      edge_owner_to_timeline_media: [Object],
      edge_followed_by: [Object]
    },
    is_ad: false,
    edge_web_media_to_related_media: { edges: [] },
    coauthor_producers: [],
    edge_related_profiles: { edges: [] }
  }
}
```
```js
// Response 4
```
```graphql
{
  link: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
  type: 'Image',
  moreinfo: { graphql: { shortcode_media: [Object] } }
}
{
  __typename: 'GraphImage',
  id: '2575280735612317875',
  shortcode: 'CO9PC9DFDCz',
  dimensions: { height: 1201, width: 1080 },
  gating_info: null,
  fact_check_overall_rating: null,
  fact_check_information: null,
  sensitivity_friction_info: null,
  sharing_friction_info: { should_have_sharing_friction: false, bloks_app_url: null },
  media_overlay_info: null,
  media_preview: 'ACYq06jlcoMj8akNROgfr/n61bv0CKSeoolB7HNS1nLcNDIEkCtu7jjGfz4/KrSSAnBOf8KCnFdN/MsfSio2cdufpRTM/vHkVXnl8uNm6EdPqelWqydRYYVe+SfwHAoLYlvc+aDExw5BwfXP9R+oqdiGIGPTP/66yeyBBhs9e5Yn+QH9a2kkDscDHb0z+HoaNtSm7qxKg44opicgZ7dP8KKCB7SbePX86zprZ5ZC2QAf0qyOT/n0qVu1N6Dhq9StBB5IYZ3dMEjnnt64qycZ9M9cd/X/AB+lQZ/e49qmHX8v50JdQk+gqgk8DPt/WinNwBRQSf/Z',
  display_url: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
  display_resources: [
    {
      src: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=960d94fb12070d359fb4dc12e58733a3&oe=60D1F137&_nc_sid=83d603',
      config_width: 640,
      config_height: 711
    },
    {
      src: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=1b57b05686b92b1fb8fbf894b3c3d209&oe=60D0D190&_nc_sid=83d603',
      config_width: 750,
      config_height: 834
    },
    {
      src: 'https://instagram.fesb3-1.fna.fbcdn.net/v/t51.2885-15/e35/187224751_1117035015444020_8514248579234890547_n.jpg?tp=1&_nc_ht=instagram.fesb3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UbFr2CZqMc4AX9Z9JeC&edm=AABBvjUBAAAA&ccb=7-4&oh=fe05d1e71c6c19101f32ca1fc03d98d7&oe=60D0FC6F&_nc_sid=83d603',
      config_width: 1080,
      config_height: 1201
    }
  ],
  accessibility_caption: 'Photo shared by 𝘾 𝙔 𝘽 𝙀 𝙍 𝙀 𝙏 𝙍 𝙊⚡💜🌴🌙 on May 16, 2021 tagging @vapor95, @marmaladica, @vaporwave1995, @vaporwave_1980, @vaporwavezone, @vaporgrade, and @vaporwavevault. May be an anime-style image of outdoors.',
  is_video: false,
  tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMmMyMTkzMGQ3YWQzNGJkNWEwMDlkYjY0MTM3NzQzYTAyNTc1MjgwNzM1NjEyMzE3ODc1In0sInNpZ25hdHVyZSI6IiJ9',
  upcoming_event_info: null,
  edge_media_to_tagged_user: {
    edges: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  },
  edge_media_to_caption: { edges: [ [Object] ] },
  can_see_insights_as_brand: false,
  caption_is_edited: true,
  has_ranked_comments: false,
  like_and_view_counts_disabled: false,
  edge_media_to_parent_comment: {
    count: 13,
    page_info: { has_next_page: false, end_cursor: null },
    edges: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  },
  edge_media_to_hoisted_comment: { edges: [] },
  edge_media_preview_comment: { count: 13, edges: [ [Object], [Object] ] },
  comments_disabled: false,
  commenting_disabled_for_viewer: false,
  taken_at_timestamp: 1621217408,
  edge_media_preview_like: { count: 5237, edges: [] },
  edge_media_to_sponsor_user: { edges: [] },
  is_paid_partnership: false,
  location: null,
  viewer_has_liked: false,
  viewer_has_saved: false,
  viewer_has_saved_to_collection: false,
  viewer_in_photo_of_you: false,
  viewer_can_reshare: true,
  owner: {
    id: '16823946044',
    is_verified: false,
    profile_pic_url: 'https://instagram.fesb3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/148996705_1317041168672483_5279130718120964326_n.jpg?tp=1&_nc_ht=instagram.fesb3-2.fna.fbcdn.net&_nc_ohc=wwihCveyTMsAX9hsj0-&edm=AABBvjUBAAAA&ccb=7-4&oh=2464a15f4cccfa4231baaefdf0ef0d7d&oe=60D22BBD&_nc_sid=83d603',
    username: 'shapesoftime',
    blocked_by_viewer: false,
    restricted_by_viewer: null,
    followed_by_viewer: false,
    full_name: '𝘾 𝙔 𝘽 𝙀 𝙍 𝙀 𝙏 𝙍 𝙊⚡💜🌴🌙',
    has_blocked_viewer: false,
    is_private: false,
    is_unpublished: false,
    requested_by_viewer: false,
    pass_tiering_recommendation: true,
    edge_owner_to_timeline_media: { count: 1328 },
    edge_followed_by: { count: 84811 }
  },
  is_ad: false,
  edge_web_media_to_related_media: { edges: [] },
  coauthor_producers: [],
  edge_related_profiles: { edges: [] }
}
```
```js
// Response Error
```
```
(node:10348) UnhandledPromiseRejectionWarning: Request error
(Use `node --trace-warnings ...` to show where the warning was created)
(node:10348) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:10348) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

##

### [ Warranty - Lifetime ] 🎦
```bash
This API not affiliated with any organization or foundation.
All code is available as open source.
Development belongs to Phaticusthiccy.
Every user has unlimited rights.
Do not use for illegal situations.
```
##

### [ Contribution ] 💻
```json
Any additions that do not impair functionality are accepted.
A Any suggestions or additions that go against the code of ethics and GitHub policies will not be accepted.
All suggestions for personalization purposes will not be accepted.
```
