// TUTTI I CICLI INSIEME!!!!!
//Scrivi un programma che prenda una stringa  e stampi i caratteri della stringa al contrario utilizzando tutti i cicli che abbiamo imparato
console.log('prima');

// utilizziamo il ciclo for
stringa = 'inseriamo una stringa';
stringaInvertita = '';
//P1 dichiarazione e inizializzazione/ P2 condizione /P3 calcolatore
for (let i = stringa.length - 1; i >= 0; i--) {
  stringaInvertita += stringa[i];
}

console.log('stringaInvertita:', stringaInvertita);

// utilizziamo while
stringa = 'stringa';
stringaInvertita = '';
let i = stringa.length - 1;
while (i >= 0) {
  stringaInvertita += stringa[i];
  i--; //si va indietro
}
console.log('stringaInvertita:', stringaInvertita);

// CICLO DO WHILE
stringa = 'stringa';
stringaInvertita = '';

i = stringa.length - 1;
// CON IL DO WHILE
do {
  stringaInvertita += stringa[i];
  i--; //si va indietro
} while (i >= 0);
console.log('stringaInvertita:', stringaInvertita);
console.log(stringaInvertita);

//Scrivi un programma che calcoli la somma dei numeri dispari da 1 a 10 utilizzando tutti i cicli che abbiamo imparato
let somma = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    somma += i;
  }
}
console.log(somma);

somma = 0;
let j = 1;
while (j <= 10) {
  if (j % 2) {
    somma += j;
  }
  j++;
}
console.log(somma);

somma = 0;
let k = 1;
do {
  if (k % 2) {
    somma += k;
  }
  k++;
} while (k <= 10);
console.log(somma);

//Scrivi un ciclo for che stampi tutti i numeri da 1 a 50 che sono divisibili sia per 3 che per 5.
for (let i = 1; i <= 50; i++) {
  if (!(i % 3) && !(i % 5)) {
    //if ((i % 3==0) && (i % 5==0)) {
    console.log(i);
  }
}
//Dato un numero (esempio: 45678), usa un ciclo while per contare quante cifre ha. Suggerimento: dividi il numero per 10
// finché non diventa 0.
let numero = 456545555555;
let contatore = 0;
let orig = numero;

while (orig > 0) {
  orig = parseInt(orig / 10); // divido per 10 e tolgo i decimali
  contatore++;
}
console.log('Il numero ' + numero + ' ha ' + contatore + ' cifre');

//SE VOLESSI USARE LA STRINGA
numero = 456545555555;
console.log('Il numero ' + numero + ' ha ' + (numero + '').length + ' cifre');

//Usa un ciclo do...while che sommi i numeri consecutivi (1+2+3+4...) finché la somma non supera 200. Stampa quanti numeri sono stati sommati.
somma = 0;
let numeroCorrente = 1;
contatore = 0;

do {
  somma = somma + numeroCorrente;
  contatore++;
  numeroCorrente++;
} while (somma + numeroCorrente <= 200);

console.log('Sono stati sommati ' + contatore + ' numeri');
console.log('La somma finale è: ' + somma);

//Calcola il prodotto (moltiplicazione) dei primi 5 numeri pari (2×4×6×8×10) usando un ciclo while.
let prodotto = 1; // elemento neutro della moltiplicazione
let numeroPari = 2; //primo numero pari
contatore = 0;

while (contatore < 5) {
  prodotto *= numeroPari;
  numeroPari += 2;
  contatore++;
}
console.log(prodotto);
