const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let pincont = args.join(" ");
  message.delete();
  message.channel.send(pincont).then(m => {
    m.pin();
    m.react("✅");
  })

}

module.exports.help = {
    name: "pin"
}
