//APPLICAZIONE AGLI ARRAY

let regioni = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia-Romagna',
  'Friuli-Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino-Alto Adige',
  'Umbria',
  "Valle d'Aosta",
  'Veneto'
];

//let options = `<option value="${regioni[index]}">${regioni[index]}</option>`;
let options = '';
for (let i = 0; i < regioni.length; i++) {
  //element = regioni[i];
  //   options += `<option value="${element}">${element}</option>`;
  options += `<option value="${regioni[i]}">${regioni[i]}</option>`;
}

console.log(options);

//APPLICAZIONE SLEGATA DAGLI ARRAY
//voglio stampare tutti i numeri da 3 a 10 compresi

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//voglio stampare tutti i numeri da 8 a 23 escluso
for (let i = 8; i < 23; i++) {
  console.log(i);
}

//ESERCIZI
//1. Data una stringa e un numero N, stampa N volte la stringa
let stringa = 'che bello!';
let num = 5;
for (let i = 0; i < num; i++) {
  console.log(stringa);
}

//2. Scrivere un ciclo for che iteri da 0 a 20 compreso. Ad ogni iterazione verificherà se il numero è pari o dispari. Dopo il ciclo stampare a video le due stringhe seguenti: Numeri pari = 0 2 4… Numeri dispari = 1 3 5…
let pari = 'Numeri pari = ';
let dispari = 'Numeri dispari = ';
for (let i = 0; i <= 20; i++) {
  //   if (!(i % 2)) {
  if (i % 2 === 0) {
    //caso pari
    pari += i + ' ';
  } else {
    //caso dispari
    dispari += i + ' ';
  }
}
console.log(pari);
console.log(dispari);

//3. Scrivere un ciclo che stampi la tabellina del 7 : 7x1 = 7
let base = '7';
// let base = prompt('scegli la base');
if ((typeof base == 'number' || typeof base == 'string') && +base) {
  for (let i = 1; i <= 10; i++) {
    // console.log(base + ' x ' + i + ' = ' + base * i);
    console.log(`${base} x ${i} = ${base * i}`);
  }
} else {
  //alert('inserisci un numero valido');
  console.log('inserisci una base valida');
}

//4.Definire un array contenente 7 numeri e utilizzando un ciclo for stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)
let numeri = [6, 4, 1, 9, 7, 5, 99];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];
  somma += numero;
}
let media = somma / numeri.length;
console.log('media = ' + media);

//5)Definire un array contenente i cognomi di 20 studenti.Gli studenti il cui cognome inizia con una lettera compresa fra A e J inclusa saranno assegnati al prof Rossi, gli altri al prof.Bianchi.Utilizzare un ciclo for e popolare un array per professore contenente i cognomi degli studenti assegnatigli.
//per estrarre la prima lettera di una stringa possiamo fare stringa[0]
//per aggiungere un elemento in coda a un array possiamo usare il metodo .push(elemento). bianchiArr.push(cognome). Però provate a pensare come farlo senza usare il push.

//console.log("r" <"z");

let studenti = [
  'Roberti',
  'Ferrari',
  'Esposito',
  'Jianchi',
  'Ricci',
  'Conti',
  'Kusso',
  'Costa',
  'Rizzo',
  'Fontana',
  'Moretti',
  'Fabbri',
  'Sanna',
  'Neri',
  'Costantini',
  'Sorentino',
  'Ruggero',
  'Pagano',
  'Vitali',
  'Bellini'
];

studenti = [
  'Roberti',
  'ferrari',
  'Esposito',
  'Jianchi',
  'ricci',
  'Conti',
  'Kusso',
  'costa',
  'Rizzo',
  'Fontana',
  'Moretti',
  'Fabbri',
  'sanna',
  'Neri',
  'Costantini',
  'Sorentino',
  'Ruggero',
  'Pagano',
  'Vitali',
  'Bellini'
];

let bianchi = [],
  rossi = [];

for (let i = 0; i < studenti.length; i++) {
  const studente = studenti[i];
  let primaLettera = studente[0];

  // if ((primaLettera >= 'A' && primaLettera <= 'J') || (primaLettera >= 'a' && primaLettera <= 'j')) {
  // if (primaLettera >= 'A' && primaLettera <= 'J') {
  if (primaLettera.toUpperCase() >= 'A' && primaLettera.toUpperCase() <= 'J') {
    rossi[rossi.length] = studente; //la lunghezza di un array corrisponde anche al primo indice "libero" che possiamo utilizzare
  } else {
    bianchi[bianchi.length] = studente;
  }
}
console.log(rossi);
console.log(bianchi);

// FOR OF (solo per array e collection in generale)
bianchi = [];
rossi = [];

for (let studente of studenti) {
  let primaLettera = studente[0];

  // if ((primaLettera >= 'A' && primaLettera <= 'J') || (primaLettera >= 'a' && primaLettera <= 'j')) {
  if (primaLettera >= 'A' && primaLettera <= 'J') {
    rossi[rossi.length] = studente; //la lunghezza di un array corrisponde anche al primo indice "libero" che possiamo utilizzare
  } else {
    bianchi[bianchi.length] = studente;
  }
}
console.log(rossi);
console.log(bianchi);

let contatore = 1;
for (let regione of regioni) {
  console.log(contatore + ': ' + regione);
  contatore++;
}

//Hai un array con i voti di una classe: [7, 5, 8, 6, 9, 4, 7, 8, 10, 6, 5, 9]
// Usando un ciclo for...of:

// Conta quanti studenti hanno la sufficienza (voto >= 6)
// Conta quanti hanno l'insufficienza (voto < 6)
// Calcola la media dei voti
// Stampa tutti i risultati alla fine

let voti = [7, 5, 8, 6, 9, 4, 7, 8, 10, 6, 5, 9];

somma = 0;
let suff = 0;
let insuff = 0;
for (const voto of voti) {
  voto >= 6 ? suff++ : insuff++;
  somma += voto;
}
console.log('media voti = ' + somma / voti.length);
console.log('studenti insufficienti = ' + insuff);
console.log('studenti sufficienti = ' + suff);

//OPPURE

suff = 0;
insuff = 0;
for (const voto of voti) {
  if (voto >= 6) {
    suff++;
  }
  somma += voto;
}
console.log('media voti = ' + somma / voti.length);
console.log('studenti insufficienti = ' + (voti.length - suff));
console.log('studenti sufficienti = ' + suff);
