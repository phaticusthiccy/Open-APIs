var axios = require("axios");
var fs = require("fs")
function compareTwoStrings(first, second) {
	first = first.replace(/\s+/g, '')
	second = second.replace(/\s+/g, '')
	if (first === second) return 1;
	if (first.length < 2 || second.length < 2) return 0; 
	let firstBigrams = new Map();
	for (let i = 0; i < first.length - 1; i++) {
		const bigram = first.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram) + 1
			: 1;
		firstBigrams.set(bigram, count);
	};
	let intersectionSize = 0;
	for (let i = 0; i < second.length - 1; i++) {
		const bigram = second.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram)
			: 0;
		if (count > 0) {
			firstBigrams.set(bigram, count - 1);
			intersectionSize++;
		}
	}
	return (2.0 * intersectionSize) / (first.length + second.length - 2);
}
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
function findBestMatch(mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	const ratings = [];
	let bestMatchIndex = 0;
	for (let i = 0; i < targetStrings.length; i++) {
		const currentTargetString = targetStrings[i];
		const currentRating = compareTwoStrings(mainString, currentTargetString)
		ratings.push({target: currentTargetString, rating: currentRating})
		if (currentRating > ratings[bestMatchIndex].rating) {
			bestMatchIndex = i
		}
	}
	const bestMatch = ratings[bestMatchIndex]
	return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
}

