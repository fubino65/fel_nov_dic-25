//IF SEMPLICE
let nome = 'paola';

if (nome === 'Paola' || nome == 'paola') {
  console.log("E' mia sorella");
}

if (nome === 'Luca') {
  console.log('Ricorda che non può condividere');
}

console.log('dopo if');

//IF ELSE
let temperatura = 36.9;

//esempio senza else per gestire condizioni alternative: molto poco ottimizzato
if (temperatura >= 37) {
  console.log('hai la febbre');
}

if (temperatura < 37) {
  console.log('stai benone');
}

//esempio con else per gestire condizioni alternative:ottimizzato
if (temperatura >= 37) {
  console.log('hai la febbre');
} else {
  console.log('stai benone');
}

//IF ELSE IF (numero illimitato) [ELSE]
temperatura = 40;

//questo approccio funziona perchè parto dal valore più alto e proseguo in modo decrescente
if (temperatura >= 40) {
  console.log("corri all'ospedale");
} else if (temperatura >= 39) {
  console.log('Hai la febbre molto alta prendi una tachipirina 1000');
} else if (temperatura >= 37) {
  console.log('hai la febbre prendi una tachipirina 500');
} else if (temperatura < 37) {
  console.log('stai benone');
} else {
  console.log('il termometro mi sembra non funzionante. Controlla');
}

//IF ANNIDATI
temperatura = 36.1;
if (temperatura >= 37) {
  //if esterno
  console.log('hai la febbre');
  if (temperatura <= 39) {
    //if interno
    console.log('prendi una tachipirina 500');
  } else if (temperatura < 40) {
    console.log('prendi una tachipirina 1000');
  } else {
    //else dell'if interno
    console.log("corri all'ospedale");
  }
} else {
  //else dell'if esterno
  console.log('non hai la febbre');
}

//ESERCIZI
//1. Dato un numero stampa sulla console se è positivo, negativo o zero.
let numero1 = -50;
if (numero1 > 0) {
  console.log('Il numero è positivo');
} else if (numero1 < 0) {
  console.log('Il numero è negativo');
} else {
  console.log('Il numero è zero');
}

//2. Dichiara una variabile nome. Se nome è uguale a “Maria” o “Stefania” o “Sanem” stampare sulla console “responsabile pulizie”, se nome uguale a “Mario” o “Stefano” o “Fulvio” stampare sulla console “responsabile impianti”, in tutti gli altri casi “non è un nostro dipendente”;

nome = 'Mario';

let risultato = '';
if (nome == 'Maria' || nome == 'Stefania' || nome == 'Sanem') {
  risultato = 'responsabile pulizie';
} else if (nome == 'Mario' || nome == 'Stefano' || nome == 'Fulvio') {
  risultato = 'responsabile impianti';
} else {
  risultato = 'non è un nostro dipendente';
}

console.log(risultato);

nome = 'Mario';

if ('f') {
  //'f' non essendo falsy è sempre true
  console.log('true');
} else {
  console.log('false');
}

//ESEMPIO ERRATO PERCHE' MANCA IL CONFRONTO VARIABILE == VALORE
if (nome == 'Maria' || 'stefania' || '') {
  //'stefania non essendo falsy è sempre true
  risultato = 'responsabile pulizie';
} else if (nome == 'Mario' || nome == 'Stefano' || nome == 'Fulvio') {
  risultato = 'responsabile impianti';
} else {
  risultato = 'non è un nostro dipendente';
}

console.log(risultato);

//3. Data una variabile voto e stampa sulla console il  livello dello studente (A, B, C, D). A, parte da 90 punti (compresi), B ne richiede minimo 80 e C minimo 70 punti, D minimo 60. Il massimo possibile è 100

//SOLUZIONE 1 richiede un ordine preciso delle condizioni (partendo da 90 in giù)

let voto = '60';
let livello = 'Il tuo livello è ';
if (!+voto || voto < 0 || voto > 100) {
  livello = 'livello non valutabile';
} else if (voto >= 90) {
  livello += 'A';
} else if (voto >= 80) {
  livello += 'B';
} else if (voto >= 70) {
  livello += 'C';
} else if (voto >= 60) {
  livello += 'D';
} else {
  livello = 'Bocciato!!!!';
}
console.log(livello);

// SOLUZIONE 2 con valutazione più puntuale dei voti e console log per ogni caso

voto = '7';
if (voto >= 90 && voto <= 100) {
  console.log('Il voto è A');
} else if (voto >= 80 && voto < 90) {
  console.log('Il voto è B');
} else if (voto >= 70 && voto < 80) {
  console.log('Il voto è C');
} else if (voto >= 60 && voto < 70) {
  console.log('Il voto è D');
} else if (voto >= 0 && voto < 60) {
  console.log("L'esame non è stato passato");
} else {
  console.log('Si prega di inserire una votazione valida da 0 a 100.');
}

//SOLUZIONE 3 console per ogni caso e considera il valore minimo 60 (non 0)
voto = 60;
if (voto > 100 || voto < 60) {
  console.log('nessun voto valido');
} else if (voto >= 90) {
  console.log('livello A');
} else if (voto >= 80) {
  console.log('livello B');
} else if (voto >= 70) {
  console.log('livello C');
} else {
  console.log('livello D');
}

//Scrivi un programma che prenda l'età e una variabile booleana che indica se la persona ha una patente, quindi stampi sulla console se la persona è maggiorenne e ha una patente
let eta = 22;
let isPatentato = false;
let msg = 'La persona è ';
if (eta >= 18) {
  msg += 'maggiorenne';
  if (isPatentato) {
    msg += ' e patentata';
  } else {
    msg += ' ma non patentata';
  }
} else {
  msg += 'minorenne';
}
console.log(msg);

//Scrivi un programma che prenda un numero da 1 a 7 e stampi sulla console il giorno della settimana corrispondente. Considera il caso in cui il numero possa essere errato.

let numeroGiorno = 4;
msg = 'Oggi è ';

if (numeroGiorno === 1) {
  msg += 'Lunedì';
} else if (numeroGiorno === 2) {
  msg += 'Martedì';
} else if (numeroGiorno === 3) {
  msg += 'Mercoledì';
} else if (numeroGiorno === 4) {
  msg += 'Giovedì';
} else if (numeroGiorno === 5) {
  msg += 'Venerdì';
} else if (numeroGiorno === 6) {
  msg += 'Sabato';
} else if (numeroGiorno === 7) {
  msg += 'Domenica';
} else {
  msg = 'Numero giorno non valido';
}
console.log(msg);
