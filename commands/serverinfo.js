const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  let ATAG = message.author.tag;
  let AAV = message.author.avatarURL;

  let G = message.guild;
  let GNAME = G.name;
  let GID = G.id;
  let GCREATE = G.createdAt;
  let GICON = G.IconURL;
  let GMEMS = G.memberCount;
  let GOWN = G.owner.user;
  let OID = GOWN.id;
  let OTAG = GOWN.tag;
  let GLARG = G.large;


  let em = new Discord.RichEmbed()
  .setTitle('Serverinfo')
  .setThumbnail(GICON)
  .setFooter(`Requested by ${ATAG}`, AAV)
  .setColor('#00FF00')
  .addField('Guild Name', GNAME, true)
  .addField('Guild ID', GID, true)
  .addField('Large Guild?', GLARG, true)
  .addField('Member Count', GMEMS, true)
  .addField('Owner Name', OTAG, true)
  .addField('Owner ID', OID, true)
  .addField('Created At', GCREATE, true)
  message.channel.send(em);


}

module.exports.help = {
    name: "serverinfo"
}
