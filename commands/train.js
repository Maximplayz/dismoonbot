const Discord = require("discord.js");

exports.run = (client, message, args) => {

  var mem = message.mentions.authmems.first();
  var authmem = message.guild.authmems.get(message.author.id);

  var director = message.guild.roles.find("name", "Director").id
  var fos = message.guild.roles.find("name", "FOs").id
  var hcos = message.guild.roles.find("name", "HCOs").id
  var cos = message.guild.roles.find("name", "COs").id
  var htrain = message.guild.roles.find("name", "Head Trainer").id
  var train = message.guild.roles.find("name", "Trainer").id
  var trainee = message.guild.roles.find("name", "Trainee").id
  var enlisted = message.guild.roles.find("name", "ENLISTED").id

if(!mem) return  message.channel.send(':x: Please Mention a member');

if(authmem.roles.has(director) || authmem.roles.has(fos) || authmem.roles.has(hcos) || authmem.roles.has(cos) || authmem.roles.has(htrain) || authmem.roles.has(train)) {
    if(!authmem.roles.has(trainee)) {
      let enlisted2 = message.guild.roles.find("name", "ENLISTED");
      let trainee2 = message.guild.roles.find("name", "Trainee");
      let newname = "Trainee "+mem.username;
      mem.roles.add(enlisted2)
      mem.roles.add(trainee2)
      message.channel.send(`:white_check_mark: **${mem.nickname}** has been trained by **${authmem.nickname}**`)
      message.delete()
    } else {
      message.channel.send(":x: That member already is trained")
    }
} else {
  message.channel.send(":x: No permissions to train");
}

}
