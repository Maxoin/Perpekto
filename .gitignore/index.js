const Discord = require('discord.js');
var bot = new Discord.Client();

var catnum = ""
var salon = ""
var kispawn = 0
var ideydb =""
var ideye = ""
var NumberOwOFin = 0
var NumberOwO = 0
var yuser = ""
var gifs = {
    a: {
      nom: "Starlight Unicorn MoonDance",
      gif: "https://j.gifs.com/oY7Q3B.gif",
      annonce: "Subit la puissance de Starlight Unicorn !",
      type: "Lumière"
    },
    b: {
      nom: "Bulle d'eau",
      gif: "https://data.whicdn.com/images/53032229/original.gif",
      annonce: "BLBLBLBLBLBLLBLBLBLBLBLBLBLBLLBBLLBBLLBLB",
      type: "Eau"
    },
    c: {
      nom: "Demon Blast",
      gif: "https://lh3.googleusercontent.com/-dYRaIl6vww0/Vy6GmxzKYrI/AAAAAAAAADo/WUG33ZYZCXkyENqy2XI_w2Dg90d0joNsw/w500-h259/47fe28ea49779279fdde824d6cba111a63752846_hq.gif",
      annonce: "Que les Ténèbres s'abattent sur ceux qui crachent vers les cieux !",
      type: "Ténèbre"
    },
    e: {
      nom: "Heal",
      gif: "https://cdn.discordapp.com/attachments/498122570822844419/554304684358107136/3PqxjpgzJ7bqgJk_GUrPDaQpL8I100x100.gif",
      annonce: "Le Soin du Ouin !",
      type: "Neutre"
    },
    d: {
      nom: "Demonic Shield",
      gif: "http://img2.wikia.nocookie.net/__cb20140806052317/powerlisting/images/6/64/Dark_Shield.gif",
      annonce: "Le voile des Ténèbres et de la morts est de mon coté !",
      type: "Ténèbre"
    },
    f: {
      nom: "Surchauffe",
      gif: "https://cdn.discordapp.com/attachments/498122570822844419/553477380346216458/tenor_1.gif",
      annonce: "FEUUUUUUUW !",
      type: "Feu"
    },
    g: {
      nom: "Téléportation",
      gif: "https://66.media.tumblr.com/e562d21b6f785a012eea8b2ce44bd37c/tumblr_ns3tpxzq391upx3fco1_500.gif",
      annonce: "Bawoup",
      type: "Lumière"
    },

    h: {
      nom: "Lame Pourpre",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553498172672966686/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif",
      annonce: "Invocation : Lame Pourpre !",
      type: "Ténèbre"
    },
    i: {
      nom: "Griffe Ombres",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553486721040384000/592.gif",
      annonce: "Fufufufufufu~",
      type: "Ténèbre"
    },
    j: { 
      nom: "Card Shot",
      gif: "https://steamuserimages-a.akamaihd.net/ugc/831329494968935938/71C941570ECA9EF3B3F93C4F5DDFE0EAA042D673/",
      annonce: "100% Topdeck",
      type: "Lumière"
    },
    k: { 
      nom: "Band Throw",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553486740539703296/Bandages_de_Momie.gif",
      annonce: "Immobilisation !",
      type: "Lumière"
    },
    l: { 
      nom: "Tempête Noir",
      gif: "https://media1.tenor.com/images/1a6ccc93427b6a66cfe38fa09c2ceff9/tenor.gif?itemid=9235472",
      annonce: "Ominous Wind !",
      type: "Ténèbres"
    },
    m: { 
      nom: "Boost Wakfu",
      gif: "https://66.media.tumblr.com/f9fe3fa9bd76681b9dd1663afdc32cca/tumblr_ne6kerep4s1rilod0o1_500.gif",
      annonce: "Sent le Wakfu t'envahir !",
      type: "Lumière"
    },
    n: {
      nom: "SmokeBomb",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553486687075041290/Smokescreen.gif",
      annonce: "Voila le Brouillard de Guerre !",
      type: "Feu"
    },
    p: {
      nom: "Crystal Dash",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553510703424602113/1491658609_1.gif",
      annonce: "Leroy Jenkins Style !",
      type: "Lumiére"
    },
    o: {
      nom: "Spider Call",
      gif: "http://pa1.narvii.com/6372/7a144ef302f1c842da28490b18c5ab9d92e6f190_00.gif",
      annonce: "Les renforts arrivent !",
      type: "Vent"
    },
    q: {
      nom: "Balrog",
      gif: "https://thumbs.gfycat.com/ReflectingEagerBelugawhale-size_restricted.gif",
      annonce: "Toi qui voulais du renfort, te voila servis !",
      type: "Feu"
    },
    r: {
      nom: "Rosario",
      gif: "https://img3.wikia.nocookie.net/__cb20130722143011/swordartonline/images/f/fc/Vertical_Square.gif",
      annonce: "Meurt par le fer !",
      type: "Vent"
    },
    s: {
      nom: "Mudah",
      gif: "https://cdn.discordapp.com/attachments/498122570822844419/553145999015804928/2bc.gif",
      annonce: "ATATATATATATATATATATATATATA",
      type: "Feu"
    },
    t: {
      nom: "For+",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553587688221966336/tumblr_nqd1113Er21uo9l9co1_500.gif",
      annonce: "Que la puissance porte tes coups !",
      type: "Lumiére"
    },
    u: {
      nom: "Aura Sphere",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553587735231987722/3179789263_1_46_Vs9aJhuY.gif",
      annonce: "Attention au pouvoir de l'Aura !",
      type: "Lumiére"
    },
    v: {
      nom: "MultiClonage",
      gif: "https://cdn.discordapp.com/attachments/551844101327421451/553587603211812864/tumblr_lw5um6mKa11qczibyo1_500.gif",
      annonce: "Je suis ici ? Ou la ? Ou peut étre ici ?",
      type: "Vent"
    },
    w: {
      nom: "Lance-Patate",
      gif: "https://localtvwqad.files.wordpress.com/2014/10/rocket-explosion.gif?w=400&h=225&crop=1",
      annonce: "Poussez vous. Voila le Lance-Patate.",
      type: "Feu"
    },
    x: {
      nom: "Bouboulle",
      gif: "http://www.db-z.com/wp-content/uploads/2016/01/Golden-Freezer-attack-2.gif",
      annonce: "Piou piou piou piouuuuuuuuuuuuw !",
      type: "Feu"
    },
    y: {
      nom: "Sonic Kick",
      gif: "hthttps://orig12.deviantart.net/512c/f/2017/232/e/1/metal_dura_by_spidermang10-dbkr9oh.gif",
      annonce: "Boum ! Dans l'dos !",
      type: "Feu"
    },
    z: {
      nom: "Encrage",
      gif: "https://pa1.narvii.com/5870/52afbedce7ed1ce5a82dd57bb9bfb8420526b7bb_hq.gif",
      annonce: "Jetez l'Encre !",
      type: "Eau"
    },
    aa: {
      nom: "Dragon Wakup",
      gif: "https://pa1.narvii.com/6078/f3fa4089e81f54a0df056912e5f9acbdf9f3a944_hq.gif",
      annonce: "Une invocation lourde, ça en jette !",
      type: "Vent"
    },
    ab: {
      nom: "Starlight Unicorn MoonDance",
      gif: "https://j.gifs.com/oY7Q3B.gif",
      annonce: "Subit la puissance de Starlight Unicorn !",
      type: "Lumière"
    }  
}

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "557114023896678400";  //Max, met ici l'id du channel !

