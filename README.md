# Textpro - Photooxy Unlimited API

This api can handle thousands of requests. Also its completely free
and unlimited resources. 

##

## 📦 NPM Installation

`npm i ephoto-360`

##

## 🧾 Examples

### Textpro 1

```js
const thiccysapi = require('ephoto-360'); // Import NPM Package

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
const thiccysapi = require('ephoto-360');

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
const thiccysapi = require('ephoto-360');

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

#### Interest more textpro examples? Check [Here!](https://github.com/phaticusthiccy/EPhoto-360/blob/e473cce16294794d967d10362b9a848b69387ace/textpro-examples/textpro-ex.js)

##

### Photooxy 1

```js
const thiccysapi = require('ephoto-360'); // Import NPM Package

thiccysapi.photooxy("<textpro_html>",
    // "Message One" (One Message)
    // ["Message One"], ["Message Two"] (Two Message)
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```js

### Photooxy 2 ( Real Usage With One Message )

```js
const thiccysapi = require('ephoto-360');

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
    "Phaticusthiccy"
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```js

### Photooxy 3 ( Real Usage With Two Message )

```js
const thiccysapi = require('ephoto-360'); 

thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["Developer"], ["Phaticusthiccy"] 
    ).then(async (data) => { 
      try { 
          console.log(data)
      } catch(err) { 
          console.log(err)
      } 
});
```js

#### Interest more photooxy examples? Check [Here!](https://github.com/phaticusthiccy/EPhoto-360/blob/2ca3c79fb6330f9dea2b1401f63a3e409e197f34/photooxy-examples/photooxy-ex.js)

