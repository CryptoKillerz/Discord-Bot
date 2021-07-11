const { Message } = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `bankrob`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const Banks = [`Bank`, `Gas Station`, `Mall`, `Restaurant`, `Store`]
        const Checks = Banks[Math.floor(Math.random() * (Banks.length))];
        const Coins = Math.floor(Math.random() * (300));
        message.channel.send(client.embed({ description: `You robbed the ${Checks} taking ${Coins} coins, with you!` }, message));
        return await client.economy.addBal(message.author.id, Coins);
 },
 timeout: 86400000
}