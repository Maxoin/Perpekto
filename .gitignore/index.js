const Discord = require('discord.js');
var bot = new Discord.Client();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('pkmn.json')
const db = low(adapter)

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
      nom: "",
      gif: "",
      annonce: "",
      effet: ""
    }
}

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "552801442088484884";  //Max, met ici l'id du channel !

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
    if (message.content === "!!Log") {
        read()
        console.log("Wesh les relous, ce soir on fout le zbeul")
    }
  })

bot.on('message', message => { //Appartion MOwOnster
 if(message.content.includes("!!")){
  
 }else{
   if (findUser(message.author.id) === -1){
    
   }else{
     var spawn = ""
     console.log("wala")
     if(spawn <= 10){
       var kispawn =  Math.floor(Math.random() * Math.floor(26))
       console.log(kispawn)
         ideydb = db.get('mowo').filter({idey: kispawn}).find('idey').value()
         ideye = Object.values(ideydb)
       var embedp = new Discord.RichEmbed()
         .setTitle("Un MOwOnster est apparut !")
         .addField(`C'est un ${ideye[1]} !`, 'Attrape le avec un "!!cat" !')
         .setImage(ideye[2])
         .setColor("#351cc0")
         bot.channels.get("551531569060511774").send(embedp)
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
      add(yuser, ideye[3])
      message.channel.send(`Bien jouer ! Tu viens de capturer un ${ideye[1]}, COwOmbatant !`)
      catnum = "" 
    }
  }
}})

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
  if(gotOwO(yuser, "z") && message.content.includes('>' + gifs.y.nom)){
    var embed = new Discord.RichEmbed()
      .setTitle(gifs.y.annonce)
      .setImage(gifs.y.gif)
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
   }
}})