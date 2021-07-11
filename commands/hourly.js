const { Message } = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `hourly`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const Bank = [`Bank`, `Check`]
        const Check = Bank[Math.floor(Math.random() * (Bank.length))];
        const Coins = Math.floor(Math.random() * (300));
        message.channel.send(client.embed({ description: `You recived money from the ${Check} giving you ${Coins} coins!` }, message));
        return await client.economy.addBal(message.author.id, Coins);
 },
 timeout: 3600000
}