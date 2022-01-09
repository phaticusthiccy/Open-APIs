const thiccysapi = require('@phaticusthiccy/open-apis'); // Import NPM Package

thiccysapi.glowtext(
    {
        text: "This",
        text2: "is",
        text3: "a test",
        font_style: "glowtxt",
        font_size: "m",
        font_colour: "0",
        bgcolour: "0",
        glow_halo: "1",
        non_trans: "false",
        glitter_border: "true",
        anim_type: "sweep",
        sumbit_type: "text"
    }
).then(async (data) => {
    console.log(data)
});