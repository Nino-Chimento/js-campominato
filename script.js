// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var punteggio = 0;

numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 100"));
while (numeroUtente < 1 || numeroUtente > 100) {
  numeroUtente = parseInt(prompt("inserisci un numero comrpeso da 1 a 100"))
}
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
  }
}
controllo = comparazione(listaNumeriPc,numeroUtente);
console.log(controllo);
