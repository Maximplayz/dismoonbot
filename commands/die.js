var Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  if(message.author.id === '254225860649943051'){

    message.channel.send('Terminating Connection to Discord.')
    bot.destroy();

  } else {

    message.channel.send('Bot Owner Only').then(msg => {
    msg.react('❗')})

  }

}

module.exports.help = {
    name: "die"
}
