const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var authmem = message.guild.members.get(message.author.id);
    var vtext = args.join(" ")

    if(!vtext) return message.channel.send('You cant vote on nothing, what the fuck?')

    var admrole = message.guild.roles.find("name", "Discord Admin").id;

    if(authmem.roles.has(admrole)) {
      clr = "#182179";
    } else {
      clr = authmem.highestRole.color;
    }

    var embed = new Discord.RichEmbed()
    .setTitle("New Vote:")
    .setColor(clr)
    .setDescription(vtext)
    .setFooter(`Vote by ${authormem.nickname}`, message.author.avatarURL)
    message.channel.send(embed).then(m => {
      m.react('✅')
      m.react('❎')
    })

}
