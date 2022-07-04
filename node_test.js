// .term
const { exec, spawn } = require("child_process")

// Internals
var insta_test1 = require("./InstaDownloader/start/instagram_post")
var insta_test2 = require("./InstaDownloader/start/instagram_profile")
var insta_test3 = require("./InstaDownloader/start/instagram_reel")
var insta_test4 = require("./InstaDownloader/start/instagram_story")
var github_test1 = require("./GithubScraper/start/startUserStats")
var tiktok_test1 = require("./TT-Downloader/getMeta")
var text_test1  = require("./TextMaker/lib/textmaker/glowtxt")
var text_test3  = require("./TextMaker/lib/textmaker/textpro")
var gta_test0   = require("./GTAVMod-Finder/data/base")
var gta_test1   = require("./GTAVMod-Finder/data/searchmod")
var gta_test2   = require("./GTAVMod-Finder/data/searchuser")
var npm_test1   = require("./NpmSearch/start/startGetPackage")
var npm_test2   = require("./NpmSearch/start/startGetUser")
var game_test1  = require("./Benchmark/data/bench")
var game_test2  = require("./Benchmark/data/gpu_scraper")
var similarity  = require("./Similarity/similarity");
var artbreeder  = require("./Artbreeder/start/start");

// Extra
var axios = require("axios")
var fs = require("fs")
var cheerio = require("cheerio")
var form_data = require("form-data")
var cookie = require("cookie")
var chalk_animation = require("chalk-animation")
var readline = require('readline');
var delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}  
require('util').inspect.defaultOptions.depth = null
var input = new Array()
input[0] = "Please, Select The Main Menu"
input[1] = "\n\n\n"

input[2] = "1) Instagram Scraper\n"
input[3] = "2) Github Scraper\n"
input[4] = "3) Tiktok Downloader\n"
input[5] = "4) TextMaker Logo Creator\n"
input[6] = "5) GTAV Mod Finder\n"
input[7] = "6) NPM Scraper\n\n"

input[8] = "Wrong Chooice, Exiting.."
input[9] = "./clear.sh"
input[10] = "./terminate.sh"
input[11] = "Please, Select The Service"

input[12] = "1) Instgaram Post Downloader\n"
input[13] = "2) Instagram Profile Scraper\n"
input[14] = "3) Instagram Reel Downloader\n"
input[15] = "4) Instagram Story Dowmloader\n\n"

input[16] = ">>> "
input[17] = "Please, Select The Worktype"
input[18] = "1) Manuel // If you choose this, you can use any post url.\n"
input[19] = "2) Auto // If you choose this, script will work automaticly.\n\n"

async function getVers() {
    var ssss = await npm_test1("@phaticusthiccy/open-apis", 3, false)
    var vers = ""
    var wait_vers = 0
    vers = ssss[0].version
    wait_vers = 1
    var logo = `
\u001b[33m╭────────────────────────────────────────────────────────────────────╮
\u001b[33m│                                                                    │
\u001b[33m│          Open APIs by Phaticusthiccy - Version: ${vers}              │
\u001b[33m│                                                                    │
\u001b[33m│   \u001b[32mChangelog: \u001b[36mhttps://github.com/phaticusthiccy/Open-APIs/releases  \u001b[33m│
\u001b[33m│               \u001b[32mRun \u001b[33;1mnpm install \u001b[32mto install depencies                 \u001b[33m│
\u001b[33m│                                                                    │
\u001b[33m│               \u001b[32mRun \u001b[33;1mnpm run dev \u001b[32mto start developer mode              \u001b[33m│
\u001b[33m│                                                                    │
\u001b[33m╰────────────────────────────────────────────────────────────────────╯\u001b[0m
`
console.log(logo)
}

