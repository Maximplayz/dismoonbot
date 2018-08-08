var Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let clienttag = client.user.tag;
    let clientid = client.user.id;
    let clientavatar = client.user.avatarURL;
    let clientlib = "node.js (discord.js)";
    let clientowner = "Lorey#1405";

    var embed = new Discord.RichEmbed()
    .setTitle("client Information")
    .setThumbnail(clientavatar)
    .addField("Name", clienttag, true)
    .addField("ID", clientid, true)
    .addField("Library", clientlib, true)
    .addField("Owner", clientowner, true)
    .setColor("#1568ed")
    message.channel.send(embed)

}

module.exports.help = {
    name: "clientinfo"
}
