//condizione ? valore_se_vero : valore_se_falso;

let eta = 12;

console.log(eta >= 18 ? 'Maggiorenne' : 'Minorenne');

eta >= 18 ? console.log('maggiorenne') : console.log('minorenne');

let stato = eta >= 18 ? 'Maggiorenne' : 'Minorenne';
console.log(stato);

//ESERCIZI
// 1.Dichiara e inizializza le variabili a, b. Se le variabili a e b sono uguali fra di loro come valore e tipo stampare sulla console il loro valore altrimenti stampare “differenti”;
let a = 'scienza';
let b = 'coscienza';

console.log(a === b ? a : 'differenti');
// 2.Dichiara e inizializza una variabile a. Se il valore di a è uguale ad “Anna” stampare sulla console “mamma”, altrimenti stringa vuota (cioè "");
let nome = 'giuseppe';
console.log(nome === 'Anna' ? 'mamma' : '');

// 3.Dichiara e inizializza una variabile gradi. Se il valore della variabile gradi è maggiore di 100 stampare sulla console “sala e butta la pasta” altrimenti “aspetta ancora un attimo”
let gradi = 10;
console.log(gradi >= 100 ? 'sala e butta la pasta' : 'aspetta ancora un attimo');

// 4.Dichiara e inizializza  una variabile minuti. Se il valore della variabile minuti è minore di 30 stampare sulla console: "non è ancora passata mezzora", altrimenti "vai pure";
let minuti = 35;
console.log(minuti < 30 ? "non è ancora passata mezz'ora" : 'vai pure!');
