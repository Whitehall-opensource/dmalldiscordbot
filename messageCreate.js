const mysql = require('mysql');
const config = require('../../config.json')
const { MessageEmbed } = require('discord.js')
const loadDatabase = require("../../loadDatabase")

db = loadDatabase()
db.connect()

module.exports = {
    name: 'messageCreate',
    execute(message, bot, member) {

        //mention--------------------------------------------------------------------------------------------------
  let mention = new MessageEmbed()
  .setDescription(`Salut c'est moi ! <a:709045000670806026:1026197258720522350> \n Mon préfix est < !`)
  .setColor(`#00000`)
  if (message.content == `<@938555032289280010>`) message.reply({ embeds: [mention] })


        
     
        //antilink--------------------------------------------------------------------------------------------------
        db.query(`SELECT * FROM serveurs WHERE guildId = "${message.guild.id}"`, async (err, req) => {
            if(req.length < 1) return;
            const activ = req[0].antilink;
            
            if(activ == null) return;
            
            if(req[0].antilink === "on") {
                if(!message.member.permissions.has("ADMINISTRATOR")) {
        await bot.function.searchLinks(message)
    }}})
        
         //antispam--------------------------------------------------------------------------------------------------
        
        db.query(`SELECT * FROM serveurs WHERE guildId = "${message.guild.id}"`, async (err, req) => {
            if(req.length < 1) return;
            if(req[0].spam == null) return;
            if(req[0].spam === "on") {

              if(!message.member.permissions.has("ADMINISTRATOR")) {
        bot.function.antiSpam(message)
    }}})
//guilf-----------------------------------------------------------------------
        db.query(`SELECT * FROM serveurs WHERE guildId = '${message.guild.id}'`, async (err, req) => {
    if(req.length < 1) {

    db.query(
        `INSERT INTO serveurs (guildId, guildOwnerId) VALUES ("${message.guild.id}", "${message.guild.ownerId}")`
    )
message.channel.send('Merci de m'avoir ajouter ! Mon préfix est <')

    }})

        

        
    
             
       }
}