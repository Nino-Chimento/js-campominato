var listaBomb=[23,]
var listaNumeriUtente=[];
var punteggio = 0;
var tentativi = 5;
var chek = false;


for (var i = 0; i < 8; i++) {
  listaBomb.push(getRandomInt(1,100))
}

random = range(1,100,8)
console.log(random);

















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
