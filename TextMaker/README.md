# Textpro - TextGlow Unlimited API

##
This api can handle thousands of requests. Also its completely free
and unlimited resources. 

## 🧾 Examples

### Textpro 1

```js
const thiccysapi = require('@phaticusthiccy/open-apis'); // Import NPM Package

thiccysapi.textpro("<textpro_html>",
    // "Message One" (One Message)
    // ["Message One"], ["Message Two"] (Two Message)
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Textpro 2 ( Real Usage With One Message )

```js
const thiccysapi = require('@phaticusthiccy/open-apis');

thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
    "Phaticusthiccy"
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Textpro 3 ( Real Usage With Two Message )

```js
const thiccysapi = require('@phaticusthiccy/open-apis');

thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
    ["Developer"], ["Phaticusthiccy"]
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

#### Interest More Textpro Examples? Check [Here!](https://github.com/phaticusthiccy/Open-APIs/tree/main/TextMaker/textpro-examples)

##

### TextGlow 

```js
const thiccysapi = require('@phaticusthiccy/open-apis'); // Import NPM Package

thiccysapi.glowtext({
    text: "This", // Required!
    text2: "is", // Optional
    text3: "a test", // Optional
    font_style: "glowtxt", // Optional
    font_size: "m", // Optional
    font_colour: "0", // Optional
    bgcolour: "0", // Optional
    glow_halo: "1", // Optional
    non_trans: "false", // Optional
    glitter_border: "true", // Optional
    anim_type: "sweep", // Optional
    sumbit_type: "text" // Optional
}).then(async (data) => {
    console.log(data)
});
```
#### Variables for TextGlow
text: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L5)

text2: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L6)

text3: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L7)

font_style: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L8)

font_size: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L158)

font_colour: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L168)

bgcolour: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L179)

glow_halo: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L180)

non_trans: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L186)

glitter_border: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L187)

anim_type: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L188)

sumbit_type: [Click!](https://github.com/phaticusthiccy/TextMaker-Unlimited/blob/832bae08bf9b993dc5df4301fc9e143f870768b9/TextMaker/lib/textmaker/glowtxt.js#L194)