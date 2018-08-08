var Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  if(message.author.id === '254225860649943051'){

    message.channel.send('**Forcefully stopping client process and terminating connection to discord**').then(msg => {
    msg.react('🛠️')})
    client.destroy();

  } else {

    message.channel.send('client Owner Only').then(msg => {
    msg.react('❗')})

  }

}

module.exports.help = {
    name: "die"
}
