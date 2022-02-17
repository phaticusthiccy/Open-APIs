# Game System Requirements & GPU Scraper

An unlimited game requirements and gpu scraper.

## 🧾 Usage
```js
// ES 5

const Game = require("@phaticusthiccy/open-apis");

// ========== GAME SYSTEM REQUIREMENTS ========== 
async function start() {
    var data = await Game.system_requirements("game name")
    console.log(data)
}

// Outside of Async Function
Game.system_requirements("game name").then(async (data) => {
    console.log(data)
})



// ========== GPU SCRAPER ========== 
async function start() {
    var data = await Game.gpu_scraper("gpu name")
    console.log(data)
}

// Outside of Async Function
Game.gpu_scraper.then(async (data) => {
    console.log(data)
})
```

##

## 📂 Response

#### GAME SYSTEM REQUIREMENTS
```javascript
{
  game: {
    name: 'Genshin Impact',
    release_date: '2020. September 28.',
    genre: 'Action',
    developer: 'miHoYo',
    publisher: 'miHoYo',
    hardware_requirements: 'Average',
    avatar: 'https://gepig.com/game_cover_460w/6740.jpg',
    banner: 'https://gepig.com/game_cover_bg_1190w/6740.jpg'
  },
  system_requirements: {
    minimum: {
      cpu: 'Intel Core i5 or equivalent',
      gpu: 'NVIDIA® GeForce® GT 1030 and higher',
      ram: '8GB RAM',
      hdd: 'Please reserve 30 GB of space',
      directx: 'Version 11',
      os: 'Windows 7 SP1 64-bit, Windows 8.1 64-bit or Windows 10 64-bit'
    },
    recommended: {
      cpu: 'Intel Core i7 equivalent or higher',
      gpu: 'NVIDIA GeForce GTX 1060 6 GB and higher',
      ram: '16GB RAM',
      hdd: 'Please reserve 30 GB of space',
      directx: 'Version 11',
      os: 'Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit'
    }
  },
  reviews: {
    popularity: 'Very positive [87%]',
    graphics: '93%',
    design: '94%',
    gameplay: '89%',
    sound: '89%',
    music: '87%',
    innovations: '84%',
    overall: '87%'
  }
}
```

#### GPU SCRAPER
```javascript
{
  graphics_card: {
    name: 'NVIDIA GeForce GTX TITAN',
    pic: 'https://tpucdn.com/gpu-specs/images/c/1996-front.jpg',
    description: 'The GeForce GTX TITAN was an enthusiast-class graphics card by NVIDIA, launched on February 19th, 2013. Built on the 28 nm process, and based on the GK110 graphics processor, in its GK110-400-A1 variant, the card supports DirectX 12. Even though it supports DirectX 12, the feature level is only 11_0, which can be problematic with newer DirectX 12 titles. The GK110 graphics processor is a large chip with a die area of 561 mm² and 7,080 million transistors. It features 2688 shading units, 224 texture mapping units,  and 48 ROPs. NVIDIA has paired 6 GB GDDR5 memory with the GeForce GTX TITAN, which are connected using a 384-bit memory interface. The GPU is operating at a frequency of 836 MHz, which can be boosted up to 876 MHz, memory is running at 1502 MHz (6 Gbps effective). \n' +
      " Being a dual-slot card, the NVIDIA GeForce GTX TITAN draws power from 1x 6-pin + 1x 8-pin power connector, with power draw rated at 250 W maximum. Display outputs include: 2x DVI, 1x HDMI, 1x DisplayPort. GeForce GTX TITAN is connected to the rest of the system using a PCI-Express 3.0 x16 interface. The card's dimensions are 267 mm x 111 mm x 38 mm, and it features a dual-slot cooling solution.  Its price at launch was 999 US Dollars.",
    relase_date: 'Feb 19th, 2013',
    generation: 'GeForce 700',
    predecessor: [Function: predecessor],
    successor: [Function: successor],
    production: 'End-of-life',
    price: [Function: price],
    bus_interface: 'PCIe 3.0 x16'
  },
  graphics_processor: {
    gpu_name: 'GK110',
    gpu_variant: [Function: gpu_variant],
    architecture: 'Kepler',
    foundry: 'TSMC',
    process_size: '28 nm',
    transistors: '7,080 million',
    die_size: '561 mm²'
  },
  clock_speeds: {
    base_clock: '836 MHz',
    boost_clock: [Function: boost_clock],
    memory_clock: '1502 MHz\n6 Gbps effective'
  },
  memory: {
    memory_size: '6 GB',
    memory_type: 'GDDR5',
    memory_bus: '384 bit',
    bandwidth: '288.4 GB/s'
  },
  render_config: {
    shading_units: '2688',
    tmus: '224',
    rops: '48',
    sm_count: [Function: sm_count],
    l1_cache: [Function: l1_cache],
    l2_cache: '1536 KB'
  },
  performance: { 
      pixel_rate: '49.06 GPixel/s',
      texture_rate: '196.2 GTexel/s' 
  },
  graphics_features: {
    directx: '12',
    opengl: '4.6',
    opencl: '3.0',
    vulkan: '1.1',
    shader_model: '5.1'
  },
  board_desing: {
    slot_width: 'Dual-slot',
    length: '267 mm\n10.5 inches',
    width: [Function: width],
    tdp: '250 W',
    suggested_psu: '600 W',
    outputs: '2x DVI\n1x HDMI\n1x DisplayPort',
    power_connectors: '1x 6-pin + 1x 8-pin',
    board_number: 'P2083 SKU 10'
  },
  recommended_resolutions: { 
      good: '1920x1080', 
      playable: '2560x1440', 
      unplayable: '3840x2160' 
  }
}
```

## IMPORTANT NOTES

Some keys may retrun as `undefined`. That's means, there is no result for that.

Also some keys are defined as a function. You can fetch these using `response.this()`