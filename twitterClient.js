const {TwitterApi} = require("twitter-api-v2");
const client = new TwitterApi({
    appKey:"Umu9cqFYpH07aFmsKZZgNcHBD",
    appSecret:"ZYMfXMwQyGoFxqJt7LMZi14fmMd4My5Q1tBJy0YOZ09GdXoeGP",
    accessToken:"1519687276917407744-DxGeej0R373zjjxfKBf38PNWET9Jd6",
    accessSecret:"9nZCVHS7dC9E8Eh5lg7Mq0YEVJF3L5E0x8THEtvkOrnTM"
})
const rwClient = client.readWrite
module.exports = rwClient