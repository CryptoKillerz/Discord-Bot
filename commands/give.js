const Discord = require('discord.js');
const Profiles = require('../database/schema/profile-schema');
const Client = require('../structures/Client');
module.exports = {
    name: `give`,
    premium: true,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const amount = args[0];

        if (amount % 1 != 0 || amount <= 0) return message.channel.send('**Please enter a whole number!**');

        try {
            const targetData = await Profiles.findOne({ userName: message.author.tag });
            if(!targetData) return message.channel.send('**This user does not appear in the database.**');

            await Profiles.findOneAndUpdate(
                {
                userName: message.author.tag
                }, 
                {
                    $inc: {
                        coins: amount,
                    },
                }
            );

            return message.channel.send(`**I have gave myself ${amount} coins!**`);
        } catch (err) {
            console.log(err)
        }
    }
}