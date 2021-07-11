const Discord = require('discord.js');
const Canvas = require('canvas');
const Client = require('../structures/Client');
module.exports = {
    name: `canvas`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        if(message.author.id !== '791757304797331466') return;

        const canvas = Canvas.createCanvas(700, 250);

        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./background.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');

        message.channel.send(attachment);
    }
}