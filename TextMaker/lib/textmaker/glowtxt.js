const axios = require("axios");

/**
 * 
 * @param {String} text - First Line Text ( Required )
 * @param {String} text2 - Seoond Line Text ( Optioanl - Default: "" )
 * @param {String} text3 - Third Line Text ( Optional - Default: "" )
 * @param {String} font_style - Font Style ( Optional - Default: "glowtxt" )
 * == FONT STYLES ==
 * airman
 * alieninvasion
 * all stars
 * arthouse
 * backstreet
 * beachfront
 * bluegecko
 * broadway
 * bronco
 * bubbles
 * cottoncandy
 * cupcake
 * dearest
 * devana
 * discodiva
 * dragonscale
 * electricblue
 * fairygarden
 * fame
 * fictional
 * firstedition
 * flowerpower
 * flutter
 * foolsgold
 * frontier
 * fruityfresh
 * funkyzeit
 * ghostship
 * giftwrap
 * glowstick
 * glowtxt
 * gobstopper
 * greenstone
 * handbag
 * heartbeat
 * insignia
 * invitation
 * ionize
 * jet
 * jukebox
 * jumble
 * lavender
 * letterboard
 * littlehelper
 * lollipop
 * lokum
 * losttales
 * magicdust
 * medieval
 * metropol
 * moderno
 * mrfrosty
 * neonlights
 * ohhai
 * oldenglish
 * orbitron
 * orientexpress
 * paintbrush
 * petalprint
 * pinkcandy
 * pinkglow
 * piratescove
 * platformtwo
 * purple
 * ransom
 * republika
 * sapphireheart
 * rhizome
 * seasonsgreetings
 * signature
 * sketchy
 * sprinklesparkle
 * stardate
 * starlight
 * starshine
 * sterling
 * surprise
 * sweetheart
 * tiptoe
 * typeface
 * valentine
 * volcano
 * warehouse
 * yourstruly
 * zephyr
 * arabic
 * arabic2
 * arabic3
 * arabic4
 * arabic5
 * arabic6
 * armenian
 * armenian2
 * bengali
 * chinese
 * cyrillic
 * cyrillic2
 * cyrillic3
 * cyrillic4
 * ethiopic
 * ethiopic2
 * ethiopic3
 * euro
 * euro2
 * euro3
 * euro4
 * georgian
 * georgian2
 * greek
 * hebrew
 * hebrew2
 * hebrew3
 * hebrew4
 * hebrew5
 * hebrew6
 * hindi
 * hindi2
 * hindi3
 * hindi4
 * hindi5
 * hindi6
 * hindi7
 * hindi8
 * icelandic
 * igbo
 * japanese
 * japanese2
 * japanese3
 * japanese4
 * japanese5
 * japanese6
 * japanese7
 * japanese8
 * japanese9
 * kannada
 * korean
 * malayalam
 * odia
 * punjabi
 * tamil
 * telugu
 * thai
 * thai2
 * thai3
 * thai4
 * vietnamese
 * yoruba
 * 
 * @param {String} font_size - Font Size ( Optional - Default: m)
 * == FONT SIZES ==
 * t - Tiny ( 99x23 )
 * s - Mini ( 152x32 )
 * m - Small ( 220x44 )
 * l - Medium ( 310x59 )
 * x - Large ( 416x77 )
 * xl1 - XL ( 547x99 )
 * xl2 - XXL ( 759x134 )
 * 
 * @param {String} font_colour - Font Color ( Optional - Default: 0 )
 * == FONT COLORS ==
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 
 * @param {String} bgcolour - Background Color ( Optional - Default: #000000 )
 * @param {String} glow_halo - Glow Destiny ( Optional - Default: 1 )
 * == GLOW DESTINY ==
 * 0 - No Glow
 * 1 - Glow
 * 2 - Super Glow
 * 
 * @param {String} non_trans - Transparent Background ( Optional - Default: false )
 * @param {String} glitter_border - Increase Animation Quality ( Optional - Default: true )
 * @param {String} anim_type - Animation Type ( Optional - Default: sweep )
 * == ANIMATION TYPES ==
 * none - No Animation
 * pulse - Pulse Animation
 * sweep - Sweep Animation
 * 
 * @param {String} sumbit_type - Request Type ( Experimental - Default: text)
 * @returns {string}
 */

 

 async function glowtext(options) {
     if (!options.text2 || options.text2 == "") {
         options.text2 = ""
     }
     if (!options.text3 || options.text3 == "") {
         options.text3 = ""
     }
     if (!options.font_style || options.font_style == "") {
         options.font_style = "glowtxt"
     }
     if (!options.font_size || options.font_size == "") {
         options.font_size = "m"
     }
     if (!options.font_colour || options.font_colour == "") {
         options.font_colour = "0"
     }
     if (!options.bgcolour || options.bgcolour == "") {
         options.bgcolour = "0"
     }
     if (!options.glow_halo || options.glow_halo == "") {
         options.glow_halo = "1"
     }
     if (!options.non_trans || options.non_trans == "") {
         options.non_trans = "false"
     }
     if (!options.glitter_border || options.glitter_border == "") {
         options.glitter_border = "true"
     }
     if (!options.anim_type || options.anim_type == "") {
         options.anim_type = "sweep"
     }
     if (!options.submit_type || options.submit_type == "") {
         options.submit_type = "text"
     }
     if (typeof options.glow_halo == "number") {
         options.glow_halo = options.glow_halo.toString()
     }
     if (typeof options.font_colour == "number") {
         options.font_colour = options.font_colour.toString()
     }
     if (typeof options.glitter_border == "boolean") {
         options.glitter_border = options.glitter_border.toString()
     }
     if (typeof options.non_trans == "boolean") {
         options.non_trans = options.non_trans.toString()
     }
     var non_english;
     var regex = /[^\x00-\x7F]+/g
     if (
         regex.test(options.text)  == true ||
         regex.test(options.text2) == true || 
         regex.test(options.text3) == true
    ) {
        non_english = true
    } else {
        non_english = false
    }
    var schema = new Object();
     if (!non_english) {
        var data = await axios.get(
            `https://glowtxt.com/gentext2.php?text=${options.text}&text2=${options.text2}&text3=${options.text3}&font_style=${options.font_style}&font_size=${options.font_size}&font_colour=${options.font_colour}&bgcolour=${options.bgcolour}&glow_halo=${options.glow_halo}&non_trans=${options.non_trans}&glitter_border=${options.glitter_border}&anim_type=${options.anim_type}&sumbit_type=${options.submit_type}`, {
                headers: {
                    accept: "*/*",
                    referer: "https://glowtxt.com/",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
                    cookie: "__utmc=73139909; _ga=GA1.2.760919237.1641592404; _gid=GA1.2.437793348.1641592406; vc=2; __utma=73139909.760919237.1641592404.1641598204.1641651676.3; __utmz=73139909.1641651676.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utmb=73139909.1.10.1641651676; _gat=1"
                }
            }
        )
        try {
            var trydata = data.data.toString().split("<fullfilename>")[1].split("<")[0]
            schema.status = true;
        } catch (err) {
            schema.status = false;
            schema.error = err.toString();
        }
        if (schema.status) {
            schema.image = "https://static1.glowtxt.com/" + data.data.toString().split("<datadir>")[1].split("<")[0] + "/" + data.data.toString().split("<fullfilename>")[1].split("<")[0]
        }
     } else {
         schema.status = false
         schema.error = "Please Use Only English Characters."
     }
     return schema;
}
module.exports = glowtext;