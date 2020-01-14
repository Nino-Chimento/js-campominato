
var punteggio = 0;
var controllo;
var possibilita = 0;
var numeroUtente;

// creazione nuermi random
var listaNumeriPc =[23,];
for (var i = 0; i <16; i++) {
  numeroCreato = getRandomInt(1,100);
  listaNumeriPc.push(numeroCreato)
  }
  console.log(listaNumeriPc);
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
for (var i = 0; i < 84; i++) {
    numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 100"));
    while (numeroUtente < 1 || numeroUtente > 100) {
      numeroUtente = parseInt(prompt("devi inserire un numero da 1 a 100"))
    }
    controllo = comparazione(listaNumeriPc,numeroUtente);
    console.log(controllo);
    if (controllo == true) {
      alert("hai perso" + punteggio)
      i = 84
    }
    else {
      punteggio++
      possibilita++
    }
}
console.log(punteggio);
console.log(possibilita);
