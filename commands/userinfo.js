const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.mentions.members.first()) return message.channel.send(':x: Please Mention a User.');

    let InfoUser = message.mentions.members.first();
    let UID = InfoUser.user.id;
    let UAVURL = InfoUser.user.avatarURL;
    let UTAG = InfoUser.user.tag;
    let USTAT = InfoUser.user.presence.status;
    let LASTMSG = InfoUser.user.lastMessage;
    let LASTMSGID = InfoUser.user.lastMessageID;
    let UBOT = InfoUser.user.bot;
    let KICKABLE = InfoUser.kickable;
    let BANNABLE = InfoUser.bannable;
    let HASADMIN = InfoUser.hasPermission('ADMINISTRATOR');
    let UHROLE = InfoUser.highestRole.name;
    let HCOLOR = InfoUser.highestRole.color;
    let UHROLEID = InfoUser.highestRole.id;
    let CREAT = InfoUser.user.createdAt;


    var em = new Discord.RichEmbed()
    .setTitle('Userinfo')
    .setColor(HCOLOR)
    .addField('User', UTAG, true)
    .addField('User ID', UID, true)
    .addField('Last Message', `${LASTMSG}\n(${LASTMSGID})`, true)
    .addField('Highest Role', `${UHROLE}\n(${UHROLEID})`, true)
    .addField('Is Admin?', HASADMIN, true)
    .addField('User Status', USTAT, true)
    .addField('Kickable / Bannable by Bot?', `1: ${KICKABLE}\n2: ${BANNABLE}`, true)
    .addField('Is Bot?', UBOT, true)
    .addField('Created At', CREAT, true)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
    .setThumbnail(UAVURL)
    message.channel.send(em);

    console.log(`The userinfo command has been used by ${message.author.tag} (${message.author.id})`)


}

module.exports.help = {
    name: "userinfo"
}
