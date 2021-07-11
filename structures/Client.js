const { Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 260,
    ws: {
        intents: [
            Intents.NON_PRIVILEGED,
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ]
    },
    partials: ['REACTION', 'USER', 'MESSAGE']
});
const chalk = require('chalk');
const Levels = require('discord-xp');
const ms = require('ms');
Levels.setURL("LMAO");
const { default: fetch } = require('node-fetch');
require('../database/connection')(client);
const prefixSchema = require('../database/schema/prefix-schema');
const guildConfigSchema = require('../database/schema/guildConfigSchema');
const premiumSchema = require('../database/schema/premium');
const Profiles = require('../database/schema/profile-schema');
class EconomyClient extends Client {
    constructor() {
        super();
        this.Discord = require('discord.js');
        this.fs = require('fs');
        this.path = require('path');
        this.ms = require('ms');
        this.mongoose = require('mongoose');
        this.commands = new Collection();
        this.timeouts = new Collection();
        this.config = {
            prefix: `e!`,
        };
    }
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
            this.commands.set(File.name, File);
        });
    };
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false
    }
    start(token, path) {
        this.commandHandler(path);
        this.login(token);
        this.on('ready', () => {
            console.log(`${this.user.tag} is now online!`, this.user.setStatus('online'));

            const arrayOfStatus = [
                `Over ${this.guilds.cache.size} servers!`,
                `Over ${this.users.cache.size} members`,
                `prefix e!`
            ];

            let index = 0;
            this.setInterval(() => {
                if(index === arrayOfStatus.length) index = 0;
                const status = arrayOfStatus[index];
                this.user.setActivity(status, { type: "WATCHING" }).catch(console.error)
                index++;
            }, 15000)
        })
        this.on('guildCreate', async (guild) => require('../routes/guildCreate')(guild));
        this.on('guildDelete', async (guild) => require('../routes/guildDelete')(guild));
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\
        const lvlschema = require('../database/schema/level-schema');
        this.on('message', async(message) => {
            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;

            const guildConfig = await guildConfigSchema.findOne({ guildID: message.guild.id }, async (err, data) => {
                if (err) return;
                if (!data) {
                    const newguildConfigSchema = new guildConfigSchema({
                        guildID: message.guild.id,
                        prefix: `e!`,
                        premium: false
                    });
                    await newguildConfigSchema.save()
                        .catch(err => console.error(err))
                }
            });

            lvlschema.findOne({ guildId: message.guild.id}, async (e, data) => {
                if(!data) {
                    new lvlschema({
                        guildId: message.guild.id,
                        toggle: 1,
                    }).save();
                    return;
                }

                if(data.toggle == 1){
                    //Levels
                    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
                    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
                    if (hasLeveledUp) {
                        const user = await Levels.fetch(message.author.id, message.guild.id);
                        message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);

                        if (user.level == 5) {
                            let role = message.guild.roles.cache.find(role => role.name == "Level 5");
                            if (!role) await message.guild.roles.create({
                                data: {
                                    name: "Level 5",
                                    color: "RED",
                                }
                            }).catch(err => console.log(err));
                            role = message.guild.roles.cache.find(role => role.name == "Level 5");
                            if (message.member.roles.cache.has(role.id)) return;
                            else await message.member.roles.add(role.id);
                        }

                        if (user.level == 10) {
                            let role = message.guild.roles.cache.find(role => role.name == "Level 10");
                            if (!role) await message.guild.roles.create({
                                data: {
                                    name: "Level 10",
                                    color: "YELLOW",
                                }
                            }).catch(err => console.log(err));
                            role = message.guild.roles.cache.find(role => role.name == "Level 10");
                            if (message.member.roles.cache.has(role.id)) return;
                            else await message.member.roles.add(role.id);
                        }

                        if (user.level == 15) {
                            let role = message.guild.roles.cache.find(role => role.name == "Level 15");
                            if (!role) await message.guild.roles.create({
                                data: {
                                    name: "Level 15",
                                    color: "ORANGE",
                                }
                            }).catch(err => console.log(err));
                            role = message.guild.roles.cache.find(role => role.name == "Level 15");
                            if (message.member.roles.cache.has(role.id)) return;
                            else await message.member.roles.add(role.id);
                        }

                        if (user.level == 20) {
                            let role = message.guild.roles.cache.find(role => role.name == "Level 20");
                            if (!role) await message.guild.roles.create({
                                data: {
                                    name: "Level 20",
                                    color: "GREEN",
                                }
                            }).catch(err => console.log(err));
                            role = message.guild.roles.cache.find(role => role.name == "Level 20");
                            if (message.member.roles.cache.has(role.id)) return;
                            else await message.member.roles.add(role.id);
                        }

                        if (user.level == 25) {
                            let role = message.guild.roles.cache.find(role => role.name == "Level 25");
                            if (!role) await message.guild.roles.create({
                                data: {
                                    name: "Level 25",
                                    color: "BLUE",
                                }
                            }).catch(err => console.log(err));
                            role = message.guild.roles.cache.find(role => role.name == "Level 25");
                            if (message.member.roles.cache.has(role.id)) return;
                            else await message.member.roles.add(role.id);
                        }
                    }
                    //
                } else if(data.toggle == 0) {
                    //
                }
            })
            let profileData;
            try{
                profileData = await Profiles.findOne({ userName: message.author.tag });
                if(!profileData) {
                    let profile = await Profiles.create({
                        userName: message.author.tag,
                        serverName: message.guild.name,
                        coins: 1000,
                        bank: 0,
                    })
                    profile.save();
                }
            }catch(err) {
                console.log(err)
            }

            const data = await prefixSchema.findOne({
                GuildName: message.guild.name
            })
            if(data) {
                const prefix = data.Prefix
            }

            const prefix = await `${guildConfig.prefix}`
            if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            const command = this.getCommand(cmd);
            if(!command) return;
            if(command.premium && !(await premiumSchema.findOne({ User: message.author.id }))) return message.channel.send('**You need to upgrade to premium to use this command!**');
            if(command.timeout) {
                if(this.timeouts.has(`${command.name}${message.author.id}`)) return message.channel.send(this.embed({ description: `Please wait ${this.ms( this.timeouts.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}`, }, message));
                command.run(this, message, args).catch(console.error);
                this.timeouts.set(`${command.name}${message.author.id}`, Date.now() + command.timeout);
                setTimeout(() => {
                    this.timeouts.delete(`${command.name}${message.author.id}`)
                }, command.timeout)
            } else return command.run(this, message, args).catch(console.error);
        })
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\
        this.on('messageDelete', async (message) => {
            if (message.author.bot) return;

            const deleteEmbed = new MessageEmbed()
                .setTitle('Deleted Message')
                .addField('Deleted by:', `${message.author} - (${message.author.id})`)
                .addField('Channel:', message.channel)
                .addField('Content:', message.content)
                .setColor('RANDOM')
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

            const Log = await guildConfigSchema.findOne({ guildID: message.guild.id }).catch(error => console.log(error));

        const logchannel = message.guild.channels.cache.get(Log.logChannelID);

        if (!logchannel) return;

        try {
            logchannel.send(deleteEmbed)

        } catch (error) {
            console.log(' ')
        }
        })
        this.on('messageUpdate', async(oldMessage, newMessage) => {
            if (newMessage.author.bot) return;

            const editedEmbed = new MessageEmbed()
                .setTitle('Edited Message')
                .addField('Edited by:', `${oldMessage.author} - (${oldMessage.author.id})`)
                .addField('Channel:', oldMessage.channel)
                .addField('Old Message:', oldMessage.content)
                .addField('New Message:', newMessage.content)
                .setColor('RANDOM')
                .setTimestamp()
                .setThumbnail(newMessage.author.displayAvatarURL({ dynamic: true }))

                const Log = await guildConfigSchema.findOne({ guildID: newMessage.guild.id }).catch(error => console.log(error));

        const logchannel = newMessage.guild.channels.cache.get(Log.logChannelID);

        if (!logchannel) return;

        try {
            logchannel.send(editedEmbed)

        } catch (error) {
            console.log(' ')
        }
        })
        //------------------------------------------------------------------------------------------------------------------------------------------------\\
        const WelcomeSchema = require('../database/schema/welcome-schema');

        this.on('guildMemberAdd', async (member, guild) => {
            WelcomeSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
                if(!data) return;

                const user = member.user;
                const channel = member.guild.channels.cache.get(data.channelId);

                const embed = new MessageEmbed()
                    .setTitle(`Welcome to the server!`)
                    .setDescription(`Welcome ${user} to the server`)
                    .setImage('https://cdn.discordapp.com/attachments/842873680447143937/855489114228129802/image0.gif')

                channel.send(embed)
            })
            let profile = await Profiles.create({
                userName: member.user.tag,
                serverName: member.guild.name,
                coins: 1000,
                bank: 0,
            });
            profile.save();
        })
        //-------------------------------------------------------------------------------------------------------------------------------------------------\\
        this.on('guildMemberAdd', async (member) => {
            console.log(member.user.tag + ' just joined the server ');
        })
        //------------------------------------------------------------------------------------------------------------------------------------------------\\
        const LeaveSchema = require('../database/schema/leave-schema');

        this.on('guildMemberRemove', async (member, guild) => {
            LeaveSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
              if(!data) return;
              
              const user = member.user;
              const channel = member.guild.channels.cache.get(data.channelId);
              
              const embed = new MessageEmbed()
                .setTitle(`We hope you come back!`)
                .setDescription(`${user} has left the server 😭`)
                .setImage('https://cdn.discordapp.com/attachments/790266944510885918/858785206272917544/rhr.gif')

                channel.send(embed);
            })
        })
        //------------------------------------------------------------------------------------------------------------------------------------------------\\
        this.on('guildMemberRemove', async (member) => {
            console.log(member.user.tag + ' just leave the server ');
        })
    }
    embed(data, message) {
        return new this.Discord.MessageEmbed({ ...data, color: `RANDOM` }).setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: `png` }));
    }
};
module.exports = EconomyClient
