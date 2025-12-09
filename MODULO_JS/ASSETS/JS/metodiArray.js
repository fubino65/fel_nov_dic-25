let ricette = ['tiramisù', 'profiteroles', 'cheesecake', 'zuppa inglese'];
//voglio eliminare i profiteroles perchè non li so fare

//SPLICE elimina, aggiunge, sostituisce all'interno dell'array (modifica l'array di origine)
ricette.splice(1, 1);
console.log(ricette);
//al posto della cheesecake voglio mettere cheesecake ai frutti di bosco, e cheesecake al pistacchio
ricette.splice(1, 1, 'cheesecake ai frutti di bosco', 'cheesecake al pistacchio');
console.log(ricette);
//voglio aggiungere altri tipi di cheesecake
ricette.splice(3, 0, 'cheesecake basca', 'cheesecake cioccolato bianco');
console.log(ricette);

// CONCAT restituisce un nuovo array dato dalla concatenazione di più array
let numeri = [1, 2, 3];
let stringhe = ['alfabeto', 'gioco'];
let gioielli = ['anello', 'collana', 'bracciale'];
let arrayCompleto = numeri.concat(gioielli, stringhe);
console.log(arrayCompleto);
console.log(numeri);

// FIND (callback) restituisce il PRIMO elemento che soddisfa la condizione espressa nella funzione passata come parametro
console.log(ricette.find(ricetta => ricetta.startsWith('cheese')));

//FOREACH (callback)
numeri = numeri.concat([7, 4, 2]);
console.log(numeri);

//voglio calcolare la somma degli elementi
let somma = 0;
numeri.forEach(numero => (somma += numero));
console.log(somma);

//accetta anche un secondo parametro che è l'indice
numeri.forEach((numero, i) => console.log(i + 1 + ':' + numero));

// MAP(callback) restituisce un NUOVO ARRAY applicando a tutti gli elementi la stessa funzione
let gioielliMaiuscoli = gioielli.map(gioiello => gioiello.toUpperCase());
console.log(gioielliMaiuscoli);

//REDUCE(callback, valoreIniziale (default 0))
//voglio calcolare la somma degli elementi con il reduce

console.log(numeri.reduce((acc, numero) => acc + numero, 0));
console.log(gioielli.reduce((acc, elemento) => acc + elemento + ' ', ''));

//REVERSE inverte l'ordine degli elementi
console.log(numeri.reverse());
console.log(gioielli.reverse());

//SORT (callback) (ordinamento alfabetico ascendente); RICORDA: nell'ordinamento alfabetico prima vengono ordinate le lettere maiuscole e poi le minuscole
let fiori = ['ciclamino', 'rosa', 'azalea', 'Begonia', 'Tulipano'];
console.log(fiori.sort());

function capitalizzaFirstLetter(stringa) {
  return stringa && typeof stringa == 'string' ? stringa.at(0).toUpperCase() + stringa.slice(1).toLowerCase() : stringa;
}

fiori = fiori.map(fiore => capitalizzaFirstLetter(fiore));
console.log(fiori);

console.log(fiori.map(fiore => capitalizzaFirstLetter(fiore)).sort());

//se voglio ordinare in ordine decrescente (z-a) posso prima fare il sort e poi il reverse

console.log(
  fiori
    .map(fiore => capitalizzaFirstLetter(fiore))
    .sort()
    .reverse()
);

numeri = [1, 6, 77, 66, 62, 33, 10, 2];
console.log(numeri.sort());
console.log(numeri.sort((a, b) => a - b)); //crescente
console.log(numeri.sort((a, b) => b - a)); //decrescente

//adesso che conosco i metodi degli array riprovo a verificare se una parola è palindroma
let parola = 'anna';
console.log(parola == parola.split('').reverse().join(''));
