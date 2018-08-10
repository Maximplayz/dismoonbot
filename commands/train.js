const Discord = require('discord.js');

exports.run = (client, message, args) => {

  var mem = message.mentions.members.first();
  var authmem = message.guild.members.get(message.author.id);
  var vertrain = message.guild.roles.find("name", "Verified Trainer").id;
  var corole = message.guild.roles.find("name", "COs").id;
  var hcorole = message.guild.roles.find("name", "HCOs").id;
  var forole = message.guild.roles.find("name", "FOs").id;

  var rctROLE = message.guild.roles.find("name", "Recruit").id;
  var enlROLE = message.guild.roles.find("name", "ENLISTED");
  var pvtROLE = message.guild.roles.find("name", "Private");
  var soROLE = message.guild.roles.find("name", "Marine SO Unit");

  var newname = `PVT. ${mem.user.username}`

  if(!args){
    message.channel.send('Finishes training of a user (Adds Roles, Removes RCT)\n\nCommand Usage:\n`,,,train <mention>`')
  }

  if(authmem.roles.has(vertrain) || authmem.roles.has(corole) || authmem.roles.has(hcorole) || authmem.roles.has(forole)){

  if(mem.roles.has(rctROLE)){
    mem.addRoles(enlROLE, pvtROLE, soROLE)
    mem.setNickname(newname)
    message.react('✅')
  } else {
    message.channel.send('Mentioned member does not have the Recruit role / is already trained')
    message.react('❌')
  }
} else {
  message.channel.send('no permissions')
}

}
