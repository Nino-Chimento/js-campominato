var listaBomb=[23,]
var listaNumeriUtente=[];
var punteggio = 0;
var tentativi = 5;
var chek = false;
var numeroMinBomb = 1;
var numeroMaxBomb = 100;
// creazione lista bombe non ripetute
while (listaBomb.length < 16) {
  listaBomb.push(numeroMinBomb,numeroMaxBomb)
}
console.log(listaBomb);















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

function chek(array,valore){
  for (var i = 0; i < array.length; i++) {
    if (valore == array[i]) {
        return true;
    }
  }
}
