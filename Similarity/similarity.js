var tobinary = require("./tobin");
var test_diff = require("./diff");
var editDistance = require("./dist")
var SML = require("./method");
const { devNull } = require("os");
var method_sml = new SML()
var util = require('util')
util.inspect.defaultOptions.depth = null
// util.inspect.defaultOptions.maxArrayLength = null
const encoder = new TextEncoder()
class emphasis {
    constructor(q, s) {
        s = this.s
        q = this.q
    }
    find (q, s) {
        var q_S = q.split(" ")
        var s_S = s.split(" ")
        var un_filtered_arr = []
        var filtered_arr = new Array()
        q_S.map((arx) => {
            s_S.map((arx2) => {
                var tst = test_diff(arx, arx2)
                un_filtered_arr.push(tst)
                un_filtered_arr.push(arx)
                un_filtered_arr.push(arx2)
            })
        })
        filtered_arr.push(un_filtered_arr.filter(word => word > 0.7)) 
        const findindx = (element) => element > 0.7;  
        var ix = un_filtered_arr.findIndex(findindx)
        return {
            emphasis: un_filtered_arr[ix + 1],
            filtered: filtered_arr,
            un_filtered: un_filtered_arr
        }
    }
}
// function strt (a, b, c) { return } //
function similarity(q1, q2) {
    if (typeof q1 !== "string") {
        if (typeof q2 !== "string") {
            if (typeof q1 == "object") throw new TypeError ("Input 1 Must Be String, Not Object")
            if (typeof q1 == "number") throw new TypeError ("Input 1 Must Be String, Not Number")
            if (typeof q1 == "boolean") throw new TypeError ("Input 1 Must Be String, Not Boolean")
            if (typeof q1 == "array") throw new Error ("Input 1 Must Be String, Not Array")
            if (typeof q2 == "object") throw new TypeError ("Input 2 Must Be String, Not Object")
            if (typeof q2 == "number") throw new TypeError ("Input 2 Must Be String, Not Number")
            if (typeof q2 == "boolean") throw new TypeError ("Input 2 Must Be String, Not Boolean")
            if (typeof q2 == "array") throw new Error ("Input 2 Must Be String, Not Array")
        }
    }
    var schema = {
        input1: function () {
            return tobinary(q1);
        }, 
        input2: function () {
            return tobinary(q2);
        }
    }
    var queries = {
        input1: function() {
            return schema.input1().split(" ")
        },
        input2: function() {
            return schema.input2().split(" ")
        }
    }
    var test = {
        input1: function () {
            return q1.split(" ")
        },
        input2: function () {
            return q2.split(" ")
        }
    }
    var playground1 = []
    var playground2 = []
    var num1 = 0
    var biggst = 0 
    var ack1 = []; var ack2 = [];
    test.input1().map(function(elem) {
        ack1.push(elem)
    })
    test.input2().map(function (elemx) {
        ack2.push(elemx)
    })
    //num1 = num1 + test_diff(elem, elemx) / ((test.input1().length - 1) + (test.input2().length - 1) / 2)
    //playground1.push(elem)
    //playground2.push(elemx)
    if (ack1.length > ack2.length) {
        biggst = ack1.length
        ack1 = ack1.slice(0, ack2.length)
    }
    else if (ack2.length > ack1.length) {
        biggst = ack2.length
        ack2 = ack2.slice(0, ack1.length)
    } else {
        biggst = ack1.length
    }
    ack1.map((x) => {
        ack2.map((xe) => {
            num1 = num1 + test_diff(x, xe)
        })
    })
    return {
        _request: {
            track: function() {
                return encoder.encode(q1 + ":::" + q2)
            },
            values: {
                __init_one: function() {
                    return method_sml.method_sml(ack1)
                },
                __init_two: function() {
                    return method_sml.method_sml(ack2)
                },
                __init_core_main: function() {
                    return method_sml.method_rsl(ack1)
                },
                __init_core_side: function() {
                    return method_sml.method_rsl(ack2)
                }
            },
            binary: {
                core1: function() {
                    return schema.input1()
                },
                core2: function() {
                    return schema.input2()
                }
            },
            method: devNull
        },
        similarity: num1 / (biggst),
        similarity_percentage: "%" + Math.floor(((num1 / biggst) * 10) * 10),
        init1: ack1,
        init2: ack2,
        inputs: {
            query1: {
                text: q1,
                length: q1.length,
            },
            query2: {
                text: q2,
                length: q2.length
            }
        },
        emphasis: new emphasis().find(q1, q2),
        optimum_value_count: biggst
    }
}
module.exports = similarity;