var axios = require("axios");
async function getCpu(Query) {
    var payload;
    var len = Query.split("")
    if (len.length < 2) {
        throw new Error ("Searched CPU Query Must be More Than 2 Words.")
    } 
    var data = await axios({
        url: "https://gamesystemrequirements.com/cpu_search.php?q=" + Query,
        method: "get",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
        }
    })
    payload = data.data;
    delete payload.total_count;
    delete payload.incomplete_results
    return payload;
    /**
    *  {
          items: [
            { id: '1026', full_name: 'Atom Z515', manu: 'INTEL' },
            { id: '1028', full_name: 'Atom Z510P', manu: 'INTEL' },
            { id: '1029', full_name: 'Atom Z510', manu: 'INTEL' },
            { id: '1030', full_name: 'Atom Z500', manu: 'INTEL' },
            { id: '1027', full_name: 'Atom Z510PT', manu: 'INTEL' },
            { id: '788', full_name: 'Atom D2700', manu: 'INTEL' },
            { id: '644', full_name: 'Atom D525', manu: 'INTEL' },
            { id: '645', full_name: 'Atom D2500', manu: 'INTEL' },
            { id: '1004', full_name: 'Atom N2800', manu: 'INTEL' },
            { id: '744', full_name: 'Atom D2550', manu: 'INTEL' },
            { id: '999', full_name: 'Atom D510', manu: 'INTEL' },
            { id: '1005', full_name: 'Atom N2600', manu: 'INTEL' },
            { id: '1000', full_name: 'Atom D425', manu: 'INTEL' },
            { id: '1006', full_name: 'Atom N570', manu: 'INTEL' },
            { id: '1009', full_name: 'Atom N470', manu: 'INTEL' }
          ]
    *   }
    */
}
module.exports = getCpu;