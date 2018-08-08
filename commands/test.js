const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let mem = message.mentions.members.first();
  console.log(mem)
  console.log(mem.roles)

}

module.exports.help = {
    name: "test"
}
