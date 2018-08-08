const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  var memauth = message.guild.members.get(message.author.id);
  let HCOROLE = message.guild.roles.find("name", "HCOs").id;
  let COROLE = message.guild.roles.find("name", "COs").id;
  let FOROLE = message.guild.roles.find("name", "FOs").id;
  var title = "";

  if(memauth.roles.has(COROLE)){
    var title = "Announcement by Commanding Officer"
  } else if(memauth.roles.has(HCOROLE)){
    var title = "Announcement by High Commanding Officer"
  } else if(memauth.roles.has(FOROLE)){
    var title = "Announcement by Field Officer"
  } else {
    var title = "x"
  }

  if(memauth.roles.has(HCOROLE) || memauth.roles.has(COROLE) || memauth.roles.has(FOROLE)){
    let embed = new Discord.RichEmbed()
    .setColor('#30E4FF')
    .setTitle(title)
    .setFooter("", message.author.avatarURL)
    .setDescription(args.join(' '))
    .setTimestamp()
    message.channel.send(embed)
    message.delete()
  } else {
    message.channel.send('no permissions')
  }


}

module.exports.help = {
    name: "announce"
}
