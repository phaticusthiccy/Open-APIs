function getVram(value) {
    var payload;
    if (typeof value !== "number") {
        value = Number(value)
    } 
    if (value == NaN) {
        throw new Error ("VRAM Value Must Be A Number.")
    }
    if (value > 0 && value < 17) {
        payload = (value * 1024).toString()
    } else {
        payload = value
    }
    return payload
}
module.exports = getVram;