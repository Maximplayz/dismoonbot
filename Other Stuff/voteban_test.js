const Discord = require('discord.js');
const fs = require('fs');
let votes = require('./votes.json');
let users = require('./users.json');

module.exports.run = async (bot, message, args) => {


  if(!message.mentions.members.first()){return message.channel.send(`**Mention a User!** Remember: Votes can not be Deleted.`)};
  let ToVoteOn = message.mentions.members.first().user.id;
  console.log(ToVoteOn)


  if(!votes[ToVoteOn]){
    votes[ToVoteOn] = {
      votes: 0,
      name: message.mentions.members.first().user.tag,
    };
  }

  if(!users[message.author.id]){

    users[message.author.id] = {
      voteonid: ToVoteOn,
      voteonname: message.mentions.members.first().user.tag,
      bool: true,
    };

  votes[ToVoteOn].votes++;
  console.log(votes[ToVoteOn])

  fs.writeFile('./commands/votes.json', JSON.stringify(votes), (err) => {
    if(err) console.log(err)
  });

  fs.writeFile('./commands/users.json', JSON.stringify(users), (err) => {
    if(err) console.log(err)
  });

  let VoteOnName = message.mentions.members.first().user.tag
  let VoteOnVotes = votes[ToVoteOn].votes

  message.channel.send(`**Vote added! ${VoteOnName} has now ${VoteOnVotes} votes.**`)
} else {
  if(users[message.author.id].bool = 'true') {

    users[message.author.id] = {
      voteonid: ToVoteOn,
      voteonname: message.mentions.members.first().user.tag,
      bool: false
      }

    votes[ToVoteOn].votes--;
    console.log(votes[ToVoteOn])

    fs.writeFile('./commands/votes.json', JSON.stringify(votes), (err) => {
      if(err) console.log(err)
    });

    fs.writeFile('./commands/users.json', JSON.stringify(users), (err) => {
      if(err) console.log(err)
    });

    message.channel.send(`**Vote Removed! ${message.mentions.members.first().user.tag} has now ${votes[ToVoteOn].votes} votes.**`)

  } if(users[message.author.id].bool = 'false') {

    users[message.author.id] = {
      voteonid: ToVoteOn,
      voteonname: message.mentions.members.first().user.tag,
      bool: true,
    };

  votes[ToVoteOn].votes++;
  console.log(votes[ToVoteOn])

  fs.writeFile('./commands/votes.json', JSON.stringify(votes), (err) => {
    if(err) console.log(err)
  });

  fs.writeFile('./commands/users.json', JSON.stringify(users), (err) => {
    if(err) console.log(err)
  });

  message.channel.send(`**Vote added! ${message.mentions.members.first().user.tag} has now ${votes[ToVoteOn].votes} votes.**`)

  }
}

}

module.exports.help = {
    name: "testvoteban"
}
