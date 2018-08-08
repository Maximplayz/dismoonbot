const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var memtostrike = message.mentions.members.first();
  var authormem = message.guild.members.get(message.author.id);
  var reason = args.slice(args[1].length + 1);
  var striker = author.user.tag;
  var strike1 = message.guild.roles.find("name", "Strike 1");
  var strike2 = message.guild.roles.find("name", "Strike 2");
  var strike3 = message.guild.roles.find("name", "Strike 3");
  var hcorole = message.guild.roles.find("name", "COs").id;
  var hcorole = message.guild.roles.find("name", "HCOs").id;
  var forole = message.guild.roles.find("name", "FOs").id;

  if(authormem.roles.has(corole) || authormem.roles.has(hcorole) || authormem.roles.has(forole)){

  var embed = new Discord.Richembed()
  .addField("Unit to Strike", "", true)
  .setDescription("**Reason:** " + reason)
  .setFooter(`Striked by: ${authormem.nickname}`, message.author.avatarURL)

  if(memtostrike.roles.has(strike3.id)){
    message.channel.send('Mentioned user already has 3 Strikes!')
  } else if(memtostrike.roles.has(strike2.id)){
    embed.addField("**Strike Number**", strike3.name)
    embed.setColor('#c70000')
    memtostrike.addRole(strike3)
  } else if(memtostrike.roles.has(strike1.id)){
    embed.addField("**Strike Number**", strike2.name)
    embed.setColor('#ee7300')
    memtostrike.addRole(strike2)
  } else {
    embed.addField("**Strike Number**", strike1.name)
    embed.setColor('#ffdb00')
    memtostrike.addRole(strike1)
  }

  message.delete();
} else {
  message.channel.send('No permissions to strike.')
}

}
