var axios = require("axios");
async function getGpu(Query) {
    var payload;
    var len = Query.split("")
    if (len.length < 2) {
        throw new Error ("Searched GPU Query Must be More Than 2 Words.")
    } 
    var data = await axios({
        url: "https://gamesystemrequirements.com/gpu_search.php?q=" + Query,
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
    * {
        items: [
            { id: '788', full_name: 'GeForce GTX 1660 SUPER', manu: 'NVIDIA' },
            { id: '774', full_name: 'GeForce GTX 1660 Ti', manu: 'NVIDIA' },
            { id: '787', full_name: 'GeForce GTX 1650 SUPER', manu: 'NVIDIA' },
            { id: '778', full_name: 'GeForce GTX 1650', manu: 'NVIDIA' },
            { id: '711', full_name: 'GeForce GTX 1080 Ti', manu: 'NVIDIA' },
            { id: '669', full_name: 'GeForce GTX 1080', manu: 'NVIDIA' },
            { id: '751', full_name: 'GeForce GTX 1070 Ti', manu: 'NVIDIA' },
            { id: '670', full_name: 'GeForce GTX 1070', manu: 'NVIDIA' },
            { id: '705', full_name: 'GeForce GTX 1060', manu: 'NVIDIA' },
            { id: '769', full_name: 'GeForce GTX 1060 6GB GDDR5X', manu: 'NVIDIA' },
            { id: '710', full_name: 'GeForce GTX 1050 Ti', manu: 'NVIDIA' },
            { id: '708', full_name: 'GeForce GTX 1050', manu: 'NVIDIA' },
            { id: '140', full_name: 'GeForce GTX 980 Ti', manu: 'NVIDIA' },
            { id: '141', full_name: 'GeForce GTX Titan X', manu: 'NVIDIA' }
          ]
        }
     */
}
module.exports = getGpu;