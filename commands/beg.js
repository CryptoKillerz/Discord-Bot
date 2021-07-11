const Discord = require('discord.js');
const Profiles = require('../database/schema/profile-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `beg`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await Profiles.findOneAndUpdate(
            {
                userName: message.author.tag,
            },
            {
                $inc: {
                    coins: randomNumber,
                },
            }
        );
        return message.channel.send(`**${message.author.username}, you begged and received ${randomNumber}**`);
    }
}