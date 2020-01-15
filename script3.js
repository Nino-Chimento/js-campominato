var listaBomb=[]
var listaNumeriUtente;
var punteggio = 0;
var bomba = false;
var numeroMinBomb = 1;
var numeroMaxBomb =100;
// creazione bombe
while (listaBomb.length < 16) {
  numeroBomb= getRandomInt(numeroMinBomb,numeroMaxBomb);
  controllo = isHere(listaBomb,numeroBomb);
  if (controllo == false) {
    listaBomb.push(numeroBomb);
  }
}

// funzioni
function range(numMin,numMax,num){
  if (num >= numMin && num <=numMax) {
      return true
    }
    else {
      return false
    }
}
// inizio giocatore
document.getElementById("play").addEventListener("click",
function play() {
  console.log("n");
}
)

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
