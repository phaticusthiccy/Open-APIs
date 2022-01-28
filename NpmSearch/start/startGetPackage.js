var editPackageMeta = require("../data/editPackageMeta");
async function npm_module(query, limit, info) {
    var payload;
    try {
        payload = await editPackageMeta(query, limit, info)
    } catch {
        throw new Error("Package Cannot Found!")
    }
    return payload;
};
module.exports = npm_module;