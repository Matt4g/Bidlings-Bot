const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey:"HUFJicj2k79R9pacdBVwLDTwe",
    appSecret:"HYNvmT87iPl8GAQUYzz7gOIKqe6AfSRmRiHluaQMzZRFdznoBX",
    accessToken:"1519687276917407744-DxGeej0R373zjjxfKBf38PNWET9Jd6",
    accessSecret:"9nZCVHS7dC9E8Eh5lg7Mq0YEVJF3L5E0x8THEtvkOrnTM"
})

const rwClient = client.readWrite

module.exports = rwClient