const Discord = require('discord.js');
const Profiles = require('../database/schema/profile-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `withdraw`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const profile = await Profiles.findOne({ userName: message.author.tag })

        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send('**Please enter a whole number!**');
        try {
            if (amount > profile.bits) return message.channel.send(`**You don't have any money in your bank to withdraw.**`);
            await Profiles.findOneAndUpdate(
                {
                    userName: message.author.tag,
                },
                {
                    $inc: {
                        coins: amount,
                        bank: -amount,
                    },
                }
            );

            return message.channel.send(`**You withdrawn ${amount} coins from your bank!**`);
        } catch (err) {
            console.log(err)
        }
    }
}