const Discord = require("discord.js");

exports.run = (client, message, args) => {

  var member = message.guild.member(message.author)
  var director = message.guild.roles.find("name", "Director").id
  var cmd = message.guild.roles.find("name", "Commander").id
  var vcmd = message.guild.roles.find("name", "Vice-Commander").id
  var fcmd = message.guild.roles.find("name", "Field Commander").id
  var fvcmd = message.guild.roles.find("name", "Field Vice-Commander").id
  var firstov = message.guild.roles.find("name", "1st Oversight").id
  var secondov = message.guild.roles.find("name", "2nd Oversight").id

  var embed = new Discord.RichEmbed();

  embed.setDescription("\n"+args.join(' '))
  embed.setColor("#0f6bff")
  embed.setFooter(`Announcement by: ${member.nickname}`, member.avatarURL)
  embed.setTimestamp()

  if(member.roles.has(director)) {
      embed.setTitle("Announcement by Director")
      message.channel.send(embed)
      message.delete();
  } else if(member.roles.has(cmd) || member.roles.has(vcmd)) {
      embed.setTitle("Announcement by Command")
      message.channel.send(embed)
      message.delete();
  } else if(member.roles.has(fcmd) || member.roles.has(fvcmd)) {
      embed.setTitle("Announcement by Field Command")
      message.channel.send(embed)
      message.delete();
  } else if(member.roles.has(firstov) || member.roles.has(secondov)) {
      embed.setTitle("Announcement by Oversight")
      message.channel.send(embed)
      message.delete();
  } else {
    message.channel.send(":x: No permissions.")
  }

}
