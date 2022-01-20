function editInsta_Load(data, value) {
    if (typeof data !== "object") {
        throw new Error("Data Must Be Type of An Objecy!")
    }
    var payload = data.value;
    delete data.value;
    return payload;
}
module.exports = editInsta_Load;