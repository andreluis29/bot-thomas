const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('screams')
    .setDescription('Testa ai rs.'),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setColor('#ffffff')
      .setTitle('sustinho')
      .setURL('https://github.com/andreluis29/bot-thomas')
      .setAuthor({ name: 'André', iconURL: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Thomas_Tank_Engine_1.JPG', url: 'https://github.com/andreluis29/bot-thomas' })
      .setDescription(`
        Olá marilene, gostaria de desejar boa noite!
      `)
      .setThumbnail('https://upload.wikimedia.org/wikipedia/en/d/dc/Thomas_Tank_Engine_1.JPG')
      .setImage('https://upload.wikimedia.org/wikipedia/en/d/dc/Thomas_Tank_Engine_1.JPG')
      .setTimestamp()
      .setFooter({ text: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK', iconURL: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Thomas_Tank_Engine_1.JPG' });
    return interaction.reply({ embeds: [exampleEmbed] });
  },
};