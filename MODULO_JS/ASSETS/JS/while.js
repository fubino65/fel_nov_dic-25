while (2 == 1) {
  console.log('entro nel while');
}
console.log('dopo while');
//let scelta = confirm('sono bella?');
let scelta = true;
console.log('scelta = ' + scelta);
while (scelta) {
  //scelta = confirm('sono bella?');
  scelta = false;
}

//voglio stampare i numeri compresi in un range utilizzando sia il ciclo for che il ciclo while
let da = 7,
  a = 15;
for (let i = da; i <= a; i++) {
  console.log(i);
}

let j = da;
while (j <= a) {
  console.log(j);
  j++;
}

//ESERCIZI

//1. Con il ciclo while  stampa i numeri pari compresi fra 20 e 4 dal più grande al più piccolo
da = 20;
a = 4;

while (da >= a) {
  if (da % 2 === 0) {
    console.log(da);
  }
  da--;
}

//SOLUZIONE 2 più compatta
let numero1 = 20;

while (numero1 >= 4) {
  console.log(numero1);
  numero1 -= 2;
}
//N.B. entrambe le soluzioni funzionano solo perchè si parte da un numero pari

//2. Dichiara una variabile test = true.Scrivi un ciclo while che abbia la variabile uguale a true come condizione e iteri solo due volte stampando ciao nella console;
//output ("ciao ciao")
let test = true;
contatore = 0;

while (test) {
  console.log('ciao');
  contatore++;
  if (contatore === 2) {
    test = false;
  }
}

//SECONDA SOLUZIONE MENO ADERENTE ALLA TRACCIA
while (test && contatore < 2) {
  console.log('ciao');
  contatore++;
}

// SOLUZIONE 3 (PARTENDO DAL NUMERO MASSIMO DI ITERAZIONI)
test = true;
contatore = 2;
while (test) {
  console.log('ciao');
  contatore--;
  if (contatore === 0) {
    test = false;
  }
}

//SOLUZIONE 4 (USO DI BREAK PER INTERROMPERE IL CICLO)
test = true;
contatore = 2;
while (test) {
  console.log('ciao');
  contatore--;
  if (contatore === 0) {
    break; //interrompe qualsiasi ciclo
  }
}

//3.  SIMULA UN GIOCO IN CUI IL COMPUTER PENSA A UN NUMERO COMPRESO FRA 0 E 6 E L'UTENTE DEVE INDOVINARLO. OGNI VOLTA CHE SBAGLIA GLI VIENE RIPROPOSTO IL PROMPT
let numeroDaIndovinare = 3;
scelta = prompt('indovina il numero magico (fra 0 e 6)');

while (scelta != numeroDaIndovinare && scelta != null) {
  //scelta != null permette all'utente di premere annulla
  scelta = prompt('ritenta');
}
if (scelta == numeroDaIndovinare) {
  //serve solo per gli utenti che non hanno premuto annulla
  alert('super bravissimo il numero da indovinare era ' + numeroDaIndovinare);
}
