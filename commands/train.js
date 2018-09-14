const Discord = require("discord.js");

exports.run = (client, message, args) => {

  var mem = message.mentions.authmems.first();
  var authmem = message.guild.authmems.get(message.author.id);

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

  if(!mem) return message.channel.send(":x: Please Mention a Member to train");

  if(!mem.roles.has(trainee)) {
    if(authmem.roles.has(director)) {
        mem.roles.add(trainee)
        mem.setNickname('Trainee '+mem.username)
        message.channel.send(`:white_check_mark: ${mem.username} has been trained by ${authmem.nickname}`)
        message.delete();
    } else if(authmem.roles.has(cmd) || authmem.roles.has(vcmd)) {
      mem.roles.add(trainee)
      mem.setNickname('Trainee '+mem.username)
      message.channel.send(`:white_check_mark: ${mem.username} has been trained by ${authmem.nickname}`)
      message.delete();
    } else if(authmem.roles.has(fcmd) || authmem.roles.has(fvcmd)) {
      mem.roles.add(trainee)
      mem.setNickname('Trainee '+mem.username)
      message.channel.send(`:white_check_mark: ${mem.username} has been trained by ${authmem.nickname}`)
      message.delete();
    } else if(authmem.roles.has(firstov) || authmem.roles.has(secondov)) {
      mem.roles.add(trainee)
      mem.setNickname('Trainee '+mem.username)
      message.channel.send(`:white_check_mark: ${mem.username} has been trained by ${authmem.nickname}`)
      message.delete();
    } else if(authmem.roles.has(htrain) || authmem.roles.has(train)) {
      mem.roles.add(trainee)
      mem.setNickname('Trainee '+mem.username)
      message.channel.send(`:white_check_mark: ${mem.username} has been trained by ${authmem.nickname}`)
      message.delete();
    } else {
      message.channel.send(":x: No permissions")
    }
  } else {
    message.channel.send(":x: That Member already is trained!")
  }

}
