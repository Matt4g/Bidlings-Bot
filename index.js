const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const fs = require("fs");

const tweet = async () => {
let bidlingName;
let bidlingNumber; 
try {
        bidlingNumber = (Math.ceil(Math.random() * 1000))
        fs.readFile("bidlings.txt", "utf-8", (err, data) =>{
            if(err){
                console.error(err)
                return
            }
            bidlingName = data.split("\r\n")[bidlingNumber]
            console.log(bidlingName)
        })
        await rwClient.v2.tweet( "Bidling #"+ bidlingNumber +": "+ bidlingName )
        
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob("0 8 * * *", () => {
    tweet()
})

job.start();