var listaBomb=[]
var listaNumeriUtente =[];
var punteggio = 0;
var bomba = false;
var numeroMinBomb = 1;
var numeroMaxBomb =100;
var numeroUtente;
var tentativi = 84;
// creazione bombe
while (listaBomb.length < 16) {
  numeroBomb= getRandomInt(numeroMinBomb,numeroMaxBomb);
  controllo = isHere(listaBomb,numeroBomb);
  if (controllo == false) {
    listaBomb.push(numeroBomb);
  }
}
console.log(listaBomb);
console.log($(".cella1"));
// inizio giocatore
$("button").click(
  function play() {

      numeroUtente=document.getElementById("numero").value;
      if (isHere (listaNumeriUtente, numeroUtente) == true) {
        alert("hai gia inserito questo numero")
      }
      listaNumeriUtente.push(numeroUtente);
      console.log(listaNumeriUtente);
      if (isHere (listaBomb, numeroUtente)) {
        casellaDaColorare = "cella"+numeroUtente;
        document.getElementById(casellaDaColorare).classList.add("red");
        alert("hai perso");

      }
      else if (punteggio == 84) {
        alert("hai vinto")
      }
      else {
        punteggio++
        $("span").text(punteggio)
        var casellaDaColorare = "cella"+numeroUtente;
        document.getElementById(casellaDaColorare).classList.add("green")
      }
    }
  )












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
