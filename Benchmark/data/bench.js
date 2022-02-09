var cpu    = require("./cpu")
var gpu    = require("./gpu")
var ram    = require("./ram")
var vram   = require("./vram")
var os     = require("./os")
var game   = require("./game")
var banner = require("./banner")
var review = require("./review")
var fs     = require("fs")
var axios  = require("axios")
async function system_requirements(games, cpus = "7700hq", gpus = "1050", rams = "16", vrams = "4", oss = "win 10") { // "7700hq", "1050", "16", "4", "win 10", 
    var CPU = await cpu(cpus)
    var GPU = await gpu(gpus)
    var RAM = ram(rams)
    var VRAM = vram(vrams)
    var OS = os(oss)
    var GAME = await game(games)
    var BANNER = await banner(GAME)
    var REVIEW = await review(GAME)
    var getData = await axios({
        url: GAME,
        method: "get",
        headers: {
            Host: "gamesystemrequirements.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            Referer: "https://gamesystemrequirements.com/games",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cache-Control": "max-age=0",
            Cookie: "__utmc=16590880; __utmz=16590880.1644274557.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ga=GA1.2.353387953.1644274557; _gid=GA1.2.966339150.1644274558; euconsent-v2=CPUEGLhPUEGLhAKAnAENCBCsAP_AAH_AAA6gIkNf_X__bX9j-_5_f_t0eY1P9_r3v-QzjhfNt-8F3L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2cpyNKJ7LEmnMZO2dYGHtPn9lDuYKY7_7___fz3j-v_t_-39T378X_3_d5_2---vCfV799zLv9____39nP___9v-_9_____BEMAkw1LyALsyxwZNo0qhRAjCsJCoBQAUUAwtEVgA4OCnZWAT6ghYAITUBGBECDEFGDAIABBIAkIiAkALBAIgCIBAACAFCAhAARMAgsALAwCAAUA0LEAKAAQJCDI4KjlMCAqRaKCWysQSgr2NMIAyzwIoFEZFQAI1miBYGQkLBzHAEgJeLJA8xQvkAA.cAAAADAAAAAA; addtl_consent=1~39.4.3.9.6.5.4.13.6.4.15.9.5.2.7.4.1.7.1.3.2.10.3.5.4.21.4.6.9.7.10.2.9.2.18.7.6.14.5.20.6.5.1.3.1.11.29.4.14.4.5.3.10.6.2.9.6.6.4.5.4.4.29.4.5.3.1.6.2.2.17.1.17.10.9.1.8.6.2.8.3.4.142.4.8.35.7.15.1.14.3.1.8.10.25.3.7.25.5.18.9.7.41.2.4.18.21.3.4.2.1.6.6.5.2.14.18.7.3.2.2.8.20.8.8.6.3.10.4.20.2.13.4.6.4.11.1.3.22.16.2.6.8.2.4.11.6.5.33.11.8.1.10.28.12.1.3.21.2.7.6.1.9.30.17.4.9.15.8.7.3.6.6.7.2.4.1.7.12.13.22.13.2.12.2.10.1.4.15.2.4.9.4.5.1.3.7.13.5.15.4.13.4.14.8.2.15.2.5.5.1.2.2.1.2.14.7.4.8.2.9.10.18.12.13.2.18.1.1.3.1.1.9.25.4.1.19.8.4.5.2.1.5.4.8.4.2.2.2.14.2.13.4.2.6.9.6.3.4.3.5.2.3.6.10.11.6.3.16.3.11.3.1.2.3.9.19.11.15.3.10.7.6.4.3.4.6.3.3.3.3.1.1.1.6.11.3.1.1.7.4.6.1.10.5.2.6.3.2.2.4.3.2.2.7.2.13.7.12.2.1.3.3.4.5.4.3.2.2.4.1.3.1.1.1.2.9.1.6.9.1.5.2.1.7.2.8.11.1.3.1.1.2.1.3.2.6.1.5.6.1.5.3.1.3.1.1.2.2.7.7.1.4.1.2.6.1.2.1.1.3.1.1.4.1.1.2.1.8.1.7.4.3.2.1.3.5.3.9.6.1.15.10.28.1.2.2.12.3.4.1.6.3.4.7.1.3.1.1.3.1.5.3.1.3.2.2.1.1.4.2.1.2.1.1.1.2.2.4.2.1.2.2.2.4.1.1.1.2.1.1.1.1.1.1.2.1.1.1.2.2.1.1.2.1.2.1.7.1.2.1.1.1.2.1.1.1.1.2.1.1.3.2.1.1.8.1.1.1.5.2.1.6.5.1.1.1.1.1.2.2.3.1.1.4.1.1.2.2.1.1.4.2.1.1.2.2.1.2.1.2.3.1.1.2.4.1.1.1.5.1.3.6.3.1.5.1.1.3.4.1.2.3.1.4.2.1.2.2.2.1.1.1.1.1.1.11.1.3.1.1.2.2.1.4.2.3.2.1.4.1.1.1.1.4.2.1.1.2.5.1.9.4.1.1.3.1.7.1.4.5.1.7.2.1.1.1.2.1.1.1.4.2.1.12.1.1.3.1.2.2.3.1.2.1.1.1.2.1.1.2.1.1.1.1.2.1.3.1.5.1.2.4.3.8.2.2.9.7.2.2.1.2.1; __qca=P0-1293036036-1644274557455; __utma=16590880.353387953.1644274557.1644324970.1644329969.5; __utmt=1; gi_sc=UOB%2F5q6AI6oICPGHVqWMKNlaKWKzzpeyEeN9S1Ge1uxWsY0eT5wxNHyeFVLJhDrliCpPQdaCEI9PJ7mah%2FTTwC0PRlIIYOjvMwyObhj3DHfn%2BUb5GznEtn0BK45Jrsbp; _gat=1; __utmb=16590880.24.10.1644329969"
        }
    })
    var data = await axios.post(GAME, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            Origin: "https://gamesystemrequirements.com",
            Host: "gamesystemrequirements.com",
            Referer: GAME,
            Cookie: "__utmc=16590880; __utmz=16590880.1644274557.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ga=GA1.2.353387953.1644274557; _gid=GA1.2.966339150.1644274558; euconsent-v2=CPUEGLhPUEGLhAKAnAENCBCsAP_AAH_AAA6gIkNf_X__bX9j-_5_f_t0eY1P9_r3v-QzjhfNt-8F3L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2cpyNKJ7LEmnMZO2dYGHtPn9lDuYKY7_7___fz3j-v_t_-39T378X_3_d5_2---vCfV799zLv9____39nP___9v-_9_____BEMAkw1LyALsyxwZNo0qhRAjCsJCoBQAUUAwtEVgA4OCnZWAT6ghYAITUBGBECDEFGDAIABBIAkIiAkALBAIgCIBAACAFCAhAARMAgsALAwCAAUA0LEAKAAQJCDI4KjlMCAqRaKCWysQSgr2NMIAyzwIoFEZFQAI1miBYGQkLBzHAEgJeLJA8xQvkAA.cAAAADAAAAAA; addtl_consent=1~39.4.3.9.6.5.4.13.6.4.15.9.5.2.7.4.1.7.1.3.2.10.3.5.4.21.4.6.9.7.10.2.9.2.18.7.6.14.5.20.6.5.1.3.1.11.29.4.14.4.5.3.10.6.2.9.6.6.4.5.4.4.29.4.5.3.1.6.2.2.17.1.17.10.9.1.8.6.2.8.3.4.142.4.8.35.7.15.1.14.3.1.8.10.25.3.7.25.5.18.9.7.41.2.4.18.21.3.4.2.1.6.6.5.2.14.18.7.3.2.2.8.20.8.8.6.3.10.4.20.2.13.4.6.4.11.1.3.22.16.2.6.8.2.4.11.6.5.33.11.8.1.10.28.12.1.3.21.2.7.6.1.9.30.17.4.9.15.8.7.3.6.6.7.2.4.1.7.12.13.22.13.2.12.2.10.1.4.15.2.4.9.4.5.1.3.7.13.5.15.4.13.4.14.8.2.15.2.5.5.1.2.2.1.2.14.7.4.8.2.9.10.18.12.13.2.18.1.1.3.1.1.9.25.4.1.19.8.4.5.2.1.5.4.8.4.2.2.2.14.2.13.4.2.6.9.6.3.4.3.5.2.3.6.10.11.6.3.16.3.11.3.1.2.3.9.19.11.15.3.10.7.6.4.3.4.6.3.3.3.3.1.1.1.6.11.3.1.1.7.4.6.1.10.5.2.6.3.2.2.4.3.2.2.7.2.13.7.12.2.1.3.3.4.5.4.3.2.2.4.1.3.1.1.1.2.9.1.6.9.1.5.2.1.7.2.8.11.1.3.1.1.2.1.3.2.6.1.5.6.1.5.3.1.3.1.1.2.2.7.7.1.4.1.2.6.1.2.1.1.3.1.1.4.1.1.2.1.8.1.7.4.3.2.1.3.5.3.9.6.1.15.10.28.1.2.2.12.3.4.1.6.3.4.7.1.3.1.1.3.1.5.3.1.3.2.2.1.1.4.2.1.2.1.1.1.2.2.4.2.1.2.2.2.4.1.1.1.2.1.1.1.1.1.1.2.1.1.1.2.2.1.1.2.1.2.1.7.1.2.1.1.1.2.1.1.1.1.2.1.1.3.2.1.1.8.1.1.1.5.2.1.6.5.1.1.1.1.1.2.2.3.1.1.4.1.1.2.2.1.1.4.2.1.1.2.2.1.2.1.2.3.1.1.2.4.1.1.1.5.1.3.6.3.1.5.1.1.3.4.1.2.3.1.4.2.1.2.2.2.1.1.1.1.1.1.11.1.3.1.1.2.2.1.4.2.3.2.1.4.1.1.1.1.4.2.1.1.2.5.1.9.4.1.1.3.1.7.1.4.5.1.7.2.1.1.1.2.1.1.1.4.2.1.12.1.1.3.1.2.2.3.1.2.1.1.1.2.1.1.2.1.1.1.1.2.1.3.1.5.1.2.4.3.8.2.2.9.7.2.2.1.2.1; __qca=P0-1293036036-1644274557455; __utma=16590880.353387953.1644274557.1644324970.1644329969.5; __utmt=1; gi_sc=UOB%2F5q6AI6oICPGHVqWMKNlaKWKzzpeyEeN9S1Ge1uxWsY0eT5wxNHyeFVLJhDrliCpPQdaCEI9PJ7mah%2FTTwC0PRlIIYOjvMwyObhj3DHfn%2BUb5GznEtn0BK45Jrsbp; _gat=1; __utmb=16590880.24.10.1644329969",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cache-Control": "max-age=0",
            Connection: "keep-alive",
            "Sec-Fetch-Site": "same-origin",
            "Upgrade-Insecure-Requests": "1",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br"
        },
        device_id: "0",
        compare: "Compare",
        cpu: CPU.items[0].id,
        ram: RAM,
        gpu: GPU.items[0].id,
        os: OS,
        cpuoc: "0",
        vram: VRAM,
        gpuoc: "0",
        vcn: "1"
    })
    var expected_fps = {
        game: {
            name: "",
            release_date: "",
            genre: "",
            developer: "",
            publisher: "",
            hardware_requirements: "",
            avatar: "",
            banner: ""
        },
        system_requirements: {
            minimum: {
                cpu: "",
                gpu: "",
                ram: "",
                hdd: "",
                directx: "",
                os: ""
            },
            recommended: {
                cpu: "",
                gpu: "",
                ram: "",
                hdd: "",
                directx: "",
                os: ""
            } 
        },
        reviews: {
            popularity: REVIEW.Reviews,
            graphics: REVIEW.Graphics,
            design: REVIEW.Design,
            gameplay: REVIEW.Gameplay,
            sound: REVIEW.Sound,
            music: REVIEW.Music,
            innovations: REVIEW.Innovations,
            overall: REVIEW.Overall,
        },
        expected_fps: {
            hd: {
                very_low: "",
                low: "",
                medium: "",
                high: "",
                very_high: ""
            },
            hd_plus: {
                very_low: "",
                low: "",
                medium: "",
                high: "",
                very_high: ""
            },
            full_hd: {
                very_low: "",
                low: "",
                medium: "",
                high: "",
                very_high: ""
            },
            quad_hd: {
                very_low: "",
                low: "",
                medium: "",
                high: "",
                very_high: ""
            },
            ultra_hd: {
                very_low: "",
                low: "",
                medium: "",
                high: "",
                very_high: ""
            }
        }
    }
    var avaliable_for_comparison = data.data.includes("Making a comparison is not available for this game.")
    expected_fps.game.name = data.data.split("<div class='game_head_title'>")[1].split('</div>')[0]
    expected_fps.game.release_date = data.data.split("Release date: ")[1].split('<br')[0]
    expected_fps.game.genre = data.data.split('Genre: ')[1].split("'>")[1].split('</a>')[0]
    expected_fps.game.developer = data.data.split('Developer: ')[1].split('<br')[0]
    expected_fps.game.publisher = data.data.split('Publisher: ')[1].split('<br')[0]
    expected_fps.game.hardware_requirements = data.data.split('System Reqs.<span>')[1].split('</span>')[0]
    expected_fps.system_requirements.minimum.cpu = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[1].split("</div>")[0]
    expected_fps.system_requirements.minimum.ram = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[2].split("</div>")[0].replace(/ /gi, "").replace("RAM", " RAM")
    expected_fps.system_requirements.minimum.gpu = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[3].split("</div>")[0]
    expected_fps.system_requirements.minimum.directx = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[4].split("</div>")[0]
    expected_fps.system_requirements.minimum.os = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[5].split("</div>")[0]
    expected_fps.system_requirements.minimum.hdd = data.data.split("<h2>Minimum system requirements:</h2>")[1].split("<div class='gsr_text'>")[6].split("</div>")[0]
    expected_fps.system_requirements.recommended.cpu = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[1].split("</div>")[0]
    expected_fps.system_requirements.recommended.ram = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[2].split("</div>")[0].replace(/ /gi, "").replace("RAM", " RAM")
    expected_fps.system_requirements.recommended.gpu = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[3].split("</div>")[0]
    expected_fps.system_requirements.recommended.directx = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[4].split("</div>")[0]
    expected_fps.system_requirements.recommended.os = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[5].split("</div>")[0]
    expected_fps.system_requirements.recommended.hdd = data.data.split("<h2>Recommended system requirements:</h2>")[1].split("<div class='gsr_text'>")[6].split("</div>")[0].replace(/\r/gi, "").replace(/\n/gi, "")
    expected_fps.game.banner = BANNER.banner
    expected_fps.game.avatar = BANNER.avatar
    if (avaliable_for_comparison) {
        delete expected_fps.expected_fps
    } else {
        delete expected_fps.expected_fps
    }
    return expected_fps;
}
module.exports = system_requirements;
