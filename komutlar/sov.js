const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg, args) => {
    let kufur=[
      "Aneni sikeyim senin orospu çocugu gavuru sen kımsın kurucuma küfür ediyon orrrrrr çocugu anneni bir sikerim birrr",
      "babanın annesinin amına koyayım orul orul orospu evladı",
      "ebenin amı gibi kaşları da kara",
      "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
      "senin ananın amına mancınıkla patates atayım",
      "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
      "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
      "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
      "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
      "ananın amına sınav yapar 2 milyon kişiyi sokarım",
      "amına barut döker sürtünmeyle yakarım orospu evladı",
      "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
      "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
      "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
      "küfür ederdim ama anan çok yordu",
      "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
      "senin götünü keser çorap lastiği yaparım.",
    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
  }});
    if(member.id === "307454426384302082")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (':no_entry_sign:Yapımcım mı sakın haa. Görmiyim bidaha.')
  }})
    if(member.id === "339418672579739660")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Yapımcının arkadaşına sövemezsin!`)
  }})
    if(member.id === "350996369567121418")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Yapımcının arkadaşına sövemezsin!`)
  }})
    if(member.id === "344851271821295616")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Yapımcının arkadaşına sövemezsin!`)
  }})
    if(member.id === "492680662415966208")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Yapımcının arkadaşına sövemezsin!`)
  }})
    if(member.id === "")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: ...`)
  }})
    if(member.id === client.user.id){
      msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
  }})
    }
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
    }

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['söv'],
    permLevel: 0,
    kategori: 'eğlence'
   };

  exports.help = {
    name: 'söv',
    description: 'İstediğiniz kişiye söver.',
    usage: 'd!söv <@kullanıcı>'
   }
