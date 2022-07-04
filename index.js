// TextMaker Functions
exports.textpro = require("./TextMaker/lib/textmaker/textpro");
exports.isUrl = require("./TextMaker/lib/textmaker/helper");
exports.glowtext = require("./TextMaker/lib/textmaker/glowtxt");

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
exports.lib_reels = require("./InstaDownloader/lib/reels");
exports.getInstaCode_fromUserPKID = require("./InstaDownloader/lib/stories");
exports.formatInstaStoryData = require("./InstaDownloader/lib/stories_format");
exports.getMetafromStories = require("./InstaDownloader/lib/stories_meta");
exports.stories_fetch = require("./InstaDownloader/lib/stories_fetch");
exports.getMetaFromNameUsername = require("./InstaDownloader/lib/search_from_name");
exports.getUserMeta = require("./InstaDownloader/lib/getUserMeta");
exports.insta_profile = require("./InstaDownloader/start/instagram_profile");
exports.insta_story = require("./InstaDownloader/start/instagram_story");
exports.insta_post = require("./InstaDownloader/start/instagram_post");
exports.insta_reel = require("./InstaDownloader/start/instagram_reel");

// NPM Search
exports.getPackageMetaFromQuery = require("./NpmSearch/data/getPackageMetaFromQuery");
exports.getMorePackageMetaFromURL = require("./NpmSearch/data/getMorePackageMetaFromURL");
exports.editPackageMeta = require("./NpmSearch/data/editPackageMeta");
exports.getUserMetaFromQuery = require("./NpmSearch/data/getUserMetaFromQuery");
exports.npm_module = require("./NpmSearch/start/startGetPackage");
exports.npm_user = require("./NpmSearch/start/startGetUser");

// Github Scraper
exports.getBasicMetaGithub = require("./GithubScraper/data/getBasicMeta");
exports.uncacheToken = require("./GithubScraper/data/uncacheToken");
exports.editBasicMetaGithub = require("./GithubScraper/data/editBasicMeta");
exports.github_user = require("./GithubScraper/start/startUserStats");

// Game System Requirements
exports.getCpu = require("./Benchmark/data/cpu");
exports.getGpu = require("./Benchmark/data/gpu");
exports.getGame = require("./Benchmark/data/game");
exports.getVram = require("./Benchmark/data/vram");
exports.getOs = require("./Benchmark/data/os");
exports.getRam = require("./Benchmark/data/ram");
exports.bench = require("./Benchmark/data/bench");
exports.system_requirements = require("./Benchmark/data/bench");
exports.banner = require("./Benchmark/data/banner");
exports.review_bench = require("./Benchmark/data/review");
exports.gpu_info = require("./Benchmark/data/gpu_info");
exports.gpu_scraper = require("./Benchmark/data/gpu_scraper");
exports.cpu_info = require("./Benchmark/data/cpu_info");

// Similarity
exports.test_diff = require("./Similarity/diff");
exports.editDistance = require("./Similarity/dist");
exports.tobinary = require("./Similarity/tobin");
exports.similarity = require("./Similarity/similarity");
exports.SML = require("./Similarity/method");

// Artbreeder
exports.trends_art = require("./Artbreeder/data/trends");
exports.random_art = require("./Artbreeder/data/random");
exports.recent_art = require("./Artbreeder/data/recent");
exports.search_art = require("./Artbreeder/data/search");
exports.Artbreeder = require("./Artbreeder/start/start");