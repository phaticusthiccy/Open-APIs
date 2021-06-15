const ig = require("instatouch");
const { isUrl } = require("../../src/helpers/functions");
const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
};

async function instagram(url) {
  if (!url) {
    throw new Error("Input url !!");
  }
  if (!isUrl(url)) {
    throw new Error("Wrong url !!");
  }
  url = url.split("?")[0];
  let data = await ig.getPostMeta(url, options);
  let validasi = data.graphql.shortcode_media.__typename;
  if (validasi == "GraphVideo") {
    let link = data.graphql.shortcode_media.video_url;
    let type = "Video";
    return { link, type, moreinfo: data };
  } else if (validasi == "GraphImage") {
    let link = data.graphql.shortcode_media.display_url;
    let type = "Image";
    return { link, type, moreinfo: data };
  } else if (validasi == "GraphSidecar") {
    let link = data.graphql.shortcode_media.edge_sidecar_to_children.edges;
    let h = [];
    for (let i = 0; i < link.length; i++) {
      let hasil = link[i].node.display_url;
      h.push({ slide: i + 1, url: hasil, type: "Slide" });
      return h;
    }
  }
}
module.exports = instagram;
