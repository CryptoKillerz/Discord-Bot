const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `suggestion`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        let suggestion = args.join(' ');
    if (!args[0]) return message.channel.send('**You must state something to suggest.**');
    const susEmbed = new Discord.MessageEmbed()
      .setTitle(`Suggestion`)
      .addField(`Suggestion: ${suggestion}`, `This was suggested by ${message.author.tag}`);

    message.delete();
    message.channel.send(susEmbed).then(sentMessage => sentMessage.react('👍')).then(reaction => reaction.message.react('👎'));
    }
}