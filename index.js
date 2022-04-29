const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const fs = require("fs");
let bidlingName;
let bidlingNumber; 
const tweet = async () => {
try {
        fs.readFile("bidlings.txt", "utf-8", (err, data) =>{
           bidlingNumber = (Math.ceil(Math.random() * 666))
            bidlingName = data.split("\r\n")[bidlingNumber]
        })
        await rwClient.v2.tweet( "Bidling #"+ (bidlingNumber + 1) +": "+ bidlingName )
        console.log(bidlingName)
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob(" 0 8 * * *", () => {
    tweet()
})

job.start();