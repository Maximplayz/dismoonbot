const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var ownerid = "476418894551056382";
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
