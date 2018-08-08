const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let NUM = args[0];
  let AUTHOR = message.author.tag
  let GUILDMEM = message.member

  message.delete(0)

  if(GUILDMEM.hasPermission('MANAGE_MESSAGES')) {
    message.delete()
    message.channel.bulkDelete(NUM)
    message.channel.send(`Deleting **${NUM}** messages!`).then(msg => {
      msg.delete(2000)
    })
  } else {
    message.channel.send('**' + AUTHOR + '** You are Missing the ``Manage Messages`` Permission')
  }

}

module.exports.help = {
    name: "purge"
}
