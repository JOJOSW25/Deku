const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Partenariat')
            .setTitle('**Partenariat avec David VPN**')
            .setDescription('[David VPN](https://instagram.com/pasch_pasch_14?igshid=t8n9sxcric7w) **Partenariat**')
            .setColor('BLUE')
            .setAuthor('David VPN', 'https://cdn.discordapp.com/attachments/764885784833949717/765895377777590283/image.png', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/758309904380592150/766259085871284234/image0.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/764885784833949717/765895623337050112/image0.jpg')
            .setFooter('Partenariat', 'https://cdn.discordapp.com/attachments/764885784833949717/765895623337050112/image0.jpg')
            .setTimestamp())
    },
    name: 'partenariat'
}