function areArgsValid(mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find( function (s) { return typeof s !== 'string'})) return false;
	return true;
}
function formBigToSmall(array) {
    check(array);
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[j] > array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
function check(val) {
    if (typeof val !== "object") throw new Error("Must be an object.");
    val.map(value => {
        if (typeof value !== "number") throw new Error("The object value must be a number.");
    })
}
async function getGame(Query) {
    var payload;
    try {
        var data = await axios({
            url: "https://gamesystemrequirements.com/search?q=" + Query.replace(/ /gi, "+") + "&w=2&method=AND",
            method: "get",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest",
                Cookie: "__utma=16590880.353387953.1644274557.1644274557.1644274557.1; __utmc=16590880; __utmz=16590880.1644274557.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _ga=GA1.2.353387953.1644274557; _gid=GA1.2.966339150.1644274558; euconsent-v2=CPUEGLhPUEGLhAKAnAENCBCsAP_AAH_AAA6gIkNf_X__bX9j-_5_f_t0eY1P9_r3v-QzjhfNt-8F3L_W_L0X42E7NF36pq4KuR4Eu3LBIQNlHMHUTUmwaokVrzHsak2cpyNKJ7LEmnMZO2dYGHtPn9lDuYKY7_7___fz3j-v_t_-39T378X_3_d5_2---vCfV799zLv9____39nP___9v-_9_____BEMAkw1LyALsyxwZNo0qhRAjCsJCoBQAUUAwtEVgA4OCnZWAT6ghYAITUBGBECDEFGDAIABBIAkIiAkALBAIgCIBAACAFCAhAARMAgsALAwCAAUA0LEAKAAQJCDI4KjlMCAqRaKCWysQSgr2NMIAyzwIoFEZFQAI1miBYGQkLBzHAEgJeLJA8xQvkAA.cAAAADAAAAAA; addtl_consent=1~39.4.3.9.6.5.4.13.6.4.15.9.5.2.7.4.1.7.1.3.2.10.3.5.4.21.4.6.9.7.10.2.9.2.18.7.6.14.5.20.6.5.1.3.1.11.29.4.14.4.5.3.10.6.2.9.6.6.4.5.4.4.29.4.5.3.1.6.2.2.17.1.17.10.9.1.8.6.2.8.3.4.142.4.8.35.7.15.1.14.3.1.8.10.25.3.7.25.5.18.9.7.41.2.4.18.21.3.4.2.1.6.6.5.2.14.18.7.3.2.2.8.20.8.8.6.3.10.4.20.2.13.4.6.4.11.1.3.22.16.2.6.8.2.4.11.6.5.33.11.8.1.10.28.12.1.3.21.2.7.6.1.9.30.17.4.9.15.8.7.3.6.6.7.2.4.1.7.12.13.22.13.2.12.2.10.1.4.15.2.4.9.4.5.1.3.7.13.5.15.4.13.4.14.8.2.15.2.5.5.1.2.2.1.2.14.7.4.8.2.9.10.18.12.13.2.18.1.1.3.1.1.9.25.4.1.19.8.4.5.2.1.5.4.8.4.2.2.2.14.2.13.4.2.6.9.6.3.4.3.5.2.3.6.10.11.6.3.16.3.11.3.1.2.3.9.19.11.15.3.10.7.6.4.3.4.6.3.3.3.3.1.1.1.6.11.3.1.1.7.4.6.1.10.5.2.6.3.2.2.4.3.2.2.7.2.13.7.12.2.1.3.3.4.5.4.3.2.2.4.1.3.1.1.1.2.9.1.6.9.1.5.2.1.7.2.8.11.1.3.1.1.2.1.3.2.6.1.5.6.1.5.3.1.3.1.1.2.2.7.7.1.4.1.2.6.1.2.1.1.3.1.1.4.1.1.2.1.8.1.7.4.3.2.1.3.5.3.9.6.1.15.10.28.1.2.2.12.3.4.1.6.3.4.7.1.3.1.1.3.1.5.3.1.3.2.2.1.1.4.2.1.2.1.1.1.2.2.4.2.1.2.2.2.4.1.1.1.2.1.1.1.1.1.1.2.1.1.1.2.2.1.1.2.1.2.1.7.1.2.1.1.1.2.1.1.1.1.2.1.1.3.2.1.1.8.1.1.1.5.2.1.6.5.1.1.1.1.1.2.2.3.1.1.4.1.1.2.2.1.1.4.2.1.1.2.2.1.2.1.2.3.1.1.2.4.1.1.1.5.1.3.6.3.1.5.1.1.3.4.1.2.3.1.4.2.1.2.2.2.1.1.1.1.1.1.11.1.3.1.1.2.2.1.4.2.3.2.1.4.1.1.1.1.4.2.1.1.2.5.1.9.4.1.1.3.1.7.1.4.5.1.7.2.1.1.1.2.1.1.1.4.2.1.12.1.1.3.1.2.2.3.1.2.1.1.1.2.1.1.2.1.1.1.1.2.1.3.1.5.1.2.4.3.8.2.2.9.7.2.2.1.2.1; __qca=P0-1293036036-1644274557455; gi_sc=UOB%2F5q6AI6oICPGHVqWMKNlaKWKzzpeyEeN9S1Ge1uxWsY0eT5wxNHyeFVLJhDrliCpPQdaCEI9PJ7mah%2FTTwFD75w%2FMl0eeTrXUjuMatBOZcvEDejtjZCjTkeqOXGfM; __utmb=16590880.26.10.1644274557"
            }
        })
        payload = data.data
    } catch {
        throw new Error ("API Error, Report This Issue.")
    }
    var splitted;
    splitted = payload
    try {
        var matches = splitted.split("<td class='tbl'>")[1].split("<a href='")[1].split("'")[0]
        splitted = payload.split("&nbsp;")[1]
    } catch {
        throw new Error ("Cannot Found Any Game")
    }
    var game;
    var game1;
    var game2;
    var game3;
    game1 = splitted.split("<td class='tbl'>")[1].split("<a href='")[1].split("'")[0]
    try {
        game2 = splitted.split("<td class='tbl'>")[2].split("<a href='")[1].split("'")[0]
    } catch {
        game2 = undefined
    }
    try {
        game3 = splitted.split("<td class='tbl'>")[3].split("<a href='")[1].split("'")[0]
    } catch {
        game3 = undefined

    }
    if (game3 == undefined) {
        if (game2 == undefined) {
            game = game1
        } else {
            var q_test1 = similarity(Query, game1)
            var q_test2 = similarity(Query, game2)
            if (q_test1 > q_test2) {
                game = game1
            } else {
                game = game2
            }
        }
    } else {
        var t_test1 = similarity(Query, game1)
        var t_test2 = similarity(Query, game2)
        var t_test3 = similarity(Query, game3)
        var arrangement = formBigToSmall([t_test1, t_test2, t_test3])
        if (arrangement[0] == t_test1) {
            game = game1
        } else if (arrangement[0] == t_test2) {
            game = game2
        } else if (arrangement[0] == t_test3) {
            game = game3
        }
    }
    return game;
    /**
     * text - string
     */
}
module.exports = getGame;