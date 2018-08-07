const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let ownerid = "254225860649943051";
  var newname = args.join(' ')

  if(message.author.id == ownerid){
    bot.user.setUsername(newname)
    message.channel.send('setting new name, please wait')
    message.delete();
  } else {
    message.channel.send('yep, you have no permissions, dont even try')
  }

}

module.exports.help = {
    name: "username"
}
