const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var memtostrike = message.mentions.members.first();
  var authormem = message.guild.members.get(message.author.id);
  var memmen = args[1];
  var reason = args.slice(1).join(' ');
  var striker = message.author.tag;
  var strike1 = message.guild.roles.find("name", "Strike 1");
  var strike2 = message.guild.roles.find("name", "Strike 2");
  var strike3 = message.guild.roles.find("name", "Strike 3");
  var corole = message.guild.roles.find("name", "COs").id;
  var hcorole = message.guild.roles.find("name", "HCOs").id;
  var forole = message.guild.roles.find("name", "FOs").id;

  if(authormem.roles.has(corole) || authormem.roles.has(hcorole) || authormem.roles.has(forole)){

  var embed = new Discord.RichEmbed()
  .addField("**Unit to Strike**", memtostrike.nickname, true)
  .setDescription("**Reason:** " + reason)
  .setFooter(`Striked by: ${authormem.nickname}`, message.author.avatarURL)
  .setTimestamp()

  if(memtostrike.roles.has(strike3.id)){
    message.channel.send('**Mentioned user already has __3 Strikes__!**')
  } else if(memtostrike.roles.has(strike2.id)){
    embed.addField("**Strike Number**", strike3.name)
    message.channel.send(memmen)
    if(memtostrike.kickable){
      embed.addField("**3 Strikes Reached**", "Due to reaching 3 strikes the unit will be kicked now.")
      memtostrike.kick("3 Strikes Reached")
    }
    embed.setColor('#c70000')
    memtostrike.addRole(strike3)
    message.channel.send(embed)
  } else if(memtostrike.roles.has(strike1.id)){
    embed.addField("**Strike Number**", strike2.name)
    embed.setColor('#ee7300')
    memtostrike.addRole(strike2)
    message.channel.send(memmen)
    message.channel.send(embed)
  } else {
    embed.addField("**Strike Number**", strike1.name)
    embed.setColor('#ffdb00')
    memtostrike.addRole(strike1)
    message.channel.send(memmen)
    message.channel.send(embed)
  }

  message.delete();
} else {
  message.channel.send('No permissions to strike.')
}

}
