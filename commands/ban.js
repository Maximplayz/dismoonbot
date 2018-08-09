const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var authormem = message.guild.members.get(message.author.id);
  var mem = message.mentions.members.first();
  var reason = args.slice(1).join(' ');

  if(authormem.hasPermissions('ADMINISTRATOR')){

    if(!mem) return message.channel.send('Bans a User from this Server.\n\nUsage: `,,,ban **<member>** <reason>`')
    if(!mem.bannable) return message.channel.send('im unable to kick that member')
    if(!reason){
      reason = "No reason provided."
    }

    let embed = new Discord.RichEmbed()
    .setTitle('User has been banned.')
    .setColor('')
    .addField('**Unit to Ban**', mem.nickname)
    .addField('**Reason**', reason)

    mem.send(`**${authormem.nickname}** has banned you for "**${reason}**."`)

    mem.ban(7, reason)
    message.channel.send(embed)
    message.delete()

  } else {
    message.channel.send('no permissions')
  }

}