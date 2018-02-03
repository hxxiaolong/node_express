/**
 * Created by bxl on 2018/2/3.
 */

const uuid = require("uuid/v4")
const crypto = require("crypto")

let getUuid  = function () {
    return uuid()
}

let getMd5  = function (value) {
    let hash = crypto.creteHash("md5")
    hash.update(value)
    return hash.digest("hex")
}

module.exports = {
    getUuid,
    getMd5
}