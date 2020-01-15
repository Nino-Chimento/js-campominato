var listaBomb=[23,]
var listaNumeriUtente=[];
var numeroUtente;
var punteggio = 0;
var tentativi = 5;
var chek = false;
var numeroMinBomb = 1;
var numeroMaxBomb = 100;
// creazione lista bombe non ripetute
while (listaBomb.length < 16) {
  numeroBomb= getRandomInt(numeroMinBomb,numeroMaxBomb);
  controllo = isHere(listaBomb,numeroBomb);
  if (controllo == false) {
    listaBomb.push(numeroBomb);
  }
}
console.log(listaBomb);
i = 0
while (i < tentativi) {
  do {
    numeroUtente = parseInt(prompt("inserisci un numero"))
  } while (range(numeroMinBomb,numeroMaxBomb,numeroUtente == false));
  i++
  console.log(numeroUtente);
}














// funzioni
function range(numMin,numMax,num){
  if (num >= numMin && num <=numMax) {
      return true
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
