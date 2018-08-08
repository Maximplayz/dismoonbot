const Discord = require('discord.js');

exports.run = (client) => {

  console.log(`\nBot is ready at ${client.readyAt}!\n`)
  client.user.setActivity('im a bot lol')
  client.user.setStatus('dnd')

}
