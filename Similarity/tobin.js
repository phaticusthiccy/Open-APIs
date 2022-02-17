function tobinary(str) {
    if (typeof str !== "string") throw new TypeError("Input Value Must be String. Not a " + typeof str)
    return str.split('').map(c => c.charCodeAt().toString(2).padStart(8, '0')).join(' ');
}
module.exports = tobinary;