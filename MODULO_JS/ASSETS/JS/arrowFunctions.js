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

const palindroma = parola => {
  let conv = parola.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < conv.length / 2; i++) {
    if (conv[i] !== conv[conv.length - 1 - i]) return false;
  }
  return true;
};

console.log(palindroma('annatttt'));

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
