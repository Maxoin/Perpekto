const Discord = require('discord.js');
var bot = new Discord.Client();

var catnum = ""
var salon = ""
var kispawn = 0
var yuser = ""
var gifs = {
    a: {
      nom: "à Reset",
      gif: "https://media.tenor.com/images/afdf9f5a7139daadbab681b46e9060f1/tenor.gif",
      annonce: "KUUWA ?!!!",
      effet: ""
    },
    b: {
      nom: "POM",
      gif: "https://i.pinimg.com/originals/b2/98/3a/b2983aa96a2c2078efd700f363c2a41c.gif",
      annonce: "Une pomme ?! OU ÇA ??!",
      effet: ""
    },
    c: {
      nom: "Kawaiiance",
      gif: "https://thumbs.gfycat.com/WellinformedDirectBorderterrier-size_restricted.gif",
      annonce: "On m'a appelé ? Jariv.",
      effet: ""
    },
    d: {
      nom: "Hachwar",
      gif: "https://i.makeagif.com/media/3-07-2016/kDRsOC.gif",
      annonce: "...",
      effet: ""
    },
    e: {
      nom: "Gaster Bluester",
      gif: "https://media1.tenor.com/images/d4e922f6079875c6627f95311c3b4cfc/tenor.gif?itemid=5879725",
      annonce: "FUYONS, BLUESTER !",
      effet: ""
    },
    f: {
      nom: "Dab",
      gif: "https://img.fireden.net/v/image/1540/37/1540371782616.gif",
      annonce: "Attaque de type poison !",
      effet: ""
    },
    g: {
      nom: "FONCEAITÊTEBAISSAIE",
      gif: "http://media.tumblr.com/359458eec13d42e28d005c7446bbfe40/tumblr_inline_nclb9rRuHl1sm1eq0.gif  ",
      annonce: "LEROOOOOOOOOOOOOOOOOOOOOOOOOOOOY...",
      effet: ""
    },
    h: {
      nom: "Viol D'âme",
      gif: "https://thumbs.gfycat.com/ForsakenComplexAmurratsnake-size_restricted.gif",
      annonce: "***9666966696669666966696666669***",
      effet: ""
    },
    i: {
      nom: "Lance-Patate",
      gif: "https://localtvwqad.files.wordpress.com/2014/10/rocket-explosion.gif?w=400&h=225&crop=1",
      annonce: "Poussez vous. Voila le Lance-Patate.",
      effet: ""
    },
    j: {
      nom: "Bulle d'Eau",
      gif: "https://data.whicdn.com/images/53032229/original.gif",
      annonce: "BLBLBLBLBLBLLBLBLBLBLBLBLBLBLLBBLLBBLLBLB",
      effet: ""
    },
    k: {
      nom: "Nonoeil d'Urgence",
      gif: "https://steamuserimages-a.akamaihd.net/ugc/394421071039533013/751406B81ABF25095895D17E4E781F7E1F011599/",
      annonce: "Je vais porté ton message ! J'y vole !",
      effet: ""
    },
    l: {
      nom: "Coup d'Corn",
      gif: "https://media1.tenor.com/images/f74ea1b96c0291c15c0939364e79bc76/tenor.gif?itemid=12592212",
      annonce: "Ça tombe bien, j'en ai pleins !",
      effet: ""
    },
    m: {
      nom: "Machouille",
      gif: "http://img3.wikia.nocookie.net/__cb20140826061016/freddy-fazbears-pizza/images/3/31/Bonnie_blarg.gif",
      annonce: "ANYAMNYAMNYAMNYAMNYAMNYAMNYAMNYAM",
      effet: ""
    },
    n: {
      nom: "Steam Sales",
      gif: "https://i.imgur.com/VsKmvT9.gif",
      annonce: "Tu as tout dépensé avant, patate !",
      effet: ""
    },
    o: {
      nom: "Regard Cute",
      gif: "https://2.bp.blogspot.com/-G_hxgx8N1J4/WKmuDdtP42I/AAAAAAAGByg/XBAjW6J139EbLAZACLwsOeix5qnJRquNgCLcB/s1600/AW379865_12.gif",
      annonce: "Ze veux que l'on me pat.",
      effet: ""
    },
    p: {
      nom: "pat",
      gif: "https://66.media.tumblr.com/b6492da3e16252d0d6be9a14b40f528a/tumblr_n6s3kx6dxT1tddjuxo1_500.gif",
      annonce: "Nyaa~",
      effet: ""
    },
    q: {
      nom: "snob",
      gif: "https://orig00.deviantart.net/3059/f/2015/140/3/e/close_of_up_by_fawfuls_minion-d8u1ntf.gif",
      annonce: "Fufufufufu~",
      effet: ""
    },
    r: {
      nom: "Sasukoeil",
      gif: "https://media2.giphy.com/media/mzYQ4fp5jn9SM/source.gif",
      annonce: "あなたはまだそれを知りませんが、あなたはすでに死んでいます。",
      effet: ""
    },
    s: {
      nom: "nom",
      gif: "https://media.giphy.com/media/39YrN5qQvUtfW/giphy.gif",
      annonce: "GATOOOOOOOONomnomnomnomnomnomnom",
      effet: ""
    },
    t: {
      nom: "shrug",
      gif: "https://gifimage.net/wp-content/uploads/2018/11/puro-changed-gif-1.gif",
      annonce: "Hé bah ze sais pas.",
      effet: ""
    },
    u: {
      nom: "Niklavi",
      gif: "https://lh3.googleusercontent.com/-TC6LitvVzMc/WPKH_Ro4nqI/AAAAAAAAB4I/jEnC7uoJF6EnyFz6PQyOhtgmaoPG7lWoQCJoC/w290-h300-n-rw/tumblr_inline_nuls3cVXSa1si73t5_500.gif",
      annonce: "NIKAIVOU",
      effet: ""
    },
    v: {
      nom: "Starlight Unicorn MoonDance",
      gif: "https://j.gifs.com/oY7Q3B.gif",
      annonce: "Subit la puissance de Starlight Unicorn !",
      effet: ""
    },
    w: {
      nom: "Mochetée",
      gif: "https://66.media.tumblr.com/bd3c64511033f1a1ffa9ff47d95eb4dc/tumblr_nsu1h0Z2fl1uuck0ko8_400.gif",
      annonce: "Je ne suis pas moche ! Je suis un Scientifique fou ! Nyahahahahaidhqusofgbdhsqijvgsdkhfnis...",
      effet: ""
    },
    x: {
      nom: "Lance-Flamme",
      gif: "https://media1.tenor.com/images/a92907da589b73ac05677929a980b77e/tenor.gif?itemid=5634757",
      annonce: "LE FEUUUUUUUUUUUUW",
      effet: ""
    },
    y: {
      nom: "/tp",
      gif: "https://66.media.tumblr.com/e562d21b6f785a012eea8b2ce44bd37c/tumblr_ns3tpxzq391upx3fco1_500.gif",
      annonce: "Bawoup",
      effet: ""
    },
    z: {
      nom: "wantmiam",
      gif: "http://pa1.narvii.com/6608/b97b677870ef9a17a55ad974892b4efb08699116_00.gif",
      annonce: "Z'ai faim, ze peux avwar à manzer, ssiteuplait ?",
      effet: ""
    }
}

