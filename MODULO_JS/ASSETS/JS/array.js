//DICHIARAZIONE
let fiori = []; //array vuoto
let frutti = new Array();

//ASSEGNAZIONE/INIZIALIZZAZIONE
fiori[0] = 'tulipano';
fiori[1] = 'peonia';
//viene creato fiori[2] vuoto;
fiori[3] = 'ciclamino';

//ASSEGNAZIONE/INIZIALIZZAZIONE
frutti = ['clementina', 'pera', 'mela', 'banana']; //assegnazione perchè variabile già dichiarata
console.log(frutti.length);
let animali = ['cane', 'gatto', 'topo', 'lince', 'tigre']; //dichiarazione e inizializzazione contestuali
console.log(animali.length);
let numeroAnimali = animali.length;
//LETTURA DI UN ELEMENTO
console.log(fiori[1]);
console.log(fiori[2]);

//RIASSEGNAZIONE DI VALORI
fiori[2] = 'rosa';
fiori[1] = 'orchidea';

let num = 6;

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

console.log(regioni.length);

//immaginiamo di dover valorizzare una select di un form html con tutte le regioni
let index = 0;
let options = `<option value="${regioni[index]}">${regioni[index]}</option>`;
if (++index < regioni.length) {
  options += `<option value="${regioni[index]}">${regioni[index]}</option>`;
}
if (++index < regioni.length) {
  options += `<option value="${regioni[index]}">${regioni[index]}</option>`;
}
if (++index < regioni.length) {
  options += `<option value="${regioni[index]}">${regioni[index]}</option>`;
}
if (++index < regioni.length) {
  options += `<option value="${regioni[index]}">${regioni[index]}</option>`;
}
//... eccetera
//esempio un po' tirato per i capelli perchè in ogni if dovrebbe esserci un else che dice che cosa bisogna fare nel caso index raggiunga il valore di regioni.length.

//ATTENZIONE: gli array non sono dei tipi primitivi quindi se voglio assegnare un array ad un altro array gli assegno il riferimento all'area di memoria. Non il valore

let a = 10;
let b = a; //assegno a b il valore di a perchè è un tipo primitivo
console.log(a);
console.log(b);
a = 5;
b = 40;
console.log(a);
console.log(b);

let nomi = ['Rosario', 'Michele', 'Gianfranco', 'Anna', 'Vanessa', 'Maria'];
let nomi2 = nomi; //assegno a nomi2 il riferimento all'area di memoria a cui punta nomi perchè è un oggetto (non un tipo primitivo)
console.log(nomi);
console.log(nomi2);
nomi[0] = 'Luca';
console.log(nomi);
console.log(nomi2);

let nomi3 = [...nomi]; //eseguo una shallow copy (copio il valore dei tipi semplici da un array all'altro)
console.log(nomi);
console.log(nomi3);
nomi[0] = 'Angelo';
console.log(nomi);
console.log(nomi3);
nomi3.push('Serena');
console.log(nomi);
console.log(nomi3);

let nomi4 = ['Davide', ...nomi3, 'Fulvia'];
console.log(nomi4);