// Script Goes Here
async function put_main(q) {
    if (typeof q !== "number") {
        q = Number(q)
    }
    if (q == 1) {
        return "Choosed Instagram Module"
    } else if (q == 2) {
        return "Choosed Github Module"
    } else if (q == 3) {
        return "Choosed Tiktok Module"
    } else if (q == 4) {
        return "Choosed TextMaker Module"
    } else if (q == 5) {
        return "Choosed GTAV Mod Finder Module"
    } else if (q == 6) {
        return "Choosed NPM Module"
    } else {
       chalk_animation.neon(input[8])
        await delay(3500)
        await exec(input[9])
        process.exit()
        await delay(1800)
        await exec(input[10])
    }
}
async function put_insta(q) {
    if (typeof q !== "number") {
        q = Number(q)
    }
    if (q == 1) {
        return "Choosed Post Downloader"
    } else if (q == 2) {
        return "Choosed Profile Scraper"
    } else if (q == 3) {
        return "Choosed Reel Downloader"
    } else if (q == 4) {
        return "Choosed Story Downloader"
    } else {
       chalk_animation.neon(input[8])
        await delay(3500)
        await exec(input[9])
        process.exit()
        await delay(1800)
        await exec(input[10])
    }
}

async function if_auto_or_manuel_insta_post(q) {
    if (typeof q !== "number") {
        q = Number(q)
    }
    if (q == 1) {
        return "Please, Enter The Post URL (Image, Photo or IGTV)"
    } else if (q == 2) {
        return "Auto Test Starting.."
    } else {
       chalk_animation.neon(input[8])
        await delay(3500)
        await exec(input[9])
        process.exit()
        await delay(1800)
        await exec(input[10])
    }
}

async function test_node() {
    var payload;
    const rl = readline.createInterface(
        { input: process.stdin, output: process.stdout }
    );
    rl.question(input[0] + input[1] + input[2] + input[3] + input[4] + input[5] + input[6] + input[7] + input[16], async (int1) => {
        var int_try = await put_main(int1)
        console.log(int_try)
        await delay(3000)
        await exec(input[9])
        await delay(1400)

        if (int_try == "Choosed Instagram Module") {

            rl.question(input[11] + input[1] + input[12] + input[13] + input[14] + input[15] + input[16], async (int2) => {
                var int_try2 = await put_insta(int2)
                console.log(int_try2)
                await delay(3000)
                await exec(input[9])
                await delay(1400)

                if (int_try2 == "Choosed Post Downloader") {
                    rl.question(input[17] + input[1] + input[18] + input[19] + input[16], async (int3) => {
                        var int_try3 = await if_auto_or_manuel_insta_post(int3)
                        console.log(int_try3)
                        await delay(3000)
                        await exec(input[9])
                        await delay(1400)

                        if (int_try3 == "Please, Enter The Post URL (Image, Photo or IGTV)") {
                            rl.question(">>> ", async (int4) => {
                                var pay1 = await insta_test1(int4)
                                payload = pay1
                            })
                        } else {
                            var pay2 = await insta_test1("https://www.instagram.com/p/CHgbRFCHBlB/?utm_source=ig_web_copy_link")
                            payload = pay2
                        }
                    })
                }
            })
        }
    })
    return payload;
}

const rl = readline.createInterface(
    { input: process.stdin, output: process.stdout }
);



syncWait(500)


