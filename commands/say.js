const Discord = require('discord.js');

function clean(text) {
    if (typeof(text) === 'string')
        return text.replace(/` /g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else
        return text;
}

module.exports.run = async (bot, message, args) => {

    console.log(`${message.author.tag} (${message.author.id}) has used the say command. Content: "${message.content}"`)
    message.channel.send(args.join(' '))
    message.delete();

}

module.exports.help = {
    name: "say"
}
