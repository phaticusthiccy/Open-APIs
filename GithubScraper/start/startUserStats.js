var editBasicMetaGithub = require("../data/editBasicMeta");
Error.prototype.typetoString = function() {
    'use strict';
    var obj = Object(this);
    if (obj !== this) {
      throw new TypeError();
    }
    var name = this.name;
    name = (name === undefined) ? 'Error' : String(name);
    var msg = this.message;
    msg = (msg === undefined) ? '' : String(msg);
    if (name === '') {
      return msg;
    }
    if (msg === '') {
      return name;
    }
    return name + ': ' + msg;
};
async function github_user(username) {
    var payload;
    try {
        payload = await editBasicMetaGithub(username)
    } catch (error) {
        if (error.typetoString() == "Error: Request failed with status code 502") {
            throw new Error ("Initial Server Error Returned 502. Servers are Busy. Try Again Later.")
        } else {
            throw new Error ("Cannot Found Any User")
        }
    }
    return payload;
}
module.exports = github_user;