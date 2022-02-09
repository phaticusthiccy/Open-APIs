var axios = require("axios")
var gpu_info = require("./gpu_info")
async function gpu_scraper(q) {
    var url = await gpu_info(q)
    var pay = await axios({
        url: url,
        method: "get",
        headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36", cookie: "_ga=GA1.2.74574211.1644426050; _gid=GA1.2.1868101114.1644426050; _gat=1" }
    })
    var clock_base;
    try {
        clock_base = pay.data.split('<dt>Base Clock</dt>')[1].split('<dd>')[1].split('</dd>')[0]
    } catch {
        clock_base = pay.data.split('<dt>GPU Clock</dt>')[1].split('<dd>')[1].split('</dd>')[0]
    }
    return {
        graphics_card: {
            name: pay.data.split('<h1 class="gpudb-name">')[1].split('</h1>')[0],
            pic: pay.data.split('<a class="gpudb-large-image__item" href="')[1].split('"')[0],
            description: pay.data.split('<div class="desc p">')[1].split('</div>')[0].replace(/<br \/>/gi, "\n"),
            relase_date: pay.data.split('Release Date')[1].split('<dd>')[1].split('</dd>')[0],
            generation: pay.data.split('<dt>Generation</dt>')[1].split('<a href="')[1].split('">')[1].split('</a>')[0],
            predecessor: function() {
                var t
                try {
                    t= pay.data.split('<dt>Predecessor</dt>')[1].split('<a href="')[1].split('">')[1].split('</a>')[0]
                } catch {
                    t = undefined
                }
                return t
            },
            successor:  function() {
                var t;
                try {
                    t = pay.data.split('<dt>Successor</dt>')[1].split('<a href="')[1].split('">')[1].split('</a>')[0]
                } catch {
                    t = undefined
                }
                return t
            },
            production: pay.data.split('<dt>Production</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            price: function() {
                var t;
                try {
                    t = pay.data.split('<dt>Launch Price</dt>')[1].split('<dd>')[1].split('</dd>')[0]
                } catch {
                    t = undefined
                }
                return t
            },
            bus_interface: pay.data.split('<dt>Bus Interface</dt>')[1].split('<dd>')[1].split('</dd>')[0],
        },
        graphics_processor: {
            gpu_name: pay.data.split('<dt>GPU Name</dt>')[1].split('<a href="')[1].split('">')[1].split('</a>')[0],
            gpu_variant: function() {
                var t;
                try {
                    t = pay.data.split('<dt>GPU Variant</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "")
                } catch {
                    t = undefined
                }
                return t
            },
            architecture: pay.data.split('<dt>Architecture</dt>')[1].split('<a href="')[1].split('">')[1].split('</a>')[0],
            foundry: pay.data.split('<dt>Foundry</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            process_size: pay.data.split('<dt>Process Size</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            transistors: pay.data.split('<dt>Transistors</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            die_size: pay.data.split('<dt>Die Size</dt>')[1].split('<dd>')[1].split('</dd>')[0]
        },
        clock_speeds: {
            base_clock: clock_base,
            boost_clock: function() {
                var t;
                try {
                    t =  pay.data.split('<dt>Boost Clock</dt>')[1].split('<dd>')[1].split('</dd>')[0]
                } catch {
                    t = undefined
                }
                return t
            },
            memory_clock: pay.data.split('<dt>Memory Clock</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n")
        },
        memory: {
            memory_size: pay.data.split('<dt>Memory Size</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0],
            memory_type: pay.data.split('<dt>Memory Type</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            memory_bus: pay.data.split('<dt>Memory Bus</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0],
            bandwidth: pay.data.split('<dt>Bandwidth</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0]
        },
        render_config: {
            shading_units: pay.data.split('<dt>Shading Units</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0],
            tmus: pay.data.split('<dt>TMUs</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0],
            rops: pay.data.split('<dt>ROPs</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0],
            sm_count: function() {
                var t;
                try {
                    t =  pay.data.split('<dt>SM Count</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n")
                } catch {
                    t = undefined
                }
                return t
            },
            l1_cache: function() {
                var t;
                try {
                    t =  pay.data.split('<dt>L1 Cache</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0]
                } catch {
                    t = undefined
                }
                return t
            },
            l2_cache: pay.data.split('<dt>L2 Cache</dt>')[1].split('\t\t\t\t\t')[1].split('\n')[0]
        },
        performance: {
            pixel_rate: pay.data.split('<dt>Pixel Rate</dt>')[1].split('<dd >')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            texture_rate: pay.data.split('<dt>Texture Rate</dt>')[1].split('<dd >')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
        },
        graphics_features: {
            directx: pay.data.split('<h2>Graphics Features</h2>')[1].split('<dd>')[1].split(' <span')[0],
            opengl: pay.data.split('<dt>OpenGL</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            opencl: pay.data.split('<dt>OpenCL</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            vulkan: pay.data.split('<dt>Vulkan</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            shader_model: pay.data.split('<dt>Shader Model</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n")
        },
        board_desing: {
            slot_width: pay.data.split('<dt>Slot Width</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            length: pay.data.split('<dt>Length</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            width: function() {
                var t;
                try {
                    t =  pay.data.split('<dt>Width</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n")
                } catch {
                    t = undefined
                }
                return t
            },
            tdp: pay.data.split('<dt>TDP</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            suggested_psu: pay.data.split('<dt>Suggested PSU</dt>')[1].split('<dd>')[1].split('</dd>')[0],
            outputs: pay.data.split('<dt>Outputs</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace(/<br \/>/gi, "\n"),
            power_connectors: pay.data.split('<dt>Power Connectors</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n"),
            board_number: pay.data.split('<dt>Board Number</dt>')[1].split('<dd>')[1].split('</dd>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n")
        },
        recommended_resolutions: {
            good: pay.data.split('<ul class="gpudb-recommended-resolutions__list">')[1].split('>')[1].split('</li>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n").split("<")[0],
            playable: pay.data.split('<ul class="gpudb-recommended-resolutions__list">')[1].split('>')[3].split('</li>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n").split("<")[0],
            unplayable: pay.data.split('<ul class="gpudb-recommended-resolutions__list">')[1].split('>')[5].split('</li>')[0].replace(/\n/gi, "").replace(/\t/g, "").replace("<br />", "\n").split("<")[0],
        }
    }
}
module.exports = gpu_scraper;