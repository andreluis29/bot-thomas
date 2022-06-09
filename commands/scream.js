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
      .setAuthor({ name: 'André', iconURL: 'http://pm1.narvii.com/6707/fa3aca35e88f37f1c1cff15748640f677723b799_00.jpg', url: 'https://github.com/andreluis29/bot-thomas' })
      .setDescription(`
        Olá marilene, gostaria de desejar boa noite!
      `)
      .setThumbnail('http://pm1.narvii.com/6707/fa3aca35e88f37f1c1cff15748640f677723b799_00.jpg')
      .setImage('http://pm1.narvii.com/6707/fa3aca35e88f37f1c1cff15748640f677723b799_00.jpg')
      .setTimestamp()
      .setFooter({ text: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK', iconURL: 'http://pm1.narvii.com/6707/fa3aca35e88f37f1c1cff15748640f677723b799_00.jpg' });
    return interaction.reply({ embeds: [exampleEmbed] });
  },
};