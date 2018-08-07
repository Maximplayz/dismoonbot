const Discord = require('discord.js');
const fs = require('fs');
let votes = require('./votes.json');

module.exports.run = async (bot, message, args) => {

  let USR = message.mentions.members.first();
  if(!USR){return message.channel.send('Mention a user')};

  let USRName = votes[USR.user.id].name
  console.log(USRName)
  let USRVotes = votes[USR.user.id].votes
  console.log(USRVotes)

  let em = new Discord.RichEmbed()
  .setTitle(`Votes of ${USRName}`)
  .setColor(USR.highestRole.color)
  .addField('User ID', USR.user.id, true)
  .addField('Votes', USRVotes, true)
  message.channel.send(em)

}

module.exports.help = {
    name: "getvotes"
}
