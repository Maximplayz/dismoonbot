const Discord = require("discord.js");

exports.run = (client, message, args) => {

  var member = message.guild.member(message.author);
  var totrain1 = message.mentions.members.first();
  var totrain = message.guild.member(totrain1);

  var director = message.guild.roles.find("name", "Director").id
  var cmd = message.guild.roles.find("name", "Commander").id
  var vcmd = message.guild.roles.find("name", "Vice-Commander").id
  var fcmd = message.guild.roles.find("name", "Field Commander").id
  var fvcmd = message.guild.roles.find("name", "Field Vice-Commander").id
  var firstov = message.guild.roles.find("name", "1st Oversight").id
  var secondov = message.guild.roles.find("name", "2nd Oversight").id
  var htrain = message.guild.roles.find("name", "Head Trainer").id
  var train = message.guild.roles.find("name", "Trainer").id
  var trainee = message.guild.roles.find("name", "Trainee").id

  if(!totrain1) return message.channel.send(":x: Please Mention a member to train");

  if(!totrain.roles.has(trainee)) {
    if(member.roles.has(director)) {
        totrain.roles.add(trainee)
        message.channel.send(`:white_check_mark: ${totrain.username} has been trained by ${member.nickname}`)
        message.delete();
    } else if(member.roles.has(cmd) || member.roles.has(vcmd)) {
      totrain.roles.add(trainee)
      message.channel.send(`:white_check_mark: ${totrain.username} has been trained by ${member.nickname}`)
      message.delete();
    } else if(member.roles.has(fcmd) || member.roles.has(fvcmd)) {
      totrain.roles.add(trainee)
      message.channel.send(`:white_check_mark: ${totrain.username} has been trained by ${member.nickname}`)
      message.delete();
    } else if(member.roles.has(firstov) || member.roles.has(secondov)) {
      totrain.roles.add(trainee)
      message.channel.send(`:white_check_mark: ${totrain.username} has been trained by ${member.nickname}`)
      message.delete();
    } else if(member.roles.has(htrain) || member.roles.has(train)) {
      totrain.roles.add(trainee)
      message.channel.send(`:white_check_mark: ${totrain.username} has been trained by ${member.nickname}`)
      message.delete();
    } else {
      message.channel.send(":x: No permissions")
    }
  } else {
    message.channel.send(":x: That member already is trained!")
  }

}
