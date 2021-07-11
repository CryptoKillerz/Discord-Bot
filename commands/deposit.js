const Discord = require('discord.js');
const Profiles = require('../database/schema/profile-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `deposit`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const profile = await Profiles.findOne({ userName: message.author.tag })

        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send('**Deposit amount must be a whole number!**');
        try {
            if (amount > profile.bits) return message.channel.send(`**You don't have enough money to deposit into your bank.**`);
            await Profiles.findOneAndUpdate(
                {
                    userName: message.author.tag,
                },
                {
                    $inc: {
                        coins: -amount,
                        bank: amount,
                    },
                }
            );

            return message.channel.send(`**You have deposited ${amount} coins into your bank!**`);
        } catch (err) {
            console.log(err)
        }
    }
}