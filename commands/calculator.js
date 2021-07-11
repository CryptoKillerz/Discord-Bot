const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `calculator`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const firstValue = Number(args[0]);
        const secondValue = Number(args[2]);
    
        if (!args[0]) return message.channel.send(`**You have to input more arguments** \`${client.prefix}calc number [+, -, ×, /] number\``);
        if (!firstValue) return message.channel.send('**The first value stated is not a number.**');
        if (!args[1]) return message.channel.send('**You have to state what you want to do with this and another number. Options: +, -, ×, /**');
        if (!['+', '-', '×', '/'].includes(args[1])) return message.channel.send('**You did not state a method to apply to these numbers: +, -, ×, /**');
        if (!secondValue) return message.channel.send('**The second value stated is not a number.**');
    
        if (args[1] == '+') {
          let result = firstValue + secondValue;
          message.channel.send(`**${firstValue} + ${secondValue} = ${result}.**`);
        }
    
        if (args[1] == '-') {
          let result = firstValue - secondValue;
          message.channel.send(`**${firstValue} - ${secondValue} = ${result}.**`);
        }
    
        if (args[1] == '×') {
          let result = firstValue * secondValue;
          message.channel.send(`**${firstValue} × ${secondValue} = ${result}.**`);
        }
    
        if (args[1] == '/') {
          let result = firstValue / secondValue;
          message.channel.send(`**${firstValue} / ${secondValue} = ${result}.**`);
        }
    }
}