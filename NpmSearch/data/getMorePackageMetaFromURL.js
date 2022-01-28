var getPackageMetaFromQuery = require("./getPackageMetaFromQuery");
var axios = require("axios");

async function getMorePackageMetaFromURL(url) {
    var data = await axios.get(url)
    var exist_total_files = ""
    try {
        var trytest = data.data.split('<p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">')[4].split('<')[0]
        exist_total_files = trytest
    } catch {
        exist_total_files = "unknown"
    }
    var payload = {
        last_publish: data.data.split(
            '<span class="_76473bea f6 dib ph0 pv2 mb2-ns black-80 nowrap f5 fw4 lh-copy">'
        )[2].split(
            'title="'
        )[1].split(
            '>'
        )[1].split(
            "<"
        )[0],
        dependencies: data.data.split(
            '<li class="_8055e658 f5 fw5 tc pointer c1f85151">'
        )[1].split(
            '<path fill="'
        )[1].split(
            '</svg>'
        )[1].split(
            '</span>'
        )[0],
        dependents: data.data.split(
            '<li class="_8055e658 f5 fw5 tc pointer _7cec0316">'
        )[1].split(
            '<path fill="'
        )[1].split(
            '</svg>'
        )[1].split(
            '</span>'
        )[0],
        all_versions: data.data.split(
            '<li class="_8055e658 f5 fw5 tc pointer b4fcfd19">'
        )[1].split(
            '<path fill="'
        )[1].split(
            '</svg>'
        )[1].split(
            '</span>'
        )[0],
        weekly_downloads: data.data.split(
            '<p class="_9ba9a726 f4 tl flex-auto fw6 black-80 ma0 pr2 pb1">'
        )[1].split(
            '<'
        )[0],
        lisance: data.data.split(
            '<p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">'
        )[2].split(
            '<'
        )[0],
        size: data.data.split(
            '<p class="f2874b88 fw6 mb3 mt2 truncate black-80 f4">'
        )[3].split(
            '<'
        )[0],
        total_files: exist_total_files,
        install_command: "npm i " + data.data.split(
            '<span role="button" tabindex="0">npm i'
        )[1].split(
            '-->'
        )[1].split(
            '</span>'
        )[0]
    }
    return payload;
}
module.exports = getMorePackageMetaFromURL;