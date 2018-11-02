const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply("Oynamak istedi�in ki�iyi etiketlemelisin!")
  
  if (opponent.bot) return message.reply('Botlar ile oynayamazs�n!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile d�ello atamazs�n!');
                if (this.fighting.has(message.channel.id)) return message.reply('Kanal ba��na sadece bir d�ello meydana gelebilir.');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot) {
                await message.channel.send(`${opponent}, d�ello iste�i geldi. D�ello'yu kabul ediyor musun? (\`evet\` veya \`hay�r\` olarak cevap veriniz.)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`D�ello kabul edilmedi...`);
                                }
                        }
                        let userHP = 500;
                        let oppoHP = 500;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, ne yapmak istersin? \`sald�r\`, \`savun\`, \`ultra g��\`, veya \`ka�\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['sald�r', 'savun', 'ultra g��', 'ka�'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`�zg�n�m ama, s�re doldu!`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['sald�r', 'savun', 'ultra g��'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'sald�r') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'savun') {
                                        await message.channel.send(`${user}, kendisini s�per kalkan ile savundu!`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'ultra g��') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 300);
                                                await message.channel.send(`${user}, �oook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda toplad�n ve **${damage}** hasar vurdun!!`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user}, �oook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamad���n i�in ulta g�� kullanamad�n!`);
                                        }
                                        reset();
                                } else if (choice === 'ka�') {
                                        await message.channel.send(`${user}, ka�t�! Korkak!`);
                                        forfeit();
                                        break;
                                } else {
                                        await message.reply('Ne yapmak istedi�ini anlamad�m.');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazand�! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'sava�'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'd�ello',
  category: "e�lence",
  description: '�stedi�iniz bir ki�i ile d�ello atars�n�z!',
  usage: 'd�ello <@kullan�c�>'
};