var channelStockIdK = "557113676914491402"; 

var dataBank = []; //Contient des tableaux : C'est la base de données quand le bot est actif !

var dataBankK = [];

//Declaration Fonction~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function read () { //lit le stockage discord et le met dans le stockage variable

    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockId).fetchMessages({ limit: 100 }) 
            .then(messages => 
               
                messages.forEach(function(valeur , clé) {
                    dataBank.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        )
        
    
};

function readK () { //lit le stockage discord et le met dans le stockage variable

    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockIdK).fetchMessages({ limit: 100 }) 
            .then(messages => 
               
                messages.forEach(function(valeur , clé) {
                    dataBankK.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        )
        
    
};

function postReserve (id) { //poste un message dans l'espace de stockage discord ( en théorie, l'id des utilisateurs ayant fait !!OwOLog)
    bot.channels.get(channelStockId).send(id);
    
}

function findUser (id) { //à partir de l'id d'un user, trouve l'indice de sa "fiche" dans le stockage => -1 si pas de fiche
    var userIndice;
    dataBank.forEach(function(valeur, clé) {
        if (id ===  valeur[0]) {
            userIndice = clé;
        }
    })
    if (userIndice === undefined) {
        return -1;
    } else { 
        return userIndice;
    }
}

function add (id, numOwO) { //Ajoute un OwO à un user
    if (findUser(id) != -1) {    

        bot.channels.get(channelStockId).fetchMessages({ limit: 100 }) //Trouve le message de stockage discord de l'user puis l'edit pour ajouter le owo

            .then(messages => 
                messages.forEach(function(msg, idMsg) {
                    
                    if (msg.content.split(' * ')[0] == id) {
                        bot.channels.get(channelStockId).fetchMessage(idMsg)
                            .then(message => 
                                message.edit(msg.content + " * " + numOwO)
                            
                            )
                            .catch(console.error)
                    }
                })
            )
            .catch(console.error)
        dataBank[findUser(id)].push(numOwO); //Ajoute le owo dans le stockage variable
    }
}
 
function gotOwO (id, numOwO) { //Verifie si un user a un OwO ! return true si il l'a, return false sinon


    var got = false;
    if (findUser(id) != -1 ) {

        dataBank[findUser(id)].forEach(function (valeur) {


            if (valeur === numOwO) {
                got = true;
            } 
            
        });
    
    return got;

    }


}

bot.on('ready',() => {
    console.log('Bot Ready')
})

bot.login (process.env.token);

bot.on('message', message => { //help
  if(message.content === "!!help"){
    var embed = new Discord.RichEmbed()
      .setTitle("Infos sur le bot")
      .setDescription("Ce bot vous donnes la possibilitée de capturer des MOwOnster, des petites créatures toutes mignones (pour la plupart, tout du moins).")
      .addField("Prefix :", "!!", true)
      .addBlankField() 
      .addField("!!help", "Affiche les commandes du bot.")
      .addField("!!OwOLog", "Commande à ne faire qu'une fois, pour se connecter au Bot.\n/!/ La faire plusieurs fois supprimera votre progression. /!/.")
      .addField("!!cat", "Commande pour attraper un MOwOnster lorsqu'il apparait.")
      .addField("!!dispo", "Commande pour voir quels Attaques sont disponibles.")
      .addField("!![Votre attaque]", "Lance une attaque")
      .addField("!!fight", "Transforme <#532536267368431646> en un terrain aléatoire de la dimension OwO (Fonctionnel uniquement dans ce salon).")
      .setColor("#68f17d")
      .setFooter("Amusez vous bien ! - Maxoin | Louloup | Senchi | Baz")
      message.channel.send(embed);
  }
})

bot.on('message', message => { // !!OwOLog ! faisable plusieurs fois !

    if (message.content === "!!OwOLog") {
        read();
        if (findUser(message.author.id) === -1) {
            postReserve(message.author.id); //stockage discord
            dataBank.push([message.author.id]); //stockage variable
            message.channel.send("Ok, c'est noté !")
        } else {
            message.channel.send("Tu es déjà enregistré ! Tu n'as pas à refaire cette commande.")
        }
    }



});

bot.on('message', message => {
    read()
    readK()
    console.log("Wesh les relous, ce soir on fout le zbeul")
})

bot.on('message', message => { //Ouverture de la dimension OwO
    if(message.content === "!!fight" && message.channel.id === "532536267368431646"){
        var dimproba = Math.floor(Math.random() * Math.floor(4))
        if(dimproba === 0){
        var embeddim = new Discord.RichEmbed()
           .setTitle("*Le Ring prend la forme de la Forêt Luxuriante*")
           .setImage("https://d2omnifng3m7y7.cloudfront.net/img/forets/coadou.jpg")
        bot.channels.send(embedp)
        }else if(dimproba === 1){
        var embeddim = new Discord.RichEmbed()
            .setTitle("*Le Ring prend la forme des Égouts de Blancherive*")
            .setImage("https://jolstatic.fr/www/captures/1816/2/107772.png")
        bot.channels.send(embedp)
        }else if(dimproba === 2){
        var embeddim = new Discord.RichEmbed()
            .setTitle("*Le Ring prend la forme du Village Abandonné*")
            .setImage("https://www.lecurionaute.fr/wp-content/uploads/2016/07/le-village-abandonne-d-occi-en-corse-770x360.jpg")
        bot.channels.send(embedp)
        }
    }
})

bot.on('message', message => { //Appartion MOwOnster
 if(message.content.includes("!!")){
  
 }else{
   if (findUser(message.author.id) === -1){
    
   }else{
     var spawn = Math.floor(Math.random() * Math.floor(100))
     console.log("wala")
     if(spawn <= 11){
       var kispawn =  Math.floor(Math.random() * Math.floor(6))
       console.log(kispawn)
       var embedp = new Discord.RichEmbed()
         .setTitle("Un MOwOnster est apparut !")
         .addField(`C'est un ${dataBankK[kispawn][1]} !`, 'Attrape le avec un "!!cat" !')
         .setImage(dataBankK[kispawn][3])
         .setColor("#351cc0")
         bot.channels.get("551556079067070474").send(embedp)
         catnum = kispawn
         salon = message.channel.id
     }
   }
}})

bot.on('message', message => { //Capture
 if(message.content === "!!cat"){
  if (findUser(message.author.id) === -1){
   
  }else{
    yuser = message.author.id
    if(catnum === ""){
      console.log("'^'")
    }else{
      add(yuser, dataBankK[catnum][2])
      message.channel.send(`Bien joué, ${message.author.username} ! Tu viens de capturer un ${dataBankK[catnum][1]}, COwOmbatant !`)
      catnum = "" 
    }
  }
}})

/*
  yuser = message.author.id
  if(gotOwO(yuser, "j") && message.content.includes('!!' + gifs.j.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.j.annonce)
      .setImage(gifs.j.gif)
      .setColor("#7caeec")
    message.channel.send(embed);
}})*/
