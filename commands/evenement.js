const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Evenement')
            .setTitle('**Anniversaire du créateur du serveur.**')
            .setDescription('**25 Octobre**')
            .setColor('RANDOM')
            .setAuthor('SW', 'https://cdn.discordapp.com/attachments/764885784833949717/766625624311332874/download.jpg', 'https://youtu.be/MZNQewp43Ug')
            .setImage('https://cdn.discordapp.com/attachments/764885784833949717/766625052535554048/images.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/764885784833949717/766625752652447774/download.jpg')
            .setFooter('17 ans', 'https://cdn.discordapp.com/attachments/764885784833949717/766625624311332874/download.jpg')
            .setTimestamp())
    },
    name: 'evenement'
}