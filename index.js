const fs = require("fs");
const { Client, RichEmbed,Collection } = require ("discord.js");
const client = new Client();
client.commands = new Collection();


const { discordToken } = require("./config.json");


const commandFiles = fs.readdirSync('./commands'); //Transforma em Vetor os arquivos da commands

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", ()=>{
    console.log("Ready!");
});


client.on('message', (message)=>{

    const args = message.content.split(" ");
    const command = args.shift();

    if(!client.commands.has(command)) return 

    try{
        client.commands.get(command).execute(message,args);
    } catch (error){
        console.error(error);
        message.reply("Um erro aconteceu ao tentar executar o comando.");
    }
    //RGAPI-df8387eb-bd26-49d8-95e9-e4c912004b20

/*    if(message.content === '!ping'){
        client.commands.get('ping').execute(message);
    }

    else if(message.content === '!rhaast'){
        const embed = new RichEmbed()
        .setTitle("Rhaast se foi.")
        .setDescription("Eu venci.")
        .addField("Shieda Kayn")
        .setColor(0x00FFFF)

        message.channel.send(embed);
    }

    else if(message.content === '!kayn'){
        const embed = new RichEmbed()
        .setTitle("Título do Embed")
        .setDescription("Aqui vai a descrição do Embed")
        .addField("Nome", "Shieda Kayn")
        .setThumbnail("https://i.imgur.com/Ml2q64r.png")
        .setColor(0x00FFFF)

        message.channel.send(embed);
    }

    else if(message.content === "!servers"){
        message.channel.send(`O nome do servidor é ${message.guild.name}`);

        message.channel.send(
            `Seu username: ${message.author.avatarURL}`
        );
    }

    else if(message.content.startsWith("!maiuscula")){
        const args = message.content.split(' ');
        const command = args.shift();
        const response = args.join(' ');
        message.channel.send(response.toUpperCase());
    } */
});

client.login(discordToken);