# Sentence Similarity 

This module can find the similarity of two sentences with binary system.

#

## 🧾 Usage

```js
const AI = require("@phaticusthiccy/open-apis");

function start() {
    var data = AI.similarity("first sentence", "second sentence")
    console.log(data)
}

// Outside of Async Function
var data = AI.similarity("first sentence", "second sentence")
console.log(data)
})
```

#

## 📂 Response

```javascript
{
    _request: {
        track: [Function: track], // Encoded Query1 and Query2 Data
        values: {
            __init_one: [Function: __init_one],
            __init_two: [Function: __init_two],
            __init_core_main: [Function: __init_core_main], // Strees Values for Query1
            __init_core_side: [Function: __init_core_side] // Strees Values for Query2 
        },
        binary: { 
            core1: [Function: core1], // Binary Data for Query1 
            core2: [Function: core2] // Binary Data for Query2
        },
        method: '\\\\.\\nul' // devnull
    },
    similarity: 85, // Similarity number,
    similarity_percentage: 'similarity percentage',
    init1: ["first sentence's arry"],
    init2: ["second sentence's arry"],
    inputs: {
        query1: { 
            text: 'first sentence', 
            length: 1 // First sentence length 
        },
        query2: { 
            text: 'second sentence', 
            length: 2 // Second sentence length 
        }
    },
    emphasis: {
        emphasis: 'emphasis word of both sentences',
        filtered: ["values which more than 0.7 similarity percentage"],
        un_filtered: ["all arrays with all similarity percentages"]
    },
    optimum_value_count: 0 // Number of common arrays processed
}
```
#

## SAMPLE RESPONSE

```javascript
{
    _request: {
        track: Uint8Array(60)[
            73, 32, 97, 109, 32, 84, 104, 105, 99, 99, 121,
            44, 32, 49, 55, 32, 121, 111, 32, 102, 114, 111,
            109, 32, 116, 117, 114, 107, 101, 121, 46, 58, 58,
            58, 84, 104, 105, 115, 32, 105, 115, 32, 84, 104,
            105, 99, 99, 121, 44, 32, 73, 32, 97, 109, 32,
            49, 55, 32, 58, 41
        ],
        values: {
            __init_one: {
                map: [
                    ['I'],
                    ['a', 'm'],
                    ['T', 'h', 'i', 'c', 'c', 'y', ','],
                    ['1', '7'],
                    ['y', 'o'],
                    ['f', 'r', 'o', 'm'],
                    ['t', 'u', 'r', 'k', 'e', 'y', '.']
                ]
            },
            __init_two: {
                map: [
                    ['T', 'h', 'i', 's'],
                    ['i', 's'],
                    ['T', 'h', 'i', 'c', 'c', 'y', ','],
                    ['I'],
                    ['a', 'm'],
                    ['1', '7'],
                    [':', ')']
                ]
            },
            __init_core_main: {
                stress: {
                    head: [
                        100, 100, 100, 100,
                        100, 100, 100, 100,
                        100, 100, 100, 100,
                        100, 100, 100, 100
                    ],
                    value: [
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100',
                        ...72 more items
                    ]
                }
            },
            __init_core_side: {
                stress: {
                    head: [
                        100, 100, 100,
                        100, 100, 100,
                        100, 100, 100
                    ],
                    value: [
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100', '100', '100', '100', '100',
                        '100', '100', '100', '100',
                        ...24 more items
                    ]
                }
            }
        }
        binary: {
            core1: '01001001 00100000 01100001 01101101 00100000 01010100 01101000 01101001 01100011 01100011 01111001 00101100 00100000 00110001 00110111 00100000 01111001 01101111 00100000 01100110 01110010 01101111 01101101 00100000 01110100 01110101 01110010 01101011 01100101 01111001 00101110',
            core2: '01010100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01010100 01101000 01101001 01100011 01100011 01111001 00101100 00100000 01001001 00100000 01100001 01101101 00100000 00110001 00110111 00100000 00111010 00101001'
        },
        method: '\\\\.\\nul'
    },
    similarity: 0.9387755102040819,
    similarity_percentage: '%93',
    init1: ['I', 'am', 'Thiccy,', '17', 'yo', 'from', 'turkey.'],
    init2: ['This', 'is', 'Thiccy,', 'I', 'am', '17', ':)'],
    inputs: {
        query1: {
            text: 'I am Thiccy, 17 yo from turkey.',
            length: 31
        },
        query2: {
            text: 'This is Thiccy, I am 17 :)',
            length: 26
        }
    },
    emphasis: {
        emphasis: 'I',
        filtered: [
            [
                1, '17', 1, '17', 1,
                '17', '17', '17', '17', '17',
                '17', 1, '17', '17', '17',
                '17', '17', '17'
            ]
        ],
        un_filtered: [
            0.25, 'I', 'This',
            0.5, 'I', 'is',
            0.14285714285714285, 'I', 'Thiccy,',
            1, 'I', 'I',
            0, 'I', 'am',
            0, 'I', '17',
            0, 'I', ':)',
            0, 'am', 'This',
            0, 'am', 'is',
            0, 'am', 'Thiccy,',
            ...77 more items
        ]
    },
    optimum_value_count: 7
}
```

#

## IMPORTANT NOTES
`stress` objects are shows the how hard is it to detect similarity. non-english characters, emojies, specific syembols etc. The number <b>100</b> means easy to decode text. <b>1000</b> means it's pretty hard to explain text inside ai.

Users who for not developing this, can use `similarity` or `similarity_percentage`. Otherwise, others may sound too complicated. To understand other objects, users must use this tool many times.

Both inputs must be a sentence. If you put a word there, module may not work properly.