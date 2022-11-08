let voto1 = document.getElementById('voto1');
let voto2 = document.getElementById('voto2');
let voto3 = document.getElementById('voto3');
let voto4 = document.getElementById('voto3');
let numero = 1
let total  = 0
voto1.addEventListener("click", () => {
          for(let inicio = 0; inicio<=numero; inicio++)
            {
              total += numero / 100
            }
            alert("Usted voto un total de " +total+" veces");
            numero+1;
               })