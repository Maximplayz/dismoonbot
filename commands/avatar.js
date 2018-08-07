const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

var ownerid = "254225860649943051";
if(!message.author.id == ownerid) return message.channel.send('no perms.')
if(!args[0]) return message.channel.send('select a number dude.');
var num = args[0];

if(num == "1"){
  bot.user.setAvatar('../pictures/lambda_symb.jpeg')
  message.delete();
} else {
  message.channel.send('number not recognized.')
}

}

module.exports.help = {
    name: "avatar"
}
