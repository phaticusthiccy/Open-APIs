# Textpro - Photooxy - Unlimited API

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

#### Interest More Textpro Examples? Check [Here!]()

##

### Photooxy 1

```js
const thiccysapi = require('@phaticusthiccy/open-apis'); // Import NPM Package

thiccysapi.photooxy("<photooxy_html>",
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

### Photooxy 2 ( Real Usage With One Message )

```js
const thiccysapi = require('@phaticusthiccy/open-apis');

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
    "Phaticusthiccy"
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

### Photooxy 3 ( Real Usage With Two Message )

```js
const thiccysapi = require('@phaticusthiccy/open-apis');

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["Developer"], ["Phaticusthiccy"] 
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```

#### Interest More Photooxy Examples? Check [Here!]()

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
text: [Click!]()

text2: [Click!]()

text3: [Click!]()

font_style: [Click!]()

font_size: [Click!]()

font_colour: [Click!]()

bgcolour: [Click!]()

glow_halo: [Click!]()

non_trans: [Click!]()

glitter_border: [Click!]()

anim_type: [Click!]()

sumbit_type: [Click!]()