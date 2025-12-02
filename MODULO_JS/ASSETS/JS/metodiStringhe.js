//GENERALMENTE I METODI DELLE STRINGHE NON MODIFICANO LA STRINGA SU CUI SONO INVOCATI

let stringa = 'boh';

stringa[0] = 'S';
console.log(stringa);

//PER ESTRARRE UN CARATTERE DA UNA STRINGA: approccio array, charAt(), at()
//voglio estrarre la h di boh
console.log(stringa[2]);
console.log(stringa[stringa.length - 1]);
console.log(stringa.charAt(stringa.length - 1));
console.log(stringa.at(stringa.length - 1));
console.log(stringa.at(-1));
console.log(stringa);

//INDEXOF
const PANTALONI = 345;
const GONNA = 555;
const INDICE_CAPO = 3;
stringa = 'abc555222kjfldlkfdskl';
let capo = '';
if (stringa.indexOf(PANTALONI) == INDICE_CAPO) {
  capo = 'pantaloni';
} else if (stringa.indexOf(GONNA) == INDICE_CAPO) {
  capo = 'gonna';
}
console.log(capo);

stringa = 'oggi piove';
//voglio sapere se la sotto stringa piove è contenuta in stringa e in che posizione
let index = stringa.indexOf('piove');
console.log(index);
//voglio sapere se la sotto stringa sole è contenuta in stringa e in che posizione
index = stringa.indexOf('sole');
console.log(index); //non esiste quindi viene ritornato -1

//INCLUDES
stringa = 'oggi piove, ma piove di brutto';
//voglio sapere se la sotto stringa piove esiste in stringa. Non mi interessa l'indice e nemmeno quante volte è ripetuta
console.log(stringa.includes('piove'));
console.log(stringa.includes('sole'));

//STARTSWITH/ENDSWITH  -- non supportati dai browser più vecchi
stringa = 'abc555222kjfldlkfdskl';
capo = '';
if (stringa.startsWith(PANTALONI, INDICE_CAPO)) {
  capo = 'pantaloni';
} else if (stringa.startsWith(GONNA, INDICE_CAPO)) {
  capo = 'gonna';
}
console.log(capo);

stringa = 'chissà come inizia questa stringa';
console.log(stringa.startsWith('chissà'));
console.log(stringa.endsWith('ga'));

//SEARCH (REGEX)
stringa = 'oggi piove, ma Piove di brutto';
console.log(stringa.search(/Piove/gi)); //i=caseInsensitive g=global

//MATCH (REGEX)
console.log(stringa.match(/piove/gi));

//MATCHALL (REGEX)
stringa = 'test1fulviatest2test3geronimo';
let matches = [...stringa.matchAll(/test(\d)/g)];
console.log(matches);
let result = [
  ['test1', '1'],
  ['test2', '2']
];
console.log('prima stringa =  ' + result[0][0]);
console.log('seconda stringa =  ' + result[1][0]);

//generare una stringa che contenga tutti i primi elementi degli array interni all'array matches
result = '';
for (const match of matches) {
  result += match[0] + ',';
}
console.log(result);

//SOLUZIONE CON CICLO FOR
result = '';
for (let i = 0; i < matches.length; i++) {
  result += matches[i][0] + ' ';
}
console.log(result);

//SLICE (primo indice incluso, secondo indice escluso (opzionale))
stringa = 'oggi ho una sete pazzesca';
//voglio estrarre la sottostringa "ho"
console.log(stringa.slice(5, 7));
//voglio estrarre la sottostringa "sete pazzesca"
console.log(stringa.slice(12));
console.log(stringa.slice(-13));

stringa = 'parola1, parola2, parola3,';
//voglio sostituire la virgola finale di stringa con un punto
console.log(stringa.slice(0, -1) + '.');
console.log(stringa);

//SUBSTRING come slice ma non accetta valori negativi
//voglio sostituire la virgola finale di stringa con un punto
console.log(stringa.substring(0, stringa.length - 1) + '.');
console.log(stringa.substring(0, stringa.lastIndexOf(',')) + '.');

//REPLACE (solo prima occorrenza - case sensitive)
stringa = 'vorrei vivere in Canada ma non potrò vivere in Canada';
console.log(stringa.replace('canada', 'Islanda'));
console.log(stringa.replace(/canada/gi, 'Austria'));

//REPLACEALL (tutte le occorrenze - case sensitive)
console.log(stringa.replaceAll('Canada', 'Bali'));
console.log(stringa.replaceAll(/canada/gi, 'Bali')); //se voglio usare i di insensitive devo per forza usare anche la g di global.

//TRIM
stringa = '    ciao      ';
console.log(stringa.length);
console.log(stringa.trim().length);
console.log(stringa.trim());

//TRIMSTART/TRIMEND
console.log(stringa.trimEnd().length);
console.log(stringa.trimStart().length);

//TOUPPERCASE/TOLOWERCASE
stringa = 'thaiLanDia  ';
console.log(stringa.toUpperCase());
console.log(stringa.toLowerCase());
let stringa2 = 'Thailandia';
console.log(stringa.trim().toLowerCase == stringa2.trim().toLowerCase);
console.log('français'.toUpperCase()); //c con cediglia alt 135 oppure tasto a destra della lettera l

//SPLIT trasforma in un array di caratteri
stringa = 'Fulvia, Paola Antonella, Massimo, Emma, Giacomo, Marta';
console.log(stringa.split(', '));
console.log(stringa.split(', ', 3));
stringa = "la vispa  teresa avea fra l'erbetta...";
console.log(stringa.split(' '));
