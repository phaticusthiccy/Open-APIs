const ig = require("instatouch");
const tt = require('tiktok-scraper');
const exec = require('child_process').exec;
const os = require("os");
const { isUrl } = require("../../src/helpers/functions");
const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
};
const tt_opts = {
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
    referer: 'https://www.tiktok.com/',
    cookie: 'tt_webid_v2=689854141086886123'
  },
  hdVideo: true,
  noWaterMark: true
}
async function asena_tt_video_data(url) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!url) {
    throw new Error("Input url !!");
  }
  if (!isUrl(url)) {
    throw new Error("Wrong url !!");
  }
  console.log('\n                  ___                       ___           ___                 \n      ___        \/__\/\\        ___          \/  \/\\         \/  \/\\          ___   \n     \/  \/\\       \\  \\:\\      \/  \/\\        \/  \/:\/        \/  \/:\/         \/__\/|  \n    \/  \/:\/        \\__\\:\\    \/  \/:\/       \/  \/:\/        \/  \/:\/         |  |:|  \n   \/  \/:\/     ___ \/  \/::\\  \/__\/::\\      \/  \/:\/  ___   \/  \/:\/  ___     |  |:|  \n  \/  \/::\\    \/__\/\\  \/:\/\\:\\ \\__\\\/\\:\\__  \/__\/:\/  \/  \/\\ \/__\/:\/  \/  \/\\  __|__|:|  \n \/__\/:\/\\:\\   \\  \\:\\\/:\/__\\\/    \\  \\:\\\/\\ \\  \\:\\ \/  \/:\/ \\  \\:\\ \/  \/:\/ \/__\/::::\\  \n \\__\\\/  \\:\\   \\  \\::\/          \\__\\::\/  \\  \\:\\  \/:\/   \\  \\:\\  \/:\/     ~\\~~\\:\\ \n      \\  \\:\\   \\  \\:\\          \/__\/:\/    \\  \\:\\\/:\/     \\  \\:\\\/:\/        \\  \\:\\\n       \\__\\\/    \\  \\:\\         \\__\\\/      \\  \\::\/       \\  \\::\/          \\__\\\/\n                 \\__\\\/                     \\__\\\/         \\__\\\/                \n')
  var data = await tt.getVideoMeta(url, tt_opts) 
  return data
}
async function asena_tt_profile_data(user) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!user) {
    throw new Error("Input url !!");
  }
  console.log('\n                  ___                       ___           ___                 \n      ___        \/__\/\\        ___          \/  \/\\         \/  \/\\          ___   \n     \/  \/\\       \\  \\:\\      \/  \/\\        \/  \/:\/        \/  \/:\/         \/__\/|  \n    \/  \/:\/        \\__\\:\\    \/  \/:\/       \/  \/:\/        \/  \/:\/         |  |:|  \n   \/  \/:\/     ___ \/  \/::\\  \/__\/::\\      \/  \/:\/  ___   \/  \/:\/  ___     |  |:|  \n  \/  \/::\\    \/__\/\\  \/:\/\\:\\ \\__\\\/\\:\\__  \/__\/:\/  \/  \/\\ \/__\/:\/  \/  \/\\  __|__|:|  \n \/__\/:\/\\:\\   \\  \\:\\\/:\/__\\\/    \\  \\:\\\/\\ \\  \\:\\ \/  \/:\/ \\  \\:\\ \/  \/:\/ \/__\/::::\\  \n \\__\\\/  \\:\\   \\  \\::\/          \\__\\::\/  \\  \\:\\  \/:\/   \\  \\:\\  \/:\/     ~\\~~\\:\\ \n      \\  \\:\\   \\  \\:\\          \/__\/:\/    \\  \\:\\\/:\/     \\  \\:\\\/:\/        \\  \\:\\\n       \\__\\\/    \\  \\:\\         \\__\\\/      \\  \\::\/       \\  \\::\/          \\__\\\/\n                 \\__\\\/                     \\__\\\/         \\__\\\/                \n')
  var data = await tt.getUserProfileInfo(user) 
  return data
}
async function asena_tt_video_hashtag_data(ht) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!ht) {
    throw new Error("Input url !!");
  }
  console.log('\n                  ___                       ___           ___                 \n      ___        \/__\/\\        ___          \/  \/\\         \/  \/\\          ___   \n     \/  \/\\       \\  \\:\\      \/  \/\\        \/  \/:\/        \/  \/:\/         \/__\/|  \n    \/  \/:\/        \\__\\:\\    \/  \/:\/       \/  \/:\/        \/  \/:\/         |  |:|  \n   \/  \/:\/     ___ \/  \/::\\  \/__\/::\\      \/  \/:\/  ___   \/  \/:\/  ___     |  |:|  \n  \/  \/::\\    \/__\/\\  \/:\/\\:\\ \\__\\\/\\:\\__  \/__\/:\/  \/  \/\\ \/__\/:\/  \/  \/\\  __|__|:|  \n \/__\/:\/\\:\\   \\  \\:\\\/:\/__\\\/    \\  \\:\\\/\\ \\  \\:\\ \/  \/:\/ \\  \\:\\ \/  \/:\/ \/__\/::::\\  \n \\__\\\/  \\:\\   \\  \\::\/          \\__\\::\/  \\  \\:\\  \/:\/   \\  \\:\\  \/:\/     ~\\~~\\:\\ \n      \\  \\:\\   \\  \\:\\          \/__\/:\/    \\  \\:\\\/:\/     \\  \\:\\\/:\/        \\  \\:\\\n       \\__\\\/    \\  \\:\\         \\__\\\/      \\  \\::\/       \\  \\::\/          \\__\\\/\n                 \\__\\\/                     \\__\\\/         \\__\\\/                \n')
  var data = await tt.getHashtagInfo(ht) 
  return data
}
async function instagram(url) {
  var sdn = 'RUN git clone https://github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
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
      console.log('\n                  ___                       ___           ___                 \n      ___        \/__\/\\        ___          \/  \/\\         \/  \/\\          ___   \n     \/  \/\\       \\  \\:\\      \/  \/\\        \/  \/:\/        \/  \/:\/         \/__\/|  \n    \/  \/:\/        \\__\\:\\    \/  \/:\/       \/  \/:\/        \/  \/:\/         |  |:|  \n   \/  \/:\/     ___ \/  \/::\\  \/__\/::\\      \/  \/:\/  ___   \/  \/:\/  ___     |  |:|  \n  \/  \/::\\    \/__\/\\  \/:\/\\:\\ \\__\\\/\\:\\__  \/__\/:\/  \/  \/\\ \/__\/:\/  \/  \/\\  __|__|:|  \n \/__\/:\/\\:\\   \\  \\:\\\/:\/__\\\/    \\  \\:\\\/\\ \\  \\:\\ \/  \/:\/ \\  \\:\\ \/  \/:\/ \/__\/::::\\  \n \\__\\\/  \\:\\   \\  \\::\/          \\__\\::\/  \\  \\:\\  \/:\/   \\  \\:\\  \/:\/     ~\\~~\\:\\ \n      \\  \\:\\   \\  \\:\\          \/__\/:\/    \\  \\:\\\/:\/     \\  \\:\\\/:\/        \\  \\:\\\n       \\__\\\/    \\  \\:\\         \\__\\\/      \\  \\::\/       \\  \\::\/          \\__\\\/\n                 \\__\\\/                     \\__\\\/         \\__\\\/                \n')
      return h;
    }
  }
}
module.exports = instagram;
module.exports = asena_tt_video_data;
module.exports = asena_tt_profile_data;
module.exports = asena_tt_video_hashtag_data;
