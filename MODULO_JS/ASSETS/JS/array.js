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
