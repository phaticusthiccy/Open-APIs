const diff = require("./diff")
class SML {
    constructor(q){
        this.connection = null;
        this.q = q
        this.state = null
        this.stamp = null
    }
    method_sml(q) {
        var payload = {}
        if (!q) {
            throw new console.error(false);
        }
        if (typeof q !== "object") {
            throw new Error ("unexcepted data type, waiting 'array'")
        } else {
            var mls = q.length
            var af_q = q
            payload.map = new Array()
            af_q.map((xe) => {
                var t = ""
                t = xe.split("")
                payload.map.push(t)
            })
        }
        return payload;
    }
    method_rsl(q) {
        var payload = {}
        if (!q) {
            throw new console.error(false);
        }
        if (typeof q !== "object") {
            throw new Error ("unexcepted data type, waiting 'array'")
        } else {
            payload.stress = {}
            var strs = 0
            var stsr_cnt = []
            var tbs = ""
            q.join("").split("").map((rl) => {
                if (rl.codePointAt() !== undefined) {
                    stsr_cnt.push(this.start_floors(rl.codePointAt()))
                    tbs += stsr_cnt
                    strs = stsr_cnt + strs
                }
            })
            payload.stress.head = stsr_cnt
            payload.stress.head = payload.stress.head.filter(function( element ) {
                return element !== undefined;
             });
            payload.stress.value = strs.split(",")
            payload.stress.value  = payload.stress.value.filter(function( elementx ) {
                return elementx !== "";
             });
        }
        return payload;
    }
    floors (num) {
        var rms;
        var num_str = num.toString()
        if (num_str.length == 3) {
            if (num_str.startsWith("1")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 200
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 100
                } else {
                    rms = 100
                }
            } else if (num_str.startsWith("2")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 300
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 200
                } else {
                    rms = 200
                }
            } else if (num_str.startsWith("3")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 400
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 300
                } else {
                    rms = 300
                }
            } else if (num_str.startsWith("4")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 500
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 400
                } else {
                    rms = 400
                }
            } else if (num_str.startsWith("5")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 600
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 500
                } else {
                    rms = 500
                }
            } else if (num_str.startsWith("6")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 700
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 600
                } else {
                    rms = 600
                }
            } else if (num_str.startsWith("7")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 800
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 700
                } else {
                    rms =700
                }
            } else if (num_str.startsWith("8")) {
                if (Number(num_str.at(1)) > 5) {
                    rms =900
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 800
                } else {
                    rms = 800
                }
            } else if (num_str.startsWith("9")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 1000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 900
                } else {
                    rms = 900
                }
            }
        } else if (num_str.length == 4) {
            if (num_str.startsWith("1")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 2000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 1000
                } else {
                    rms = 1000
                }
            } else if (num_str.startsWith("2")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 3000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 2000
                } else {
                    rms = 2000
                }
            } else if (num_str.startsWith("3")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 4000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 3000
                } else {
                    rms = 3000
                }
            } else if (num_str.startsWith("4")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 5000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 4000
                } else {
                    rms = 4000
                }
            } else if (num_str.startsWith("5")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 6000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 5000
                } else {
                    rms = 5000
                }
            } else if (num_str.startsWith("6")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 7000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 6000
                } else {
                    rms = 6000
                }
            } else if (num_str.startsWith("7")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 8000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 7000
                } else {
                    rms =7000
                }
            } else if (num_str.startsWith("8")) {
                if (Number(num_str.at(1)) > 5) {
                    rms =9000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 8000
                } else {
                    rms = 8000
                }
            } else if (num_str.startsWith("9")) {
                if (Number(num_str.at(1)) > 5) {
                    rms = 10000
                } else if (Number(num_str.at(1)) < 5) {
                    rms = 9000
                } else {
                    rms = 9000
                }
            }
        }
        return rms
    }
    start_floors(nums) {
        return this.floors(nums)
    }
    /*
    stress (vl) {
        var cnt = 0
        vl.map((vdr) => {
            cnt = cnt + diff(vdr, null)
        })
    }
    stsr_start(vls) {
        return this.stress(vls)
    }
    */
};
module.exports = SML;
