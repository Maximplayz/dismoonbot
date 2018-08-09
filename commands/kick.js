const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var authormem = message.guild.members.get(message.author.id);
  var mem = message.mentions.members.first();
  var reason = args.slice(1).join(' ');
  var name;

  if(authormem.hasPermissions('ADMINISTRATOR')){

    if(!mem) return message.channel.send('Kicks a User from this Server.\n\nUsage: `,,,kick **<member>** <reason>`')
    if(!mem.kickable) return message.channel.send('im unable to kick that member')
    if(!mem.nickname){
      name = mem.username;
    } else {
      name = mem.nickname;
    }
    if(!reason){
      reason = "No reason provided."
    }

    let embed = new Discord.RichEmbed()
    .setTitle('User has been kicked.')
    .setColor('#DB7C00')
    .addField('**Unit to Kick**', )
    .addField('**Reason**', reason)
    .setFooter(`Kicked by: ${authormem.nickname}`)
    .setTimestamp()

    mem.send(`**${authormem.nickname}** has kicked you for "**${reason}**."`)

    mem.kick(reason)
    message.channel.send(embed)
    message.delete()

  } else {
    message.channel.send('no permissions')
  }

}
