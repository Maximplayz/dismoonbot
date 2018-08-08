const Discord = require('discord.js');

exports.run = (client) => {

  console.log(`\nBot is ready!\n\nOn ${client.guilds.count} server/s`)
  client.user.setActivity('im a bot lol')
  client.user.setStatus('dnd')

}
