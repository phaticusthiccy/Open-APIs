var random_art = require("../data/random");
var recent_art = require("../data/recent");
var search_art = require("../data/search");
var trends_art = require("../data/trends");
var axios = require("axios");
var os = require("os");
class Artbreeder {
    constructor(limit, model) {
        this.limit = limit
        this.model = model
    }
    async random () {
        return await random_art(this.limit, this.model)
        // return data;
    }
    async recent () {
        var data = await recent_art(this.limit, this.model)
        return data;
    }
    async search (query) {
        var data = await search_art(query, this.limit, this.model)
        return data;
    }
    async trend () {
        var data = await trends_art(this.limit, this.model) 
        return data;
    }
    async test () {
        var payload = {
            random: await this.random(),
            recent: await this.recent(),
            trend: await this.trend(),
            search: await this.search("omen")
        }
        return payload;
    }
}
module.exports = Artbreeder;