var mowo = {
  0: {
    idey: 0,
    nom: "Birdo",
    image: "https://vignette.wikia.nocookie.net/mario/images/a/a2/Birdo_MP9.png/revision/latest?cb=20130718081823&path-prefix=fr",
    gifattrib: "b"
  },
  1: {
    idey: 1,
    nom: "Powtaytow",
    image: "https://i.imgur.com/7duC8bA.jpg",
    gifattrib: "i"
  },
  2: {
    idey: 2,
    nom: "Resetti",
    image: "https://vignette.wikia.nocookie.net/slg/images/2/2b/Mr._Resetti_Animal_crossing.png/revision/latest?cb=20160621155518&path-prefix=fr",
    gifattrib: "a"
  },
  3: {
    idey: 3,
    nom: "Puro",
    image: "https://i.pinimg.com/originals/84/56/97/8456972aa1ba1efa39454490e4a944fd.jpg",
    gifattrib: "t"
  },
  4: {
    idey: 4,
    nom: "Dabweegi",
    image: "https://ih0.redbubble.net/image.416146853.3061/ap,550x550,12x16,1,transparent,t.u2.png",
    gifattrib: "f"
  },
  5: {
    idey: 5,
    nom: "Leeroy Jenkins",
    image: "https://www.hearthnews.fr/images/Leeroy_jenkins.jpg",
    gifattrib: "g"
  },
  6: {
    idey: 6,
    nom: "Mockey",
    image: "https://t3.rbxcdn.com/d8c22f991ee4410a29ca1ace30a932ed",
    gifattrib: "u"
  },
  7: {
    idey: 7,
    nom: "Cyber-Pépito",
    image: "https://i.servimg.com/u/f58/19/58/55/75/granol10.png",
    gifattrib: "v"
  },
  8: {
    idey: 8,
    nom: "Hippo",
    image: "https://www.nautiljon.com/images/perso/00/83/hippo_10338.jpg",
    gifattrib: "j"
  },
  9: {
    idey: 9,
    nom: "Oeil de Chtulu",
    image: "http://images6.fanpop.com/image/photos/35200000/Eye-Of-Cthulhu-terraria-35278349-894-894.jpg",
    gifattrib: "k"
  },
  10: {
    idey: 10,
    nom: "Chi Chi",
    image: "https://vignette.wikia.nocookie.net/gumball/images/9/9e/Chi_Chi_vector.png/revision/latest?cb=20170816000524&path-prefix=fr",
    gifattrib: "l"
  },
  11: {
    idey: 11,
    nom: "Pyroli",
    image: "https://i.imgur.com/qhjpDlu.jpg",
    gifattrib: "r"
  },
  12: {
    idey: 12,
    nom: "Ombrage",
    image: "https://i.skyrock.net/7195/83917195/pics/3130998830_1_2_pWX0b1o8.png",
    gifattrib: "m"
  },
  13: {
    idey: 13,
    nom: "Fouinar",
    image: "https://4.bp.blogspot.com/-2pU-thJnlsg/VynJDvvpgOI/AAAAAAAACsg/mG9bvwvCL9sJU9JJQkfy-U3GpJiR9vIUACLcB/s1600/1317341303036.png",
    gifattrib: "c"
  },
  14: {
    idey: 14,
    nom: "Bulle",
    image: "https://vignette.wikia.nocookie.net/powerpuff/images/f/f9/Bulle_Profile.png/revision/latest/scale-to-width-down/260?cb=20180905192732&path-prefix=fr",
    gifattrib: "d"
  },
  15: {
    idey: 15,
    nom: "Blueberry",
    image: "https://ih1.redbubble.net/image.213382678.7353/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1u5.jpg",
    gifattrib: "e"
  },
  16: {
    idey: 16,
    nom: "Ben Drowned",
    image: "https://i.pinimg.com/originals/89/54/6f/89546f402cca3c85bf74a080407a684e.jpg",
    gifattrib: "h"
  },
  17: {
    idey: 17,
    nom: "Gaben",
    image: "https://www.pcgamesn.com/wp-content/uploads/2018/10/gabe_newell_meme-580x334.jpg",
    gifattrib: "n"
  },
  18: {
    idey: 18,
    nom: "Gracowitz",
    image: "https://vignette.wikia.nocookie.net/mario/images/5/59/M%26LSS%2BLSDB-Gracowitz.png/revision/latest/scale-to-width-down/160?cb=20171015093832&path-prefix=fr",
    gifattrib: "q"
  },
  19: {
    idey: 19,
    nom: "Biscuit Monster",
    image: "https://m.media-amazon.com/images/S/aplus-media/vc/388cedc4-283c-45bb-bcdd-d8efaf79bfa0.png",
    gifattrib: "s"
  },
  20: {
    idey: 20,
    nom: "Shiro",
    image: "https://vignette.wikia.nocookie.net/no-game-no-life/images/0/09/Shiro.png/revision/latest?cb=20170323163115",
    gifattrib: "p"
  },
  21: {
    idey: 21,
    nom: "Petit chat de type Aly",
    image: "https://i.pinimg.com/736x/3d/17/f4/3d17f442926202143cde9b0c2e3b3891.jpg",
    gifattrib: "o"
  },
  22: {
    idey: 22,
    nom: "Ludwig",
    image: "https://vignette.wikia.nocookie.net/mario/images/0/0c/Ludwig_Von_Koopa%2C_New_Super_Mario_Bros._U.png/revision/latest?cb=20121119172345&path-prefix=fr",
    gifattrib: "w"
  },
  23: {
    idey: 23,
    nom: "Entei",
    image: "https://i.pinimg.com/originals/38/bf/0f/38bf0f2efb67a870bae1b9aa8b6f0e72.png",
    gifattrib: "x"
  },
  24: {
    idey: 24,
    nom: "Nox",
    image: "http://image.noelshack.com/fichiers/2014/10/1393976452-p-104-a.jpg",
    gifattrib: "y"
  },
  25: {
    idey: 25,
    nom: "Nanachi",
    image: "https://myanimelist.cdn-dena.com/images/characters/7/303689.jpg",
    gifattrib: "z"
  },
}

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "591672121445580811";  //Max, met ici l'id du channel !

