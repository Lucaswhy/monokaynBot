const { RichEmbed } = require ("discord.js");

module.exports = {

    name: '!rhaast',

    execute (message, args){
        const embed = new RichEmbed()
        .setTitle("Rhaast se foi.")
        .setDescription("Eu venci.")
        .addField("Shieda Kayn")
        .setColor(0x00FFFF)

        message.channel.send(embed);
    }

};