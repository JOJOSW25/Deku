const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Sponsor')
            .setTitle('**Sponsoriser par Raid Shadow Legends**')
            .setDescription('[Raid Shadow Legends](https://plarium.com/landings/en/desktop/raid/dragon_fire_a_m_f038_droapp?plid=150485&pxl=google_search&publisherid=471328572234_86487604279&placement=kwd-828443951496_raid%20shadow%20legends&adpartnerset=86487604279&gclid=EAIaIQobChMIrqKmkaay7AIVlGDmCh0UeAVEEAAYASAAEgITQ_D_BwE) **Sponsor**')
            .setColor('RED')
            .setAuthor('Raid', 'https://cdn.discordapp.com/attachments/764885784833949717/765658560444366918/download.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/764885784833949717/765658560444366918/download.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/764885784833949717/765659211644141588/unnamed.jpg')
            .setFooter('sponsor', 'https://cdn.discordapp.com/attachments/764885784833949717/765659211644141588/unnamed.jpg')
            .setTimestamp())
    },
    name: 'sponsor'
}