var difficolta = parseInt(prompt("inserisci un numero da 0 a 2"));
while (difficolta < 0 || difficolta >2) {
  difficolta = parseInt(prompt("inserisci un numero da 0 a 2"));
}
var punteggio = 0;
var controllo;
var possibilita = 0;
var numeroUtente;
var listaNumeriPc =[23,];
// creazione nuermi random
if (difficolta == 0) {
  for (var i = 0; i <16; i++) {
    numeroCreato = getRandomInt(1,100);
    listaNumeriPc.push(numeroCreato)
    }
    console.log(listaNumeriPc);
    for (var i = 0; i < 84; i++) {
        numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 100"));
        while (numeroUtente < 1 || numeroUtente > 100) {
          numeroUtente = parseInt(prompt("devi inserire un numero da 1 a 100"))
        }
        controllo = comparazione(listaNumeriPc,numeroUtente);
        console.log(controllo);
        if (controllo == true) {
          alert("hai perso il tuo punteggio e'"+" " + punteggio);
          i = 84
        }
        else if (punteggio == 84) {
          alert("secondo me hai barato ma hai vinto!!!")
        }
        else {
          punteggio++
        }
      }
}
else if (difficolta == 1) {
  for (var i = 0; i <16; i++) {
    numeroCreato = getRandomInt(1,80);
    listaNumeriPc.push(numeroCreato)
    }
    console.log(listaNumeriPc);
    for (var i = 0; i < 64; i++) {
        numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 80"));
        while (numeroUtente < 1 || numeroUtente > 80) {
          numeroUtente = parseInt(prompt("devi inserire un numero da 1 a 80"))
        }
        controllo = comparazione(listaNumeriPc,numeroUtente);
        console.log(controllo);
        if (controllo == true) {
          alert("hai perso il tuo punteggio e'"+" " + punteggio);
          i = 64
        }
        else if (punteggio == 64) {
          alert("secondo me hai barato ma hai vinto!!!")
        }
        else {
          punteggio++
        }
      }
}else if (difficolta == 2) {
  for (var i = 0; i <16; i++) {
    numeroCreato = getRandomInt(1,50);
    listaNumeriPc.push(numeroCreato)
    }
    console.log(listaNumeriPc);
    for (var i = 0; i < 34; i++) {
        numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 50"));
        while (numeroUtente < 1 || numeroUtente > 50) {
          numeroUtente = parseInt(prompt("devi inserire un numero da 1 a 50"))
        }
        controllo = comparazione(listaNumeriPc,numeroUtente);
        console.log(controllo);
        if (controllo == true) {
          alert("hai perso il tuo punteggio e'"+" " + punteggio);
          i = 34
        }
        else if (punteggio == 34) {
          alert("secondo me hai barato ma hai vinto!!!")
        }
        else {
          punteggio++
        }
      }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function comparazione(lista,numero) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i]==numero) {
      return true
    }
    else {
      return false
    }
  }
}
