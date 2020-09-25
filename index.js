const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "s!";

bot.on('ready' , () =>{
    console.log('This bot is online!');
    bot.user.setActivity('on 𝔻i𝕤𝕓oa𝕣𝕕_ ✅ s!24 Hours'), { type: 'STREAMING'}.catch(console.error);
})

bot.login(process.env.token);


bot.on('message', message => {
    if(message.author.bot) {
        return;
    }
    var msg = message.content;
    var A = message.author.username;
    var D = message.author.discriminator;
    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(A)
    .setDescription(msg)
    .setFooter(A + "#" + D)
    .setTimestamp()
    if(message.channel.type == "dm"){
        bot.users.fetch("4593111431675641858").then(user => user.send(embed).catch(err => console.log(err)))
    }
});
bot.on("message", (message)=> {
    const arg = message.content.slice(prefix.length).split(" ");
    const args = message.content.slice(prefix.length + arg[0].length).split(" ").join(" ");
    if(message.author.bot) {
        return;
    }
    if(!message.content.startsWith(prefix)){
        return;
    }
    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Support 𝔻i𝕤𝕓oa𝕣𝕕_")
    .setDescription(args)
    .setTimestamp()
    if(message.channel.type == "dm") {
        bot.users.fetch(arg[0]).then(user => user.send(embed).catch(err => console.log(err)))  
    }
});