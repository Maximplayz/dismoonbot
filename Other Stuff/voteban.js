const Discord = require('discord.js');
const fs = require('fs';)

module.exports.run = async (bot, message, args) => {

  if(!message.mentions.members.first()){return message.channel.send('**Please Mention a User.**')};
  if(message.mention.members.first().user.id === message.author.id){return message.channel.send('**You cant vote on yourself**')};

  //Variable Storage
  let votes = require('./votes.json'); //votes.json file
  let users = require('./users.json'); //users.json file
  let mem = message.mentions.members.first(); //mentioned user
  let memid = mem.user.id; //mentioned user id
  let memtag = mem.user.tag; //mentioned user tag
  let authid = message.author.id; //author id
  let authtag = message.author.tag; //author tag

  //Creating a Votes Object for the Mentioned User if he does not have one
  if(!votes[memid]) {
    votes[memid] = {
      votes: 0,
      tag: memtag,
    };
    fs.writeFile('./commands/votes.json', JSON.stringify(votes), (err) => {
      if(err) console.log(err)
    });
    message.channel.send(`**Seems that ${memtag} did not have a votes object, created one for them. Mention the Person again to give out a Vote.**`)
  };

  //Goes through the Vote Process if the Mentioned User has a Vote File
  if(votes[memid]){

    //Checks if the Author has a Mentioning File
    if(!users[authid].voteonid = memid){
      user[authid] = {
        voteonid: memid,
        voteontag: memtag,
        bool: false
      };
      fs.writeFile('./commands/users.json', JSON.stringify(users), (err) => {
        if(err) console.log(err)
      });
    } else {
      if(users[authid].bool = false){
        user[authid] = {
          voteonid: memid,
          voteontag: memtag,
          bool: true
        };
        fs.writeFile('./commands/users.json', JSON.stringify(users), (err) => {
          if(err) console.log(err)
        });  
        votes[memid].votes++;
        fs.writeFile('./commands/votes.json', JSON.stringify(votes), (err) => {
          if(err) console.log(err)
        });
        message.channel.send(`**Alright! Added a Vote to ${memtag}, ${memtag} now has ${votes[memid].votes} vote/s.**`)
      }
    }

  }

}

module.exports.help = {
    name: "voteban"
}
