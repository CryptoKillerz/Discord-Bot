const Discord = require('discord.js');
const Client = require('../structures/Client');
module.exports = {
    name: `rps`,
    /**
     *  @param {Client} client
     *  @param {Message} message
     *  @param {String[]} args
     */
    run: async(client, message, args) => {
        const botChoice = Math.floor(Math.random() * 2) + 1
        let botEmoji;
        let playerEmoji;
        let botChoiceStr;

        if (!args[0]) return message.channel.send('**You need to state your choice.** \`rock\` \`paper\` \`scissors\`');
        if (!['rock', 'paper', 'scissors'].includes(args[0])) return message.channel.send('**Your choice was not one of the options:** \`rock\` \`paper\` \`scissors\`');


        if (botChoice == 1) {
        botChoiceStr = 'rock';
        botEmoji = ':rock: Rock';
      }
      if (botChoice == 2) {
        botChoiceStr = 'paper';
        botEmoji = ':newspaper: Paper';
      }
      if (botChoice == 3) {
        botChoiceStr = 'scissors';
        botEmoji = ':scissors: Scissors';
      }

      if (args[0] == 'rock') playerEmoji = ':rock: Rock';
      if (args[0] == 'paper') playerEmoji = ':newspaper: Paper';
      if (args[0] == 'scissors') playerEmoji = ':scissors: Scissors';
      console.log(botChoice);
      console.log(botEmoji);

      if (botChoiceStr == args[0]) return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **We tied!**`)
      if (args[0] == 'rock') {
        if (botChoiceStr == 'rock') return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You tied!** `)
        else return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You lost!**`);
      } if (args[0] == 'paper') {
        if (botChoiceStr == 'scissors') return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You lost!** `)
        else return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You won!**`);
      } if (args[0] == 'scissors') {
        if (botChoiceStr == 'paper') return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You won!** `)
        else return message.channel.send(`**I picked:** ${botEmoji}, **you picked:** ${playerEmoji}. **You lost!**`);
      }
    }
}