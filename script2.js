var listaBomb=[23,]
var listaNumeriUtente=[];
var numeroUtente;
var punteggio = 0;
var tentativi = 5;
var chek = false;
var numeroMinBomb = 1;
var numeroMaxBomb = 100;
var messaggio = "hai vinto"
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
  do {
    numeroUtente = parseInt(prompt("inserisci un numero"));
    range(numeroMinBomb,numeroMaxBomb,numeroUtente)
  } while (range(numeroMinBomb,numeroMaxBomb,numeroUtente) == false);
    if (isHere (listaNumeriUtente, numeroUtente) == false) {
        listaNumeriUtente.push(numeroUtente);
        console.log("random");
        if (isHere (listaBomb, numeroUtente) == true) {
            chek = true
            messaggio = "hai perso"
        }
        else {
          punteggio++
        }
        i++
        console.log(numeroUtente);
      }
    }

alert (messaggio+" "+ punteggio)













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
