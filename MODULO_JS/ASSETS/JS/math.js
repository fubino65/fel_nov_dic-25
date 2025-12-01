//ROUND() - Math.round(numero) Arrotonda per eccesso o per difetto all'intero più vicino
console.log(Math.round(13.25));
console.log(Math.round(13.52));
console.log(Math.round(-13.52));

//FLOOR () arrotonda sempre all'intero inferiore
console.log(Math.floor(4.99999999));
console.log(Math.floor(2.25));
console.log(Math.floor(-2.25));

//CEIL () arrotonda sempre all'intero superiore
console.log(Math.ceil(4.99999999));
console.log(Math.ceil(2.25));
console.log(Math.ceil(-2.25));

//TRUNC () restituisce la parte intera di un numero decimale compreso il segno
console.log(Math.trunc(4.99999999));
console.log(Math.trunc(2.25));
console.log(Math.trunc(-2.25));
console.log(Math.trunc('-2.25')); //N.B. che il numero è in formato stringa

//MIN () restituisce il numero più piccolo all'interno di un elenco di numeri
console.log(Math.min(-9, 5, 7, 10, -100, 108, 85));

//MAX () restituisce il numero più grande all'interno di un elenco di numeri
console.log(Math.max(-9, 5, 7, 10, -100, 108, 85));
console.log(Math.max('-9, 5, 7, 10, -100, 108, 85'));
console.log(Math.max('-9', '5', '9'));
console.log(Math.max(...[-9, 5, 7, 10, -100, 108, 85])); //posso trasformare un array in un elenco di elementi con lo spread operator (...)7

//RANDOM () restituisce un numero casuale compreso fra 0 incluso e 1 escluso
console.log(Math.random());
//generalmente viene usato in combo con il floor(o con il ceil)
//voglio generare un numero casuale compreso fra 0 e 3
let limiteSup = 3;
console.log(Math.floor(Math.random() * limiteSup)); //rest un numero fra 0 e limiteSup escluso
console.log(Math.floor(Math.random() * (limiteSup + 1))); //rest un numero fra 0 e limiteSup incluso
console.log(Math.ceil(Math.random() * limiteSup)); //rest un numero fra 1 e limiteSup incluso
console.log(Math.ceil(Math.random() * (limiteSup - 1))); //rest un numero fra 1 e limiteSup escluso

//non necessariamente posso voler partire da 0 o 1. Come determinare un range di numeri
let limiteInf = 3;
limiteSup = 7;
console.log(Math.floor(Math.random() * (limiteSup - limiteInf + 1)) + limiteInf);

//scrivere una funzione che restituisca un numero casuale dato un range(da - a);
function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}

console.log(generaNumeroCasualeInRange(1, 6));

//SOLUZIONE 2 CON CEIL
function generaNumeroCasualeInRange2(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.ceil(Math.random() * (range + 1)) + limiteInf - 1;
}
console.log(generaNumeroCasualeInRange2(3, 7));

//lancio dei dadi
function simulaLancioDadi() {
  let minimo = 1;
  let massimo = 6;

  let lancio1 = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
  let lancio2 = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;

  let somma = lancio1 + lancio2;

  // Questa riga crea la stringa descrittiva
  let risultatoDoppio = lancio1 === lancio2 ? 'SI, DOPPIO!' : 'NO, NESSUN DOPPIO';

  return {
    dado1: lancio1,
    dado2: lancio2,
    sommaTotale: somma,
    risultato: risultatoDoppio // Ora restituisce la stringa
  };
}

let risultato = simulaLancioDadi();
console.log(risultato);
