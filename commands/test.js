const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  console.log(message.author.member)
  console.log(message.author.member.roles)

}

module.exports.help = {
    name: "test"
}
