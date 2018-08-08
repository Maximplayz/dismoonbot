const Discord = require('discord.js');
const mem = require('memory');

module.exports.run = async (client, message, args) => {

    var mb = mem();

    message.channel.send(`My current ping is **${Math.round(client.ping)}ms**\nMy current Memory Usage is: **${mb}mb**`).then(msg => {
      msg.react('📋')
    })

}

module.exports.help = {
    name: "ping"
}
