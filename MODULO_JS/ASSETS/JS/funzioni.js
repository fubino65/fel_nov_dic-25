console.log('stringa1', 'stringa2');
console.log('oggi è lunedì', 'che bello!');

//DICHIARAZIONE
function saluta(nome) {
  console.log('benvenut* ' + nome);
}

//INVOCAZIONE (sempre con le parentesi che sono quelle che innescano l'esecuzione della funzione)
saluta('Martina');
saluta('Rosario');
console.log(saluta); //stampa la dichiarazione completa della funzione

//FUNZIONI SENZA PARAMETRI E SENZA OUTPUT (VALORE DI RITORNO)
function sommaDieciCinque() {
  //solo dichiarata
  let a = 10;
  let b = 5;
  let result = a + b;
  console.log(result);
}

sommaDieciCinque(); //invocazione -> esecuzione
console.log('qui ci sono 50 righe di codice....');
sommaDieciCinque(); //invocazione -> esecuzione

//FUNZIONI CON PARAMETRI SENZA OUTPUT
function somma(a, b) {
  //solo dichiarata
  console.log(a);
  console.log(b);
  let result = a + b;
  console.log(result);
}

let temp = somma(10, 5);
console.log(temp);
somma(20, 20);
somma(3, 2);
somma(10);
console.log(somma(2, 6));
console.log(console.log('ciao'));

//FUNZIONI CON PARAMETRI E OUTPUT (VALORE DI RITORNO)
function sommaConOutput(a, b) {
  console.log(a);
  console.log(b);
  let result = a + b;
  return result;
}

let num1 = sommaConOutput(5, 9);
console.log(num1);
console.log(sommaConOutput(2, 8));
console.log(sommaConOutput(sommaConOutput(10, 5), sommaConOutput(3, 2)));

//ESERCIZI
//1.Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo.
function area(b, h) {
  let result = b * h;
  return result;
}

function area2(b, h) {
  return b * h;
}

console.log(area(6, 4));
console.log(area2(6, 4));

//1b.Scrivi una funzione che prenda tre parametri, base e altezza e isTriangolo, e restituisca l'area del rettangolo o del triangolo a seconda che il isTriangolo sia true o false.
function getArea3(b, h, isTriangolo) {
  if (typeof isTriangolo == 'boolean' && isTriangolo) {
    return (b * h) / 2;
  }
  return b * h;
}
console.log(getArea3(10, 5, true));
console.log(getArea3(10, 5, 1));
console.log(getArea3(10, 5)); //se non passo il terzo parametro risulta undefined e quindi if (isTriangolo) vale false
//2.Scrivi una funzione che dati due argomenti numerici ne restituisca la divisione;
function dividi(num1, num2, numDec = 2) {
  return (num1 / num2).toFixed(numDec);
}

console.log(dividi(10, 2));
console.log(dividi(10, 2, 3));

//3. Scrivi un funzione che dati due argomenti numerici ritorni true o false a seconda che il primo argomento sia un multiplo del secondo;

function isMultiplo(num1, num2) {
  return num1 % num2 === 0;
}
console.log(isMultiplo(10, 7));
console.log(isMultiplo(10, 2));
console.log(isMultiplo(10, 5));
console.log(isMultiplo2(10, 0));

//SECONDA SOLUZIONE (testa che il divisore sia != 0 ma in realtà qualsiasi sia il valore del divisore viene sempre eseguita numero % divisore === 0)
function isMultiplo2(numero, divisore) {
  return divisore !== 0 && numero % divisore === 0;
}
console.log(isMultiplo2(10, 0));
console.log(isMultiplo2(10, 5));

//TERZA SOLUZIONE (non applicabile per il caso in cui il divisore sia ==0)
function isMultiplo3(num1, num2) {
  return !(num1 % num2);
}
console.log(isMultiplo3(10, 7));
console.log(isMultiplo3(10, 2));
console.log(isMultiplo3(10, 5));
console.log(isMultiplo3(10, 0));

//4.Scrivi una funzione che restituisca la somma degli elementi di un array numerico
let numeri = [1, 2, 3, 4, 5, 6, 7, 8];
function sommaArray(arr) {
  let somma = 0;
  for (const numero of arr) {
    somma += +numero;
  }
  return somma;
}

console.log(sommaArray(numeri));
//5. Scrivi una funziona che concateni tutti gli elementi di un array separandoli con lo spazio

function concatenaArray(arr) {
  let risultato = '';
  for (let elemento of arr) {
    risultato += elemento + ' ';
  }
  return risultato;
}
let fiori = ['ciclamino', 'orchidea', 'margherita', 'rosa'];
console.log(concatenaArray(fiori));

//SOLUZIONE 2 CON POSSIBILITA' DI DEFINIRE UN SEPARATORE E TERMINARE CON UN PUNTO

function concatenaArray2(arr, separatore = ', ') {
  let risultato = '';
  let index = 0;
  for (let elemento of arr) {
    index++;
    if (arr.length == index) {
      separatore = '.';
    }
    risultato += elemento + separatore;
  }
  return risultato;
}
fiori = ['ciclamino', 'orchidea', 'margherita', 'rosa'];
console.log(concatenaArray2(fiori));
console.log(concatenaArray2(fiori, ' | '));
console.log(concatenaArray2([2, 5, 7, 9, 77, 22, 4], ' - '));

//FUNZIONI CHE ACCETTANO UN NUMERO VARIABILE DI ARGOMENTI (spread operator)
function somma(...numeri) {
  let result = 0;
  for (const numero of numeri) {
    result += numero;
  }
  return result;
}

console.log(somma(2, 3, 5, 4, 8, 6, 7, 11));
