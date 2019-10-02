const axios = require('axios').default;
const { RichEmbed } = require('discord.js');
const { riotAPIKey } = require('../config.json');

module.exports = {

    name: '!summoner',
    async execute(message, args){
        const name = args.join(" ");

        try {
            
            const response = await axios.get(
                `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${riotAPIKey}`
            )

            const summoner = response.data

            const summonerIcon = `http://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner.profileIconId}.png`

            const embed = new RichEmbed()
            .setTitle("Informações do Invocador: ")
            .setColor(0x00FFFF)
            .addField("Nome", summoner.name, true)
            .addField("Level", summoner.summonerLevel,true)
            .addField("Summoner ID", summoner.id)
            .setThumbnail(summonerIcon)

            message.channel.send(embed);
        } catch(error){
            console.error(error);
            message.reply("Um erro aconteceu ao buscar esse Invocador.");
        }

    }
};