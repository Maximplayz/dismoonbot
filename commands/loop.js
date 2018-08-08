const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let loopEmbed = new Discord.RichEmbed();
  loopEmbed.setTitle('All client Guilds')
  loopEmbed.setColor()

  client.guilds.forEach( g => {
      let owner = g.owner;
      let ownerid = owner.user.id;
      let ownertag = owner.user.tag;
      let gid = g.id;

      loopEmbed.addField(g.name, `**Guild ID:** ${gid}\n**Owner:** ${ownertag} (${ownerid})`)
  })

  message.channel.send(loopEmbed)

}

module.exports.help = {
    name: "loop"
}
