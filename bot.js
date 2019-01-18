const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535727639219142656")
setInterval(function() {
channel.send(`pro gamer pro gamer pro gamer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);