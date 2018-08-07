const Discord = require('discord.js');

var prefix = ',,,';

module.exports.run = async (bot, message, args) => {

        message.react('💡')

          let em = new Discord.RichEmbed()
          .setColor("#0000FF")
          .addField(`${prefix}botinfo`, 'Shows info about the Bot')
          .addField(`${prefix}userinfo <user>`, 'Shows info about a User')
          .addField(`${prefix}serverinfo`, 'Shows info about the Server')
          .addField(`${prefix}weather <city>`, 'Shows weather of a City')
          .addField(`${prefix}ping`, 'Shows Ping and Memory Usage')
          .addField(`${prefix}quote <msgID>`, 'Quotes a Message')
          .addField(`${prefix}purge <number>`, 'Lets people with Manage Messages permission clean the chat')
          .addField(`${prefix}spammer <mention <number>`, 'Spams the shit outta someone')
          .addField(`[BOT OWNER] ${prefix}eval`, 'Evaluates Javascript code')
          .addField(`[BOT OWNER] ${prefix}die`, 'Terminates Connection to Discord')
          .addField(`[BOT OWNER] ${prefix}hook`, 'Sends a Hook if Parameters are filled out')
          .addField(`[BOT OWNER] ${prefix}game`, 'Changes Bot Game Globally')
          message.channel.send(em)


}

module.exports.help = {
    name: "help"
}
