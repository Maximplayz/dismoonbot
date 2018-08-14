const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');

exports.run = (client, message, args) => {

  var author = message.guild.members.get(message.author.id);
  if(!author.hasPermissions('MUTE_MEMBERS')) return message.channel.send('no permissions');

  var member = message.mentions.members.first();
  if(!member) return message.channel.send('mention a user to mute >:(');

  var muterole = message.guild.roles.find('name', 'Muted');
  if(!muterole) message.channel.send('You need a role with the name `Muted`')

  var time = args[1];
  if(!time) message.channel.send('tell me a time dude.')

  if(!member.nickname){
    var memnick = member.user.name;
  } else {
    var memnick = member.nickname;
  }

  member.addRole(muterole.id)
  message.channel.send(`**${memnick}** has been muted for **${ms(ms(time), long: true)}** by **${author.nickname}**.`)

  setTimeout(function() {
    member.removeRole(muterole.id)
    message.channel.send(`**${memnick}** has been automatically unmuted after **${ms(ms(time), long: true)}**.`)
  }, ms(time));

}
