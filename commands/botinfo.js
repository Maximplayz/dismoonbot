var Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let bottag = bot.user.tag;
    let botid = bot.user.id;
    let botavatar = bot.user.avatarURL;
    let botlib = "node.js (discord.js)";
    let botowner = "Lorey#1405";

    var embed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setThumbnail(botavatar)
    .addField("Name", bottag, true)
    .addField("ID", botid, true)
    .addField("Library", botlib, true)
    .addField("Owner", botowner, true)
    .setColor("#1568ed")
    message.channel.send(embed)

}

module.exports.help = {
    name: "botinfo"
}
