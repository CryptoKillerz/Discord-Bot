const guildConfigSchema = require('../database/schema/guildConfigSchema');
module.exports = async (guild) => {
    await guildConfigSchema.create({ guildID: guild.id });
}