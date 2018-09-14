const Discord = require("discord.js");

exports.run = (client, message, args) => {

  message.channel.send("**Bot Commands:**\n`,,,announce` => Creates a Announcement\n`,,,train` => Train a Member that isnt trained\n`,,,info` => Information about this Bot")
  message.delete();

}
