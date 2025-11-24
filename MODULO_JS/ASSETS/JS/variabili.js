//DICHIARAZIONE
let primaVariabile;
console.log(primaVariabile);

//INIZIALIZZAZIONE
primaVariabile = 5; //tipo di dato number con valore 5
console.log(primaVariabile);

//DICHIARAZIONE E INIZIALIZZAZIONE CONTESTUALI
let secondaVariabile = 'geronimo'; //tipo di dato string con valore geronimo
console.log(secondaVariabile);

//RIASSEGNAZIONE
secondaVariabile = 'pippo'; //assegno un nuovo valore sempre di tipo string

secondaVariabile = 27; //assegno un nuovo tipo di dato e un nuovo valore

//DICHIARAZIONE MULTIPLA
let num1, num2, num3;
console.log(num1);

num1 = 45; //inizializzazione
num1 = 23; //riassegnazione

//DICHIARAZIONE E INIZIALIZZAZIONE MULTIPLE
let persona1 = 'gianfranco',
  persona2 = 'irene',
  personaN = 'sconosciuto';

console.log(persona1 + persona2);

//RIASSEGNA LA VARIABILE num1 ASSEGNANDOLE UN VALORE DI TIPO STRING
num1 = "paperino d'amico"; // \carattere di escape (segnala al browser che il carattere che segue non deve essere considerato parte della sintassi del linguaggio)
num1 = '6'; //tipo di dato stringa valore 6

console.log('vale ', num1);
console.log('io mi chiamo fulvia');

let stagione; //il suo valore qui è undefined
