const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Aide commandes')
            .setColor('YELLOW')
            .addField('Champ 1 **?bjr**', 'Bonjour a toi')
            .addField('Champ 2 **?bakugo**', 'Mute de maniere avant-gardiste, merci de demander à Pasch Pasch en mp pour être unmute.')
            .addField('Champ 3 **?aide**', 'Besoin d\'aide, cette commande crée un salon spécialment pour toi visible seulement par la modération.')
            .addField('Champ 4 **?regler**', 'Permet de clore le salon de discution généré par la commande si dessus.')
            .addField('Champ 5 **?sponsor**', 'Sponsor du Bot.')
            .addField('Champ 6 **?partenariat**', 'Partenariat du Bot.')
            .addField('Champ 7 **?gg**', 'Fait une pluie de GG.')
            .addField('Champ 8 **?intro**', 'Fait une bonne introduction.')
            .addField('Champ 9 **?evenement**', 'Dit les derniers ou prochains événement du serveur.')
            .addField('Champ 10 **?uraraka**', 'Pour ceux qui ont la réf.')
            .addField('Champ 11 **?koh-lanta**', 'kick de manière avant-gardiste.')
            .addField('Champ 12 **?one-for-all**', 'Tue la personne en question(ban).')
            .setTimestamp())
    },
    name: 'help'
}