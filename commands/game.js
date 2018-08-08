const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let GAME = args.join(' ');
  let AUTHID = message.author.id;
  let LOREY = '254225860649943051';

  if(AUTHID === LOREY){

    client.user.setActivity(GAME, { type: 'PLAYING' })
    message.channel.send(`Game set to: **${GAME}**`).then(msg => {msg.delete(2500)})

  } else {

    message.channel.send('client Owner Only').then(msg => {
    msg.react('❗')})

  }

}

module.exports.help = {
    name: "game"
}
