const Discord = require('discord.js');
const { create } = require('sourcebin');
const Client = require('../structures/Client');
module.exports = {
    name: `sourcebin`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const content = args.join(" ");
        if(!content) return message.reply('**Please give contents!**');

        create([
            {
                name: 'random code',
                content,
                language: 'javascript'
            }
        ],
        {
            title: 'JavaScript Code',
            description: 'JavaScript',
        }
    ).then((value) => {
        message.channel.send(`**Your code has been posted:** ${value.url}`)
    })
    },
};