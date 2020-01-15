var listaBomb=[23,]
var listaNumeriUtente=[];
var numeroUtente;
var punteggio = 0;
var tentativi = 5;
var chek = false;
var numeroMinBomb = 1;
var numeroMaxBomb = 100;
var messaggio = "hai vinto"
var difficolta = parseInt(prompt("inserisci una difficolta da 0 a 2"));

while (range(0,2,difficolta) == false) {
  difficolta = parseInt(prompt("inserisci una difficolta da 0 a 2"));
}
// creazione difficoltà
switch (difficolta) {
  case 1:
    numeroMaxBomb = 80;
    tentativi = 64
    console.log(tentativi);
    break;
    case 2:
      numeroMaxBomb = 50;
      tentativi = 34;
      break;
  default:
// fine difficolta
}
// creazione lista bombe non ripetute
while (listaBomb.length < 16) {
  numeroBomb= getRandomInt(numeroMinBomb,numeroMaxBomb);
  controllo = isHere(listaBomb,numeroBomb);
  if (controllo == false) {
    listaBomb.push(numeroBomb);
  }
}
listaBomb.sort();
console.log(listaBomb);
i = 0
while (i < tentativi && chek == false) {

    numeroUtente = parseInt(prompt("inserisci un numero"));
    range(numeroMinBomb,numeroMaxBomb,numeroUtente)
    while (range(numeroMinBomb,numeroMaxBomb,numeroUtente) == false){
      alert("inserisci un numero da 1 a"+numeroMaxBomb)
      numeroUtente = parseInt(prompt("inserisci un numero"));
      range(numeroMinBomb,numeroMaxBomb,numeroUtente)
    }
    while (isHere (listaNumeriUtente, numeroUtente) == true) {
        alert("hai gia inserito questo numero")
        numeroUtente = parseInt(prompt("inserisci un numero"));
    }
    if (isHere (listaNumeriUtente, numeroUtente) == false) {
        listaNumeriUtente.push(numeroUtente);

        if (isHere (listaBomb, numeroUtente) == true) {
            chek = true
            messaggio = "hai perso"
        }
        else {
          punteggio++
        }
        i++
      }
    }


alert (messaggio+" "+ punteggio)











// funzioni
function range(numMin,numMax,num){
  if (num >= numMin && num <=numMax) {
      return true
    }
    else {
      return false
    }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isHere (array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}