class startthetest {
    constructor() {
    }
    async start() {
        await exec(input[9])
        getVers().then( async () => {
            syncWait(800)
            rl.question("\u001b[40;1mPlease, Select The Main Menu\u001b[0m" + "\n\n\n" + "1) Instagram Scraper\n" +
                "2) Github Scraper\n" +
                "3) Tiktok Downloader\n"+
                "4) TextMaker Logo Creator\n"+
                "5) GTAV Mod Finder\n"+
                "6) NPM Scraper\n7) Game System Requirements Scraper\n" +
                "8) Sentence Similarity\n" +
                "9) Artbreeder Scraper\n\n>>> ", async (int1) => {
                if (Number(int1) == 1) {
                    console.log("Selected Instagram Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m" + "\n\n\n" + "1) Instgaram Post Downloader\n" +
                        "2) Instagram Profile Scraper\n"+
                        "3) Instagram Reel Downloader\n"+
                        "4) Instagram Story Dowmloader\n\n>>> ", async (int2) => {
                            if (Number(int2) == 1) {
                                console.log("Selected Post Downloader")
                                await delay(1100)
                                await exec(input[9])
                                await delay(1100)
                                rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any post url.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                    if (Number(int3) == 1) {
                                        rl.question("Enter Link >>> ", async (int4) => {
                                            var tttsttstttstt = await insta_test1(int4) 
                                            console.log(tttsttstttstt)
                                            process.exit()
                                        })
                                    } else if (Number(int3) == 2) {
                                        var tttsttstttsstt = await insta_test1("https://www.instagram.com/p/CHgbRFCHBlB/?utm_source=ig_web_copy_link") 
                                        console.log(tttsttstttsstt)
                                        process.exit()
                                    } else {
                                        chalk_animation.neon(input[8])
                                        await delay(3000)
                                        process.exit()
                                    }
                                })
                            } else if (Number(int2) ==2 ) {
                                console.log("Selected Profile Scraper")
                                await delay(1100)
                                await exec(input[9])
                                await delay(1100)
                                rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any username you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                    if (Number(int3) == 1) {
                                        rl.question("Enter Username >>> ", async (int4) => {
                                            var tttsttastttstt = await insta_test2(int4) 
                                            console.log(tttsttastttstt)
                                            process.exit()
                                        })
                                    } else if (Number(int3) == 2) {
                                        var tttsttsstt = await insta_test2("nisneter") 
                                        console.log(tttsttsstt)
                                        process.exit()
                                    } else {
                                        chalk_animation.neon(input[8])
                                        await delay(3000)
                                        process.exit()
                                    }
                                })
                            } else if (Number(int2) == 3) {
                                console.log("Selected Reel Downloader")
                                await delay(1100)
                                await exec(input[9])
                                await delay(1100)
                                rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any reel link you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                    if (Number(int3) == 1) {
                                        rl.question("Enter Username >>> ", async (int4) => {
                                            var tttsttasadatttstt = await insta_test3(int4) 
                                            console.log(tttsttasadatttstt)
                                            process.exit()
                                        })
                                    } else if (Number(int3) == 2) {
                                        var tttsttsadastt = await insta_test3("https://www.instagram.com/reel/CVOewZuoFwg/?utm_medium=copy_link") 
                                        console.log(tttsttsadastt)
                                        process.exit()
                                    } else {
                                        chalk_animation.neon(input[8])
                                        await delay(3000)
                                        process.exit()
                                    }
                                })
                            } else if (Number(int2) == 4) {
                                console.log("Selected Story Downloader")
                                await delay(1100)
                                await exec(input[9])
                                await delay(1100)
                                rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can download any user's stories you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                    if (Number(int3) == 1) {
                                        rl.question("Enter Username >>> ", async (int4) => {
                                            var tttsttasadatttadastt = await insta_test4(int4) 
                                            console.log(tttsttasadatttadastt)
                                            process.exit()
                                        })
                                    } else if (Number(int3) == 2) {
                                        var tttsttsadaadsaastt = await insta_test4("instagram") 
                                        console.log(tttsttsadaadsaastt)
                                        process.exit()
                                    } else {
                                        chalk_animation.neon(input[8])
                                        await delay(3000)
                                        process.exit()
                                    }
                                })
                            } else {
                                chalk_animation.neon(input[8])
                                await delay(3000)
                                process.exit()
                            }
                        }
                    )
                } else  if (Number(int1) == 2) {
                    console.log("Selected Github Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any username you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                        if (Number(int3) == 1) {
                            rl.question("Enter Username >>> ", async (int4) => {
                                var ttttstt = await github_test1(int4) 
                                console.log(ttttstt)
                                process.exit()
                            })
                        } else if (Number(int3) == 2) {
                            var tttsttsaddssastt = await github_test1("phaticusthiccy")
                            console.log(tttsttsaddssastt)
                            process.exit()
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else  if (Number(int1) == 3) {
                    console.log("Selected Tiktok Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any tiktok url you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                        if (Number(int3) == 1) {
                            rl.question("Enter Tiktok Video URL >>> ", async (int4) => {
                                var ttttsasdsadtt = await tiktok_test1(int4) 
                                console.log(ttttsasdsadtt)
                                process.exit()
                            })
                        } else if (Number(int3) == 2) {
                            var ssastt = await tiktok_test1("https://www.tiktok.com/@atixealex/video/7078604945766812929?is_from_webapp=1&sender_device=pc&web_id=7016736013771949569")
                            console.log(ssastt)
                            process.exit()
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else  if (Number(int1) == 4) {
                    console.log("Selected TextMaker Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m" + "\n\n\n" + "1) Textpro\n" + "2) Glowtext\n\n>>> ", async (int9) => {
                        if (Number(int9 == 1)) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any textpro.me url you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                if (Number(int3) == 1) {
                                    var text_url;
                                    var text_text;
                                    rl.question("Enter The TextPro HTML (ex: https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html) >>> ", async (int6) => {
                                        text_url = int6
                                        rl.question('Enter The Text >>> ', async (int93) => {
                                            text_text = int93
                                            var yysyysyytxt = await text_test3(text_url, text_text)
                                            console.log(yysyysyytxt)
                                            process.exit()
                                        })
                                    })
                                } else if (Number(int3) == 2) {
                                    var finalttxttxtst = await text_test3("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", "Phaticusthiccy")
                                    console.log(finalttxttxtst)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else if (Number(int9 == 2)) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any parameters you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                                if (Number(int3) == 1) {
                                    var text1;
                                    var text2;
                                    var text3;
                                    var text_font;
                                    var text_size;
                                    var text_color;
                                    var bg_color;
                                    var glow;
                                    var non_trans;
                                    var glitter_border;
                                    var anim_type;
                                    rl.question("(1/11) Enter The First Text >>> ", async (int6) => {
                                        if (int6 == "") {
                                            chalk_animation.neon("First Text Connot be Blank! Please Enter The Some Words. Exiting..")
                                            await delay(3000)
                                            process.exit()
                                        } else {
                                            text1 = int6
                                        }
                                        text1 = int6
                                        rl.question("(2/11) Enter The Second Text (Optional - Leave Blank If You Dont Want to) >>> ", async (int93) => {
                                            text2 = int93
                                            rl.question("(3/11) Enter The Third Text (Optional - Leave Blank If You Dont Want to) >>> ", async (int72) => {
                                                text3 = int72
                                                rl.question("(4/11) Enter The Font Style \n\n\n1) Neon \n2) Purple \n3) Starshine \n\n>>> ", async (int38) => {
                                                    if (Number(int38) == 1) {
                                                        text_font = "neonlights"
                                                    } else if (Number(int38) == 2) {
                                                        text_font = "purple"
                                                    } else if (Number(int38) == 3) {
                                                        text_font = "starshine"
                                                    } else {
                                                        chalk_animation.neon(input[8])
                                                        await delay(3000)
                                                        process.exit()
                                                    }
                                                    rl.question("(5/11) Enter The Font Size \n\n\n1) Tiny \n2) Mini\n3) Small\n4) Medium\n5) Large \n6) XLarge \n7) XXLarge \n\n>>> ", async (int16) => {
                                                        int16 = Number(int16)
                                                        if (int16 == 1) {
                                                            text_size = "t"
                                                        } else if (int16 == 2) {
                                                            text_size = "s"
                                                        } else if (int16 == 3) {
                                                            text_size = "m"
                                                        } else if (int16 == 4) {
                                                            text_size = "l"
                                                        } else if (int16 == 5) {
                                                            text_size = "x"
                                                        } else if (int16 == 6) {
                                                            text_size = "xl1"
                                                        } else if (int16 == 7) {
                                                            text_size = "xl2"
                                                        } else {
                                                            chalk_animation.neon(input[8])
                                                            await delay(3000)
                                                            process.exit()
                                                        }
                                                        rl.question("(6/11) Enter The Text Color \n\nType Between 0-7 (Every Text Font Has Diffrent Color Types) >>> ", async (int91) => {
                                                            int91 = Number(int91)
                                                            if (int91 > 7 && int91 < 0) {
                                                                chalk_animation.neon(input[8])
                                                                await delay(3000)
                                                                process.exit()
                                                            } else {
                                                                text_color = int91.toString()
                                                            }
                                                            rl.question("(7/11) Enter The Background Color \n\nBG Color Must Be Hex (Optional - Leave Blank If You Dont Want to) >>> ", async (int30) => {
                                                                if (int30 == "") {
                                                                    bg_color = "0"
                                                                } else {
                                                                    if (int30.startsWith("#")) {
                                                                        bg_color = int30
                                                                    } else {
                                                                        chalk_animation.neon("Background Color Must Be Hex! Not a color name or something else. Exiting..")
                                                                        await delay(3000)
                                                                        process.exit()
                                                                    }
                                                                }
                                                                rl.question("(8/11) Enter The Glow Destiny \n\n\n1) No Glow\n2) Glow\n3) Super Glow\n\n>>> ", async (int293) => {
                                                                    int293 = Number(int293)
                                                                    if (int293 == 1) {
                                                                        glow = "0"
                                                                    } else if (int293 == 2) {
                                                                        glow = "1"
                                                                    } else if (int293 == 3) {
                                                                        glow = "2"
                                                                    } else {
                                                                        chalk_animation.neon(input[8])
                                                                        await delay(3000)
                                                                        process.exit()
                                                                    }
                                                                    rl.question("(9/11) Choose The Bacground Type \n\n\n1) Transparent\n2) Non-Transparent (Black)\n\n>>> ", async (int53) => {
                                                                        int53 = Number(int53)
                                                                        if (int53 == 1) {
                                                                            non_trans = "false"
                                                                        } else if (int53 == 2) {
                                                                            non_trans = "true"
                                                                        } else {
                                                                            chalk_animation.neon(input[8])
                                                                            await delay(3000)
                                                                            process.exit()
                                                                        }
                                                                        rl.question("(10/11) Choose The Animation Quality \n\n\n1) High \n2) Normal\n\n>>> ", async (int83) => {
                                                                            int83 = Number(int83)
                                                                            if (int83 == 1) {
                                                                                glitter_border = "true"
                                                                            } else if (int83 == 2) {
                                                                                glitter_border = "false"
                                                                            } else {
                                                                                chalk_animation.neon(input[8])
                                                                                await delay(3000)
                                                                                process.exit()
                                                                            }
                                                                            rl.question("(11/11) Choose The Animation Type \n\n\n1) No Animation (PNG)\n2) Pulse\n3) Sweep\n\n>>> ", async (int67) => {
                                                                                int67 = Number(int67)
                                                                                if (int67 == 1) {
                                                                                    anim_type = "none"
                                                                                } else if (int67 == 2) {
                                                                                    anim_type = "pulse"
                                                                                } else if (int67 == 3) {
                                                                                    anim_type = "sweep"
                                                                                } else {
                                                                                    chalk_animation.neon(input[8])
                                                                                    await delay(3000)
                                                                                    process.exit()
                                                                                }
                                                                                var ttattxttattsttsauussttta = await text_test1({
                                                                                    text: text1,
                                                                                    text2: text2,
                                                                                    text3: text3,
                                                                                    font_style: text_font,
                                                                                    font_size: text_size,
                                                                                    font_colour: text_color,
                                                                                    bgcolour: bg_color,
                                                                                    glow_halo: glow,
                                                                                    non_trans: non_trans,
                                                                                    glitter_border: glitter_border,
                                                                                    anim_type: anim_type,
                                                                                    sumbit_type: "text"
                                                                                })
                                                                                console.log(ttattxttattsttsauussttta)
                                                                                process.exit()
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                } else if (Number(int3) == 2) {
                                    var ttattxtttsauussttta = await text_test1({
                                        text: "Thiccy",
                                        text2: "The",
                                        text3: "Developer",
                                        font_style: "funkyzeit",
                                        font_size: "l",
                                        font_colour: "6",
                                        bgcolour: "",
                                        glow_halo: "2",
                                        non_trans: "false",
                                        glitter_border: "true",
                                        anim_type: "pulse",
                                        sumbit_type: "text"
                                    })
                                    console.log(ttattxtttsauussttta)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else  if (Number(int1) == 5) {    
                    rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any parameters you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int3) => {
                        if (Number(int3) == 1) {
                            rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) User Scraper\n2) Mod Finder\n\n>>> " ,async (int33) => {
                                if (Number(int33) == 1) {
                                    rl.question("Enter The Username >>> " ,async (int312) => {
                                        var ttsttxttattstt = await gta_test2(int312)
                                        console.log(ttsttxttattstt)
                                        process.exit()
                                    })
                                } else if (Number(int33) == 2) {
                                    rl.question("Enter The Mod Name You Want to Search >>> " ,async (int352) => {
                                        var ttsttxttattstt = await gta_test0(int352)
                                        var yysyyatxtttats = await gta_test1()
                                        console.log(yysyyatxtttats)
                                        process.exit()
                                    })
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else if (Number(int3) == 2) {
                            rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) User Scraper\n2) Mod Finder\n\n>>> " ,async (int72) => {
                                if (Number(int72) == 1) {
                                    var ttsttxttatssatstt = await gta_test2("thiccy")
                                    console.log(ttsttxttatssatstt)
                                    process.exit()
                                } else if (Number(int72) == 2) {
                                    var ttsttxtsadawwatattstt = await gta_test0("Neon Intro")
                                    var yyttats = await gta_test1()
                                    console.log(yyttats)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else  if (Number(int1) == 6) {
                    console.log("Selected NPM Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) Module Search \n2) User Scraper\n\n>>> ", async (int628) => {
                        int628 = Number(int628)
                        if (int628 == 1) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any parameters you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int331) => {
                                int331 = Number(int331)
                                if (int331 == 1) {
                                    var pkg_name;
                                    var limitter;
                                    var moreinf;
                                    rl.question("Enter The Package Name You Want to Search >>> ", async (int821) => {
                                        if (int821 == "") {
                                            console.log("Search Query Cannot be Blank! Exiting..")
                                            await delay(3000)
                                            process.exit()
                                        } else {
                                            pkg_name = int821
                                            rl.question("Enter The How Many Results You Want to See (1, 2 or 3) >>> ", async (int271) => {
                                                int271 = Number(int271)
                                                if (int271 > 3 && int271 < 1) {
                                                    chalk_animation.neon(input[8])
                                                    await delay(3000)
                                                    process.exit()
                                                } else {
                                                    limitter = int271
                                                    rl.question("Do You Want to See More Information? \n\n\n1) Yes\n2) No\n\n>>> " ,async (int517) => {
                                                        int517 = Number(int517)
                                                        if (int517 == 1) {
                                                            var ttxttattsttsttat = await npm_test1(pkg_name, limitter, true)
                                                            console.log(ttxttattsttsttat)
                                                            process.exit()
                                                        } else if (int517 == 2) {
                                                            var ttttsttat = await npm_test1(pkg_name, limitter, false)
                                                            console.log(ttttsttat)
                                                            process.exit()
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                } else if (int331 == 2) {
                                    var ttxttattsat = await npm_test1("open apis", 2, true)
                                    console.log(ttxttattsat)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else if (int628 == 2) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any parameters you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int31) => {
                                int31 = Number(int31)
                                if (int31 == 1) {
                                    rl.question("Enter The Username You Want To Scrap >>> ", async (int222) => {
                                        var txtatsuatsssts = await npm_test2(int222)
                                        console.log(txtatsuatsssts)
                                        process.exit()
                                    })
                                } else if (int31 == 2) {
                                    var txtatsuadasatsssts = await npm_test2("phaticusthiccy")
                                    console.log(txtatsuadasatsssts)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else if (Number(int1) == 7) {
                    console.log("Selected Game System Requirements Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) Game Requirements \n2) GPU Scraper\n\n>>> ", async (int62) => {
                        int62 = Number(int62)
                        if (int62 == 1) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can use any games you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int331) => {
                                int331 = Number(int331)
                                if (int331 == 1) {
                                    rl.question("Enter The Game You Want to Seacrh >>> ", async (int28) => {
                                        var ttxtattstzatts = await game_test1(int28)
                                        console.log(ttxtattstzatts)
                                        process.exit()
                                    })
                                } else if (int331 == 2) {
                                    var ttxtattstdzatts = await game_test1("Genshin Impact")
                                    console.log(ttxtattstdzatts)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else if (int62 == 2) {
                            rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can select any gpu you want.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int331) => {
                                int331 = Number(int331)
                                if (int331 == 1) {
                                    rl.question("Enter The GPU You Want to Seacrh >>> ", async (int28) => {
                                        var ttxtattsdasstzatts = await game_test2(int28)
                                        console.log(ttxtattsdasstzatts)
                                        process.exit()
                                    })
                                } else if (int331 == 2) {
                                    var ttxtattstdzaaaawwtts = await game_test2("Titan X")
                                    console.log(ttxtattstdzaaaawwtts)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else if (Number(int1) == 8) {
                    console.log("Selected Sentence Similarity Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can type your sentences.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int331) => {
                        int331 = Number(int331)
                        if (int331 == 1) {
                            var q1;
                            var q2;
                            rl.question("Enter Your First Sentence >>> ", async (int826) => {
                                q1 = int826
                                rl.question("Enter Your Second Sentence >>> ", async (int261) => {
                                    q2 = int261
                                    var smmsxyysmmmxsmm = similarity(q1, q2)
                                    console.log(smmsxyysmmmxsmm)
                                    process.exit()
                                })
                            })
                        } else if (int331 == 2) {
                            var smmsammmxsmm = similarity("I am Thiccy, 17 yo from turkey.", "This is Thiccy, I am 17 :)")
                            console.log(smmsammmxsmm)
                            process.exit()
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(3000)
                            process.exit()
                        }
                    })
                } else if (Number(int1) == 9) {
                    console.log("Selected Artbreeder Scraper Module")
                    await delay(1100)
                    await exec(input[9])
                    await delay(1100)
                    rl.question("\u001b[40;1mPlease, Select The Worktype\u001b[0m" + "\n\n\n" + "1) Manuel // If you choose this, you can chooice your paramaters.\n" + "2) Auto // If you choose this, script will work automaticly.\n\n>>> ", async (int331) => {
                        int331 = Number(int331)
                        if (int331 == 1) {
                            rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) Random Art \n2) Trends \n3) Recent \n4) Search by Words\n\n>>> ", async (int62) => {
                                int62 = Number(int62)
                                if (int62 == 1) {
                                    rl.question("How Many Result You Want to See (1-24) >>> ", async (int938) => {
                                        int938 = Number(int938)
                                        var limit = 0
                                        if (int938 < 1) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        if (int938 > 24) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        limit = int938
                                        rl.question("Which Model You Want to See \n\nall - general - portrait - landscape - building - painting - sci - character - album - furry - anime \n\n>>> ", async (int729) => {
                                            var data = "all - general - portrait - landscape - building - painting - sci - character - album - furry - anime"
                                            if (!data.includes(int729)) {
                                                chalk_animation.neon("Please Type Only Exisiting Models")
                                                await delay(3000)
                                                process.exit()
                                            }
                                            var Art = new artbreeder(limit, int729)
                                            var smmsammmxssassmm = await Art.random()
                                            console.log(smmsammmxssassmm)
                                            process.exit()
                                        })
                                    })
                                } else if (int62 == 2) {
                                    rl.question("How Many Result You Want to See (1-24) >>> ", async (int938) => {
                                        int938 = Number(int938)
                                        var limit = 0
                                        if (int938 < 1) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        if (int938 > 24) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        limit = int938
                                        rl.question("Which Model You Want to See \n\nall - general - portrait - landscape - building - painting - sci - character - album - furry - anime \n\n>>> ", async (int729) => {
                                            var data = "all - general - portrait - landscape - building - painting - sci - character - album - furry - anime"
                                            if (!data.includes(int729)) {
                                                chalk_animation.neon("Please Type Only Exisiting Models")
                                                await delay(3000)
                                                process.exit()
                                            }
                                            var Art = new artbreeder(limit, int729)
                                            var smmsammmxssassmm = await Art.trend()
                                            console.log(smmsammmxssassmm)
                                            process.exit()
                                        })
                                    })
                                } else if (int62 == 3) {
                                    rl.question("How Many Result You Want to See (1-24) >>> ", async (int938) => {
                                        int938 = Number(int938)
                                        var limit = 0
                                        if (int938 < 1) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        if (int938 > 24) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        limit = int938
                                        rl.question("Which Model You Want to See \n\nall - general - portrait - landscape - building - painting - sci - character - album - furry - anime \n\n>>> ", async (int729) => {
                                            var data = "all - general - portrait - landscape - building - painting - sci - character - album - furry - anime"
                                            if (!data.includes(int729)) {
                                                chalk_animation.neon("Please Type Only Exisiting Models")
                                                await delay(3000)
                                                process.exit()
                                            }
                                            var Art = new artbreeder(limit, int729)
                                            var smmsammmxssassmm = await Art.recent()
                                            console.log(smmsammmxssassmm)
                                            process.exit()
                                        })
                                    })
                                } else if (int62 == 4) {
                                    rl.question("How Many Result You Want to See (1-24) >>> ", async (int938) => {
                                        int938 = Number(int938)
                                        var limit = 0
                                        var model = ""
                                        if (int938 < 1) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        if (int938 > 24) {
                                            chalk_animation.neon("This Paramater Must be Between 1 and 24")
                                            await delay(3000)
                                            process.exit()
                                        }
                                        limit = int938
                                        rl.question("Which Model You Want to See \n\nall - general - portrait - landscape - building - painting - sci - character - album - furry - anime \n\n>>> ", async (int729) => {
                                            var data = "all - general - portrait - landscape - building - painting - sci - character - album - furry - anime"
                                            if (!data.includes(int729)) {
                                                chalk_animation.neon("Please Type Only Exisiting Models")
                                                await delay(3000)
                                                process.exit()
                                            }
                                            model = int729
                                            rl.question("Enter The Search Query >>> ", async (int282) => {
                                                var Art = new artbreeder(limit, model)
                                                var smmsammmxssaadssmm = await Art.search(int282)
                                                console.log(smmsammmxssaadssmm)
                                                process.exit()
                                            })
                                        })
                                    })
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()   
                                }
                            })
                        } else if (int331 == 2) {
                            rl.question("\u001b[40;1mPlease, Select The Service\u001b[0m \n\n\n1) Random Art \n2) Trends \n3) Recent \n4) Search by Words\n\n>>> ", async (int62) => {
                                int62 = Number(int62)
                                var art = new artbreeder(3, "all")
                                if (int62 == 1) {
                                    var arts = await art.random()
                                    console.log(arts)
                                    process.exit()
                                } else if (int62 == 2) {
                                    var arts = await art.trend()
                                    console.log(arts)
                                    process.exit()
                                } else if (int62 == 3) {
                                    var arts = await art.recent()
                                    console.log(arts)
                                    process.exit()
                                } else if (int62 == 4) {
                                    var arts = await art.search("anime")
                                    console.log(arts)
                                    process.exit()
                                } else {
                                    chalk_animation.neon(input[8])
                                    await delay(3000)
                                    process.exit()
                                }
                            })
                        } else {
                            chalk_animation.neon(input[8])
                            await delay(2500)
                            process.exit()
                        }
                    })
                } else {
                    chalk_animation.neon(input[8])
                    await delay(2500)
                    process.exit()
                }
            })
        })
    }
    async dependentMethod() {
        await this.start()
    }
}
new startthetest().dependentMethod()