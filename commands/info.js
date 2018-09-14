const Discord = require("discord.js");

exports.run = (client, message, args) => {

  var member = message.guild.member(message.author);

  var embed = new Discord.RichEmbed()
  .setTitle("FG DarkRP SWAT Bot")
  .addField("Developer", "Loorey#1405", true)
  .addField("Library", "discord.js", true)
  .addField("Users", client.users.size, true)
  .setFooter("Requested by: "+member.nickname, message.author.avatarURL)
  .setColor("#0f6bff")
  message.channel.send(embed);

}
