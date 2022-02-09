function getRam(value) {
    var payload;
    if (typeof value !== "number") {
        value = Number(value)
    } 
    if (value == NaN) {
        throw new Error ("RAM Value Must Be A Number.")
    }
    if (value > 0 && value < 65) {
        payload = (value * 1024).toString()
    } else {
        throw new Error ("RAM Value Must Be Between 0 and 64 GB")
    }
    return payload
}
module.exports = getRam;