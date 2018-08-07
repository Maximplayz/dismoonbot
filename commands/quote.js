const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let MSGG = message.channel.fetchMessage(args[0]).then(msg => {

let CONTENT = msg.content
let ID = msg.id
let AUTHOR = msg.author.tag
let CREATED = msg.createdAt

  let em = new Discord.RichEmbed()
  .setTitle('Message Quote')
  .setColor('#916fdb')
  .setDescription(`**Message Content:**\n${CONTENT}`)
  .addField('Message Author', AUTHOR, true)
  .addField('Message ID', ID, true)
  .addField('Created At', CREATED, true)
  message.channel.send(em)

  message.delete(1500)


})

}

module.exports.help = {
    name: "quote"
}
