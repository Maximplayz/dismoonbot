const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var ownerid = "254225860649943051";
  var avatar = args[1];

  if(message.author.id == ownerid){
    message.delete();
    bot.user.setAvatar(avatar);
  } else {
    message.channel.send('Nice try, no perms tho')
  }

}

module.exports.help = {
    name: "avatar"
}
