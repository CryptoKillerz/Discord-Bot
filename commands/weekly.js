const { Message } = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `weekly`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const Parent = [`Mom`, `Dad`]
        const parent = Parent[Math.floor(Math.random() * (Parent.length))];
        const Coins = Math.floor(Math.random() * (300));
        message.channel.send(client.embed({ description: `Your ${parent} gave you ${Coins} coins, for the week!` }, message));
        return await client.economy.addBal(message.author.id, Coins);
 },
 timeout: 604800000
}