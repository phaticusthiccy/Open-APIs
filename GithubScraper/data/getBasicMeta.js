var axios = require("axios");
var uncacheToken = require("./uncacheToken");
async function getBasicMetaGithub(name) {
    var data = {};
    await uncacheToken(name)
    var payload = await axios({
        url: "https://metrics.lecoq.io/" + 
            name +
            "?template=classic" +
            "&introduction=1&lines=1" +
            "&isocalendar=1&languages=1" +
            "&achievements=1&code=1" + 
            "&notable=1&activity=1" +
            "&isocalendar.duration=half-year&languages.limit=8" +
            "&languages.threshold=0%25&languages.colors=github" +
            "&languages.sections=most-used&languages.indepth=false&languages.analysis.timeout=15" +
            "&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming" +
            "&languages.recent.load=300&languages.recent.days=14&code.lines=12&code.load=100&code.visibility=public&activity.limit=5" +
            "&activity.load=300&activity.days=14&activity.visibility=all&activity.timestamps=false&activity.filter=all" +
            "&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0" +
            "&notable.from=organization&notable.repositories=false" +
            "&notable.indepth=false&introduction.title=true&config.timezone=Europe%2FIstanbul",
        method: "get",
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    })
    data = payload.data;
    return data;
}

module.exports = getBasicMetaGithub;