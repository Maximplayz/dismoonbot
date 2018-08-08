const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var name = args.join(' ');
  var authmem = message.guild.members.get(message.author.id);
  var botmem = message.guild.members.get(client.user.id);

  if(authmem.hasPermissions('ADMINISTRATOR')){

    if(!name) return message.channel.send('please tell me a name')
    if(name.length > 32) return message.channel.send('name cant be longer than 32 chars')

    botmem.setNickname(name)
    message.channel.send(`changing nickname to ${name}`)
  } else {
    message.channel.send('no permissions')
  }

}
