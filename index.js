// TextMaker Functions
exports.textpro = require("./TextMaker/lib/textmaker/textpro");
exports.photooxy = require("./TextMaker/lib/textmaker/photooxy");
exports.isUrl = require("./TextMaker/lib/textmaker/helper");
exports.glowtext = require("./TextMaker/lib/textmaker/glowtxt")

// GTAVMod-Finder Functions
exports.base = require("./GTAVMod-Finder/data/base");
exports.read = require("./GTAVMod-Finder/data/searchmod");
exports.readuser = require("./GTAVMod-Finder/data/searchuser");
exports.baseWeb = require("./GTAVMod-Finder/forWeb/base");
exports.readWeb = require("./GTAVMod-Finder/forWeb/searchmod");
exports.readuserWeb = require("./GTAVMod-Finder/forWeb/searchuser");

// TikTok Downloader 
exports.tiktok = require("./TT-Downloader/getMeta");

// Instagram Scraper
exports.editInsta_Load = require("./InstaDownloader/lib/editor");
exports.exportInsta_Data = require("./InstaDownloader/lib/export");
exports.export_reelsData = require("./InstaDownloader/lib/reels");
exports.getInstaCode_fromUserPKID = require("./InstaDownloader/lib/stories");
exports.formatInstaStoryData = require("./InstaDownloader/lib/stories_format");
exports.getMetafromStories = require("./InstaDownloader/lib/stories_meta");
exports.getMetaFromNameUsername = require("./InstaDownloader/lib/search_from_name");
exports.getUserMeta = require("./InstaDownloader/lib/getUserMeta");
exports.insta_profile = require("./InstaDownloader/start/instagram_profile");
exports.insta_story = require("./InstaDownloader/start/instagram_story");
exports.insta_post = require("./InstaDownloader/start/instagram_post");
exports.insta_reel = require("./InstaDownloader/start/instagram_reel");