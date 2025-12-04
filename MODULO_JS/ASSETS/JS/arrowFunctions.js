function dividi(a, b) {
  return a / b;
}

//riscrivo la funzione dividi in forma di arrow function
let dividiArrow = (a, b) => a / b;
console.log(dividiArrow(10, 5));

//esempio con il metodo findIndex degli array
let carrello = ['pesce', 'barca a vela', 'planetaria', 'camper'];
console.log(
  carrello.findIndex(function (element) {
    return element === 'planetaria';
  })
);

console.log(carrello.findIndex(element => element === 'planetaria'));

//ESERCIZI
//1.Scrivi una arrow function che prenda un parametro numerico e restituisca il quadrato del numero.
let getQuadrato = num => num ** 2;
console.log(getQuadrato(2));
console.log(getQuadrato(-2));
console.log(getQuadrato(0));
console.log(getQuadrato(8));

//2.Scrivi una arrow function che prenda un parametro numerico e restituisca true se il numero è positivo, altrimenti restituisca false.
let isPositivo = num => num >= 0;
console.log(isPositivo(18));
console.log(isPositivo(0));
console.log(isPositivo(-5));

//3. Scrivi una arrow function che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.
let isPalindroma = parola => {
  let stringaReversed = '';
  for (let car of parola) {
    stringaReversed = car + stringaReversed;
  }
  return parola.toLowerCase() == stringaReversed.toLowerCase();
};
console.log(isPalindroma('Anna'));
console.log(isPalindroma('otto'));
console.log(isPalindroma('geronimo'));
console.log(isPalindroma(''));

//SOLUZIONE 2
const palindroma = parola => {
  let conv = parola.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < conv.length / 2; i++) {
    if (conv[i] !== conv[conv.length - 1 - i]) return false;
  }
  return true;
};

console.log(palindroma('anna'));

//SOLUZIONE 3
const isPalindroma2 = parola => {
  // Caso base: parola vuota o con un solo carattere è palindroma
  if (parola.length <= 1) {
    return true;
  }

  // Confronta primo e ultimo carattere
  if (parola[0].toLowerCase() !== parola[parola.length - 1].toLowerCase()) {
    return false;
  }

  // Ricorsione sulla sottostringa senza primo e ultimo carattere
  return isPalindroma2(parola.slice(1, -1));
};

console.log(isPalindroma2('Anna'));
console.log(isPalindroma2('otto'));
console.log(isPalindroma2('geronimo'));
console.log(isPalindroma2(''));

//SOLUZIONE 4
const isPalindrome = (word, start = 0, end = word.length - 1) => {
  // Caso base: i puntatori si sono incrociati o incontrati
  if (start >= end) {
    return true;
  }
  // Confronta carattere all'inizio e alla fine
  if (word[start].toLowerCase() !== word[end].toLowerCase()) {
    return false;
  }
  // Ricorsione spostando i puntatori verso il centro
  return isPalindrome(word, start + 1, end - 1);
};

console.log(isPalindrome('treno'));
console.log(isPalindrome('Anna'));
console.log(isPalindrome('otto'));
console.log(isPalindrome(''));

//4. Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.
let isPiuLunga = (parola, lungh) => parola.length > lungh;
console.log(isPiuLunga('gatto', 3));
console.log(isPiuLunga('gatto', 5));
console.log(isPiuLunga('', 0));

//5. Scrivi una arrow function che verifica se un array di numeri è in ordine crescente (ogni numero deve essere maggiore del precedente).

const isArrCrescente = arr => {
  let confronto = -Infinity;
  for (let num of arr) {
    if (num > confronto) {
      confronto = num;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isArrCrescente([1, 2, 3, 4, 5]));
console.log(isArrCrescente([-100, -40, 1, 2, 3, 4, 5]));
console.log(isArrCrescente([-100, -40, 1, 2, 5, 4, 5]));

//OPPURE CON FOR
const isArrCrescente2 = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(isArrCrescente2([1, 2, 3, 4, 5]));
console.log(isArrCrescente2([-100, -40, 1, 2, 3, 4, 5]));
console.log(isArrCrescente2([-100, -40, 1, 2, 5, 4, 5]));

//OPPURE GIANFRANCO
const numCrescenti = [0, 8, 9, 12];
const isnumCrescenti = arr => arr.findIndex((numero, indice) => numero <= arr[indice - 1]) === -1;
//il metodo findIndex ritorna -1 se non trova nemmeno un numero inferiore al suo precedente. Quindi se ritorna -1 vuol dire che tutti i numeri sono in ordine crescente
console.log(`Array Crescente: ${isnumCrescenti(numCrescenti)}`);
