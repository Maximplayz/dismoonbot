const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var authormem = message.guild.members.get(message.author.id);
  var mem = message.mentions.members.first();
  var reason = args.slice(1).join(' ');

  if(authormem.hasPermissions('ADMINISTRATOR')){

    if(!mem) retunr message.channel.send('mention a user')
    if(!mem.kickable) return message.channel.send('im unable to kick that member')
    if(!reason){
      reason = "No reason provided."
    }

    let embed = new Discord.RichEmbed()
    .setTitle('User has been kicked.')
    .setColor('')
    .addField('**Unit to Kick**', mem.nickname)
    .addField('**Reason**', reason)

    mem.send(`**${authormem.nickname}** has kicked you for "**${reason}**."`)

    mem.kick(reason)
    message.channel.send(embed)
    message.delete()

  } else {
    message.channel.send('no permissions')
  }

}
