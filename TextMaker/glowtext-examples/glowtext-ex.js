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


thiccysapi.glowtext(
    {
        text: "Phaticusthiccy"
    }
).then(async (data) => {
    console.log(data)
});


thiccysapi.glowtext(
    {
        text: "Thiccy",
        font_style: "flutter",
        font_size: "xl1",
        font_colour: "4"
    }
).then(async (data) => {
    console.log(data)
});


thiccysapi.glowtext(
    {
        text: "Developer",
        text2: "Thiccy",
        font_style: "giftwrap",
        font_size: "l",
        glow_halo: "2",
        glitter_border: "true",
        anim_type: "pulse",
        sumbit_type: "text"
    }
).then(async (data) => {
    console.log(data)
});


thiccysapi.glowtext(
    {
        text: "Phaticusthiccy",
        anim_type: "none" // PNG Image
    }
).then(async (data) => {
    console.log(data)
});