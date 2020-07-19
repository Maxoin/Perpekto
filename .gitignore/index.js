const Discord = require('discord.js');
var bot = new Discord.Client();

var i = 0

//Declaration Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var channelStockId = "734410959761965127";  //Max, met ici l'id du channel !

var dataBank = []; //Contient des tableaux : C'est la base de données quand le bot est actif !

var channelStockIdPersos = "734410862642855941";

var dataBankPersos = [];

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

function readPersos () { //lit le stockage discord et le met dans le stockage variable
    // met le contenu des messages dans dataBank
        (bot.channels.get(channelStockIdPersos).fetchMessages({ limit: 100 }) 
            .then(messages =>    
                messages.forEach(function(valeur , clé) {
                    dataBankPersos.push(valeur.content.split(" * "));
                })
            )
            .catch(console.error)
        );
    
};

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

function findUserPersos (id) { //à partir de l'id d'un user, trouve l'indice de sa "fiche" dans le stockage => -1 si pas de fiche
    var userIndice;
    dataBankPersos.forEach(function(valeur, clé) {
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

function gotOwOPersos (id, numOwO) { //Verifie si un user a un OwO ! return true si il l'a, return false sinon
    var got = false;
    if (findUser(id) != -1 ) {
        dataBankPersos[findUser(id)].forEach(function (valeur) {
            if (valeur === numOwO) {
                got = true;
            }            
        });    
    return got;
    }
}

bot.on('ready',() => {
    console.log('Bot Ready')
    read()
    readPersos()
})

bot.login(process.env.token);

bot.on('message', message => { //Template OST
    if(message.author.id === "395678267207843872" && message.content === "!!list"){
    message.channel.send("__**~Garen~**__\n*Émotions :*\n``karma``, ``sad``, ``hmm``\n*Combat :*\n``combat1``, ``combat2``, ``combat3``, ``combat4``, ``berzerk``")
    }
    if(message.author.id === "395678267207843872" && message.content === "!!hmm"){
    message.channel.send("https://www.youtube.com/watch?v=tnrJyvVF7l4")
    }
})

bot.on('message', message => {
    if(message.content.includes("!!atk ")){ 
        var attaque = message.content.split(" ")[1]
        var lanceur = message.content.split(" ")[2]
        var victime = message.content.split(" ")[3]
        var precp = 100
        var esqui = 100
        for(var i = 0; i < dataBank.length; i++){
          if(dataBank[i][0] === attaque){
            var puis = dataBank[i][1]
            var prec = dataBank[i][2]
          }
        }
        for(var ip = 0; ip < dataBankPersos.length; ip++){
          if(dataBankPersos[ip][0] === lanceur){
            var nom1 = dataBankPersos[ip][0]
            var niveau1 = dataBankPersos[ip][1]
            var pv1 = dataBankPersos[ip][2]
            var attak1 = dataBankPersos[ip][3]
            var def1 = dataBankPersos[ip][4]
            var vit1 = dataBankPersos[ip][5]
          }
        }
        for(var ipb = 0; ipb < dataBankPersos.length; ipb++){
          if(dataBankPersos[ipb][0] === victime){
            var nom2 = dataBankPersos[ipb][0]
            var niveau2 = dataBankPersos[ipb][1]
            var pv2 = dataBankPersos[ipb][2]
            var attak2 = dataBankPersos[ipb][3]
            var def2 = dataBankPersos[ipb][4]
            var vit2 = dataBankPersos[ipb][5]
          }
        }
        if(message.content.includes("atk+1") || message.content.includes("Atk+1")){
            attak1 *= 1.5
        }
        if(message.content.includes("atk+2") || message.content.includes("Atk+2")){
            attak1 *= 2
        }
        if(message.content.includes("atk+3") || message.content.includes("Atk+3")){
            attak1 *= 2.5
        }
        if(message.content.includes("atk+4") || message.content.includes("Atk+4")){
            attak1 *= 3
        }
        if(message.content.includes("atk+5") || message.content.includes("Atk+5")){
            attak1 *= 3.5
        }
        if(message.content.includes("atk+6") || message.content.includes("Atk+6")){
            attak1 *= 4
        }
        if(message.content.includes("def+1") || message.content.includes("Def+1")){
            def2 *= 1.5
        }
        if(message.content.includes("def+2") || message.content.includes("Def+2")){
            def2 *= 2
        }
        if(message.content.includes("def+3") || message.content.includes("Def+3")){
            def2 *= 2.5
        }
        if(message.content.includes("def+4") || message.content.includes("Def+4")){
            def2 *= 3
        }
        if(message.content.includes("def+5") || message.content.includes("Def+5")){
            def2 *= 3.5
        }
        if(message.content.includes("def+6") || message.content.includes("Def+6")){
            def2 *= 4
        }
        if(message.content.includes("atkS+1") || message.content.includes("AtkS+1") || message.content.includes("atks+1") || message.content.includes("Atks+1")){
            attakS1 *= 1.5
        }
        if(message.content.includes("atkS+2") || message.content.includes("AtkS+2") || message.content.includes("atks+2") || message.content.includes("Atks+2")){
            attakS1 *= 2
        }
        if(message.content.includes("atkS+3") || message.content.includes("AtkS+3") || message.content.includes("atks+3") || message.content.includes("Atks+3")){
            attakS1 *= 2.5
        }
        if(message.content.includes("atkS+4") || message.content.includes("AtkS+4") || message.content.includes("atks+4") || message.content.includes("Atks+4")){
            attakS1 *= 3
        }
        if(message.content.includes("atkS+5") || message.content.includes("AtkS+5") || message.content.includes("atks+5") || message.content.includes("Atks+5")){
            attakS1 *= 3.5
        }
        if(message.content.includes("atkS+6") || message.content.includes("AtkS+6") || message.content.includes("atks+6") || message.content.includes("Atks+6")){
            attakS1 *= 4
        }
        if(message.content.includes("defS+1") || message.content.includes("DefS+1") || message.content.includes("defs+1") || message.content.includes("Defs+1")){
            defS2 *= 1.5
        }
        if(message.content.includes("defS+2") || message.content.includes("DefS+2") || message.content.includes("defs+2") || message.content.includes("Defs+2")){
            defS2 *= 2
        }
        if(message.content.includes("defS+3") || message.content.includes("DefS+3") || message.content.includes("defs+3") || message.content.includes("Defs+3")){
            defS2 *= 2.5
        }
        if(message.content.includes("defS+4") || message.content.includes("DefS+4") || message.content.includes("defs+4") || message.content.includes("Defs+4")){
            defS2 *= 3
        }
        if(message.content.includes("defS+5") || message.content.includes("DefS+5") || message.content.includes("defs+5") || message.content.includes("Defs+5")){
            defS2 *= 3.5
        }
        if(message.content.includes("defS+6") || message.content.includes("DefS+6") || message.content.includes("defs+6") || message.content.includes("Defs+6")){
            defS2 *= 4
        }
        
        if(message.content.includes("atk-1") || message.content.includes("Atk-1")){
            attak1 /= 1.5
        }
        if(message.content.includes("atk-2") || message.content.includes("Atk-2")){
            attak1 /= 2
        }
        if(message.content.includes("atk-3") || message.content.includes("Atk-3")){
            attak1 /= 2.5
            console.log(attak1)
        }
        if(message.content.includes("atk-4") || message.content.includes("Atk-4")){
            attak1 /= 3
        }
        if(message.content.includes("atk-5") || message.content.includes("Atk-5")){
            attak1 /= 3.5
        }
        if(message.content.includes("atk-6") || message.content.includes("Atk-6")){
            attak1 /= 4
        }
        if(message.content.includes("def-1") || message.content.includes("Def-1")){
            def2 /= 1.5
        }
        if(message.content.includes("def-2") || message.content.includes("Def-2")){
            def2 /= 2
        }
        if(message.content.includes("def-3") || message.content.includes("Def-3")){
            def2 /= 2.5
        }
        if(message.content.includes("def-4") || message.content.includes("Def-4")){
            def2 /= 3
        }
        if(message.content.includes("def-5") || message.content.includes("Def-5")){
            def2 /= 3.5
        }
        if(message.content.includes("def-6") || message.content.includes("Def-6")){
            def2 /= 4
        }
        var crit = Math.floor(Math.random() * Math.floor(100))
        if(message.content.includes("Crit+1") || message.content.includes("crit+1")){
            crit += 10
        }
        if(message.content.includes("Crit+2") || message.content.includes("crit+2")){
            crit += 15
        }
        if(message.content.includes("Crit+3") || message.content.includes("crit+3")){
            crit += 20
        }
        if(message.content.includes("Crit+4") || message.content.includes("crit+4")){
            crit += 25
        }
        if(message.content.includes("Crit+5") || message.content.includes("crit+5")){
            crit += 30
        }
        if(message.content.includes("Esq+1") || message.content.includes("esq+1")){
            esqui = 133
        }
        if(message.content.includes("Esq+2") || message.content.includes("esq+2")){
            esqui = 167
        }
        if(message.content.includes("Esq+3") || message.content.includes("esq+3")){
            esqui = 200
        }
        if(message.content.includes("Esq-1") || message.content.includes("esq-1")){
            esqui = 75
        }
        if(message.content.includes("Esq-2") || message.content.includes("esq-2")){
            esqui = 60
        }
        if(message.content.includes("Esq-3") || message.content.includes("esq-3")){
            esqui = 50
        }
        if(message.content.includes("Pre+1") || message.content.includes("pre+1")){
            precp = 133
        }
        if(message.content.includes("Pre+2") || message.content.includes("pre+2")){
            precp = 167
        }
        if(message.content.includes("Pre+3") || message.content.includes("pre+3")){
            precp = 200
        }
        if(message.content.includes("Pre-1") || message.content.includes("pre-1")){
            precp = 75
        }
        if(message.content.includes("Pre-2") || message.content.includes("pre-2")){
            precp = 60
        }
        if(message.content.includes("Pre-3") || message.content.includes("pre-3")){
            precp = 50
        }
        var degz = Math.round((((((niveau1*0.4)+2)*attak1*puis)/(def2*50)+2)) * 1) / 1

        console.log("Type : " + type + " & " + typdegz + " Crit = " + crit)
        var hit = (precp / esqui) * prec
        var probahit = Math.floor(Math.random() * Math.floor(100))
        console.log(hit + "/" + probahit)
        if(crit >= 80 && (probahit <= hit || probahit === hit)){
            degz *= 2
            message.channel.send("**Coup Critique !**")
        }   
        var testvit = vit2 * 2
        if(probahit <= hit || probahit === hit){
            message.channel.send("L'attaque fait **" + degz + "** points de dégàts !")
            if(testvit <= vit1 || testvit === vit2){
            message.channel.send("La vitesse de " + nom1 + " lui fait assainer une nouvelle attaque ! **" + degz2 + "** points de dégàts supplémentaires pour " + nom2 + " !")
            }
        }
        if(probahit >= hit){
            message.channel.send(nom1 + " rate son attaque !")
        }
    }
})

bot.on('message', message => {
    if(message.content.includes("!!vs ")){
        var vs1 = message.content.split(" ")[1]
        var vs2 = message.content.split(" ")[2]
        for(var ipv1 = 0; ipv1 < dataBankPersos.length; ipv1++){
          if(dataBankPersos[ipv1][0] === vs1){
            var nom1 = dataBankPersos[ipv1][0]
            var pv1 = dataBankPersos[ipv1][2]
          }
        }
        for(var ipv2 = 0; ipv2 < dataBankPersos.length; ipv2++){
          if(dataBankPersos[ipv2][0] === vs2){
            var nom2 = dataBankPersos[ipv2][0]
            var pv2 = dataBankPersos[ipv2][2]
          }
        }
    }
})

bot.on('message', message => {
    if(message.content === "!!read"){
        dataBank = []
        dataBankPersos = []
        read()
        readPersos()
        console.log(dataBank)
        console.log(dataBankPersos)
    }
})
