const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        console.log('Bir þeyler yanlýþ gitti...');
        console.dir(err);
        return;
      }
      message.delete()
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Ascii;')
      .setDescription('```fix\n' + data + '\n```')
      .setFooter('Darq* Bot', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ascii'],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'Ýstediðiniz þeyi bota yazdýrýr.',
  usage: 'yaz [yazdýrmak istediðiniz þey]'
};
