function getOs(os) {
    var payload;
    if (os == "Windows 11" || os == "windows 11" || os == "windows11" || os == "win 11") {
        payload = "641110"
    } else if (os == "Windows 10" || os == "windows 10" || os == "windows10" || os == "win 10") {
        payload = "641100"
    } else if (os == "Windows 7" || os == "windows 7" || os == "windows7" || os == "win 7") {
        payload = "641070"
    } else {
        throw new Error ("Operation System Would Be: \n\n\n1) \"Windows 11\" \n2) \"Windows 10\" \n3) \"Windows 7\"")
    }
    return payload
}
module.exports = getOs;