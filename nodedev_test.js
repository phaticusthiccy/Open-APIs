require('util').inspect.defaultOptions.depth = null
const os = require('os');
const { exec, spawn } = require("child_process")
const fs = require('fs');
class dev {
    constructor (name) {
        this.name = name
    }
    async start() {
        return require("./index.js")
    }
    async test() {
        return await this.start()
    }
    async getName(funcname) {
        this.funcname = funcname
        return funcname
    }
    _clear() {
        return process.exit()
    }
}
const AsyncFunction = Object.getPrototypeOf(
    async function(){
    }
).constructor;
new dev().test().then(async (table) => {
    console.log(table)
})
new dev().start().then(func => {
    for (const [key, value] of Object.entries(func)) {
        new dev().getName('require("./index.js").').then(async (names) => {
            var trys = await exec(`${names}` + `${key}`)
            var newline = "=".repeat(50) + "\n".repeat(5)
            console.log(trys)
            fs.writeFileSync("./dev_test/output_dev_test.json", JSON.stringify(trys, null, 20))
            fs.writeFileSync("./dev_test/output_dev_test_cpus.json", /* { JSON.parse() } */ JSON.stringify(os.cpus(), null, 21));
            console.log("Test Finished. Exported with json.")
            new dev()._clear()
        })
    }
})

/**
 * custom class with async functions
 * the data is only avaliable for first `AsyncFunction: ()` of `require("index.js")`
 * developers must edit this. 
 * for more information, run `require("index.js")`
 */