var dataBank = []; //Contient des tableaux : C'est la base de données quand le bot est actif !


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
        );
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
  bot.channels.get(channelStockId).fetchMessages({ limit: 100 }) //Trouve le message de stockage discord de l'user puis l'edit
      .then(messages => 
          messages.forEach(function(message, idMsg) {
              if (message.content.split(' * ')[0] == id) {
                  bot.channels.get(channelStockId).fetchMessage(idMsg)
                      .then(message => 
                          message.edit(message.content + " * " + numOwO)
                      )
                  }
          })
      )
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

bot.login("NDk3NTEyMDczMDM1Nzc2MDAw.XWuWJQ.kWUkyCLs1G3MWTBr-iMc_5lHMX8");//process.env.token

bot.on('message', message => { //help
  if(message.content === "!!help"){
    var embed = new Discord.RichEmbed()
      .setTitle("Infos sur le bot")
      .setDescription("Ce bot vous donnes la possibilitée de capturer des MOwOnster, des petites créatures toutes mignones (pour la plupart, tout du moins).")
      .addField("Prefix :", "!!", true)
      .addBlankField() 
      .addField("!!help", "Affiche les commandes du bot.")
      .addField("!!OwOLog", "Commande à ne faire qu'une fois, pour se connecter au Bot.")
      .addField("!!cat", "Commande pour attraper un MOwOnster lorsqu'il apparait.")
      .addField("!!dispo", "Commande pour voir quels Emotes sont disponibles.")
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

bot.on('message', message => { //Log
    if (message.content === "!!LogO") {
        read();
        console.log(mowo[13].nom)
        console.log("Wesh les relous, ce soir on fout le zbeul")
    }})

bot.on('message', message => { //Log
    if (message.content === "!!LogG") {
        read();
        console.log(gifs.a.nom)
        console.log("Wesh les relous, ce soir on fout le zbeul")
    }})

bot.on('message', message => {// same ^^^^ fait "check " + "quelque chose" pour vérifier si tu l'as dans ton message dans le stockage discord. (le bot return un boolean)
    if(message.content === "!!check") {
        if(gotOwO(message.author.id, message.content.split(' ')[1] )) {
            message.reply("true");
        }else {
            message.reply("false");
        }
    }
});

bot.on('message', message => { //Appartion MOwOnster
 read();
 if(message.content.includes("!!")){
  
 }else{
   if (findUser(message.author.id) === -1){
    
   }else{
     var spawn = Math.floor(Math.random() * Math.floor(100))
     console.log("wala")
     if(spawn <= 10){
       kispawn = Math.floor(Math.random() * Math.floor(26))
       console.log(kispawn)
       console.log(mowo[kispawn].nom)
       var embedp = new Discord.RichEmbed()
         .setTitle("Un MOwOnster est apparut !")
         .addField(`C'est un ${mowo[kispawn].nom} !`, 'Attrape le avec un "!!cat" !')
         .setImage(mowo[kispawn].image)
         .setColor("#351cc0")
         bot.channels.get("617644715373887500").send(embedp)
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
      add(yuser, mowo[catnum].gifattrib)
      message.channel.send(`Bien joué ! Tu viens de capturer un ${mowo[catnum].nom}, COwOmbatant !`)
      catnum = "" 
    }
  }
}})

bot.on('message', message => {
  if(message.content === "?nya"){
    setTimeout(function(){
      bot.channels.get("597757551286943744").send("?nya")
      console.log("pour être sur x3")
    }, 55000)
  }
})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "a") && message.content.includes('>' + gifs.a.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.a.annonce)
      .setImage(gifs.a.gif)
      .setColor("#d28f49")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "b") && message.content.includes('>' + gifs.b.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.b.annonce)
      .setImage(gifs.b.gif)
      .setColor("#dc2d96")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "c") && message.content.includes('>' + gifs.c.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.c.annonce)
      .setImage(gifs.c.gif)
      .setColor("#e3b072")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "d") && message.content.includes('>' + gifs.d.nom)){
   console.log("TARACE LA HACHE")
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.d.annonce)
      .setImage(gifs.d.gif)
      .setColor("#72d7e3")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "e") && message.content.includes('>' + gifs.e.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.e.annonce)
      .setImage(gifs.e.gif)
      .setColor("#8bf3f0")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "f") && message.content.includes('>' + gifs.f.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.f.annonce)
      .setImage(gifs.f.gif)
      .setColor("#8a00ef")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "g") && message.content.includes('>' + gifs.g.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.g.annonce)
      .setImage(gifs.g.gif)
      .setColor("#ff853c")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "h") && message.content.includes('>' + gifs.h.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.h.annonce)
      .setImage(gifs.h.gif)
      .setColor("#002a5e")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "i") && message.content.includes('>' + gifs.i.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.i.annonce)
      .setImage(gifs.i.gif)
      .setColor("#e2ba40")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "j") && message.content.includes('>' + gifs.j.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.j.annonce)
      .setImage(gifs.j.gif)
      .setColor("#7caeec")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "k") && message.content.includes('>' + gifs.k.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.k.annonce)
      .setImage(gifs.k.gif)
      .setColor("#ff0000")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "l") && message.content.includes('>' + gifs.l.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.l.annonce)
      .setImage(gifs.l.gif)
      .setColor("#ffd3d3")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "m") && message.content.includes('>' + gifs.m.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.m.annonce)
      .setImage(gifs.m.gif)
      .setColor("#5b28a6")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "n") && message.content.includes('>' + gifs.n.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.n.annonce)
      .setImage(gifs.n.gif)
      .setColor("#ecea00")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "o") && message.content.includes('>' + gifs.o.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.o.annonce)
      .setImage(gifs.o.gif)
      .setColor("#ffffff")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "p") && message.content.includes('>' + gifs.p.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.p.annonce)
      .setImage(gifs.p.gif)
      .setColor("#edb7ff")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "q") && message.content.includes('>' + gifs.q.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.q.annonce)
      .setImage(gifs.q.gif)
      .setColor("#41fc44")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "r") && message.content.includes('>' + gifs.r.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.r.annonce)
      .setImage(gifs.r.gif)
      .setColor("#ff881c")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "s") && message.content.includes('>' + gifs.s.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.s.annonce)
      .setImage(gifs.s.gif)
      .setColor("#3b82db")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "t") && message.content.includes('>' + gifs.t.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.t.annonce)
      .setImage(gifs.t.gif)
      .setColor("#595959")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "u") && message.content.includes('>' + gifs.u.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.u.annonce)
      .setImage(gifs.u.gif)
      .setColor("#000000")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "v") && message.content.includes('>' + gifs.v.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.v.annonce)
      .setImage(gifs.v.gif)
      .setColor("#b426c1")
    message.channel.send(embed);
}})


bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "w") && message.content.includes('>' + gifs.w.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.w.annonce)
      .setImage(gifs.w.gif)
      .setColor("#392bfe")
    message.channel.send(embed);
}})


bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "x") && message.content.includes('>' + gifs.x.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.x.annonce)
      .setImage(gifs.x.gif)
      .setColor("#ff6900")
    message.channel.send(embed);
}})


bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "y") && message.content.includes('>' + gifs.y.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.y.annonce)
      .setImage(gifs.y.gif)
      .setColor("#ff6900")
    message.channel.send(embed);
}})

bot.on('message', message => { //Gifs
  yuser = message.author.id
  if(gotOwO(yuser, "z") && message.content.includes('>' + gifs.z.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.z.annonce)
      .setImage(gifs.z.gif)
      .setColor("#ff6900")
    message.channel.send(embed);
}})

bot.on('message', message => { //Dispo Emotes
 if(message.content === "!!dispo"){
   if(gotOwO(yuser, "a")){
    message.channel.send(gifs.a.nom)
   }
   if(gotOwO(yuser, "b")){
    message.channel.send(gifs.b.nom)
   }
   if(gotOwO(yuser, "c")){
    message.channel.send(gifs.c.nom)
   }
   if(gotOwO(yuser, "d")){
    message.channel.send(gifs.d.nom)
   }
   if(gotOwO(yuser, "e")){
    message.channel.send(gifs.e.nom)
   }
   if(gotOwO(yuser, "f")){
    message.channel.send(gifs.f.nom)
   }
   if(gotOwO(yuser, "g")){
    message.channel.send(gifs.g.nom)
   }
   if(gotOwO(yuser, "h")){
    message.channel.send(gifs.h.nom)
   }
   if(gotOwO(yuser, "i")){
    message.channel.send(gifs.i.nom)
   }
   if(gotOwO(yuser, "j")){
    message.channel.send(gifs.j.nom)
   }
   if(gotOwO(yuser, "k")){
    message.channel.send(gifs.k.nom)
   }
   if(gotOwO(yuser, "l")){
    message.channel.send(gifs.l.nom)
   }
   if(gotOwO(yuser, "m")){
    message.channel.send(gifs.m.nom)
   }
   if(gotOwO(yuser, "n")){
    message.channel.send(gifs.n.nom)
   }
   if(gotOwO(yuser, "o")){
    message.channel.send(gifs.o.nom)
   }
   if(gotOwO(yuser, "p")){
    message.channel.send(gifs.p.nom)
   }
   if(gotOwO(yuser, "q")){
    message.channel.send(gifs.q.nom)
   }
   if(gotOwO(yuser, "r")){
    message.channel.send(gifs.r.nom)
   }
   if(gotOwO(yuser, "s")){
    message.channel.send(gifs.s.nom)
   }
   if(gotOwO(yuser, "t")){
    message.channel.send(gifs.t.nom)
   }
   if(gotOwO(yuser, "u")){
    message.channel.send(gifs.u.nom)
   }
   if(gotOwO(yuser, "v")){
    message.channel.send(gifs.v.nom)
   }
   if(gotOwO(yuser, "w")){
    message.channel.send(gifs.w.nom)
   }
   if(gotOwO(yuser, "x")){
    message.channel.send(gifs.x.nom)
   }
   if(gotOwO(yuser, "y")){
    message.channel.send(gifs.y.nom)
   }
   if(gotOwO(yuser, "z")){
    message.channel.send(gifs.z.nom)
   }}})
