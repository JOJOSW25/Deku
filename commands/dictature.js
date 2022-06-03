const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Dictature')
            .setTitle('**La dictature est un système totalitaire il est inutile de se rebeller, alors va manger un porridge.**')
            .setColor('BLUE')
            .setAuthor('Lenin,Staline', 'https://cdn.discordapp.com/attachments/764885784833949717/809524953753976871/download.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/764885784833949717/809524080478912563/img25020.768x512.jpg')
            .setFooter('Dictature', 'https://cdn.discordapp.com/attachments/764885784833949717/809525577727737886/download.png')
            .setTimestamp())
    },
    name: 'dictature'
}