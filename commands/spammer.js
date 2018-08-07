const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let spamrole = message.guild.roles.get("476418894551056384");
  let ownerid = "254225860649943051";

  if(message.member.roles.has(spamrole) || message.author.id == ownerid){


  if(!args[0]) return message.channel.send('dude, mention someone as first argument, or whatever');
  if(!args[1]) return message.channel.send('idiot, tell me a amount as second argument');
  if(args[1] > 25) return message.channel.send('Too much spam, stay within the amount of 25 >:(');

  message.delete()
  message.channel.send("Spam Initialized! >:D")
  console.log(`==[SPAM COMMAND]==\nInitialized by: ${message.author.tag} (${message.author.id})\nAmount: ${args[1]}\nUser to Spam: ${args[0]}\n`)

  let counter = 0;
  let number = args[1];

  while (counter < number) {
    message.channel.send(`${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n${args[0]}\n`).then( m => {
      m.delete()
    })
    counter++;
  }

  if(counter == number){
    message.channel.send("Spam Completed! :D")
  }

}else{
      message.channel.send('lol you dont have permissions dude');
}}

module.exports.help = {
    name: "spammer"
}
