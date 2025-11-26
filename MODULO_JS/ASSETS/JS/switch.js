//Scrivi un programma che prenda un numero da 1 a 7 e stampi sulla console il giorno della settimana corrispondente. Considera il caso in cui il numero possa essere errato.
let numeroGiorno = 7;
let msg = 'Oggi è ';

switch (numeroGiorno) {
  case 1:
    msg += 'Lunedì';
    break;
  case 2:
    msg += 'Martedì';
    break;
  case 3:
    msg += 'Mercoledì';
    break;
  case 4:
    msg += 'Giovedì';
    break;
  case 5:
    msg += 'Venerdì';
    break;
  case 6:
    msg += 'Sabato';
    break;
  case 7:
    msg += 'finalmente il we!';
    break;
  default:
    msg = 'Numero giorno non valido';
}
console.log(msg);

//COME METTERE I CASE IN || O IN &&
let semaforo = 'rosso';
let autoVicina = false;
switch (
  true //entra nel primo caso true. Se mettessi false entrerebbe nel primo caso false;
) {
  case semaforo == 'giallo' && autoVicina:
    console.log('passa velocemente');
    break;
  case (semaforo == 'giallo' && !autoVicina) || semaforo == 'rosso':
    console.log('fermati');
    break;
  default:
    break;
}

//ESERCIZI

//1.Immaginate di testare i colori di un semaforo e di dare al guidatore il messaggio appropriato
semaforo = 'verde';

switch (semaforo) {
  case 'rosso':
    console.log('FERMATI!!!!!!');
    break;
  case 'giallo':
    console.log('Passa con prudenza');
    break;
  case 'verde':
    console.log('Vai tranquillo');
    break;
  default:
    console.log('Il semaforo potrebbe essere guasto');
    break;
}

//UNIONE DI PIU' CASI OMETTENDO IL BREAK (è come se mettessi in or due o più case)
semaforo = 'giallo';
switch (semaforo) {
  case 'rosso':
  case 'giallo':
    console.log('FERMATI!!!!!!');
    break;
  case 'verde':
    console.log('Vai tranquillo');
    break;
  default:
    console.log('Il semaforo potrebbe essere guasto');
    break;
}

//2.Scrivi un programma che prenda una lettera in input rappresentante il tipo di veicolo ("A" per auto, "M" per moto, "B" per bicicletta) e stampi sulla console la descrizione corrispondente.

let tipo = 'M';
msg = '';

switch (tipo) {
  case 'A':
    msg = 'Auto';
    break;
  case 'M':
    msg = 'Moto';
    break;
  case 'B':
    msg = 'Bicicletta';
    break;
  default:
    msg = 'veicolo non riconosciuto';
}

console.log(msg);

//3. Dichiarare la variabile viaggiatore e mostrare nella console il prezzo del biglietto del treno che un viaggiatore dovrà pagare considerando che normalmente è di 2 euro tranne le seguenti eccezioni: i pensionati hanno uno sconto del 10 %, gli studenti del 15 % e i disoccupati del 25 %; output "Biglietto categoria tot euro"
// SOLUZIONE 1
let viaggiatore = 'studente';
const PREZZO_BIGLIETTO = 2;
let prezzoFinale = PREZZO_BIGLIETTO;

switch (viaggiatore) {
  case 'pensionato':
    prezzoFinale = PREZZO_BIGLIETTO * 0.9;
    break;
  case 'studente':
    prezzoFinale = PREZZO_BIGLIETTO * 0.85;
    break;
  case 'disoccupato':
    prezzoFinale = PREZZO_BIGLIETTO * 0.75;
    break;
  default:
    viaggiatore = 'standard';
}
console.log('biglietto  ' + viaggiatore + ' ' + prezzoFinale + ' €.');
// console.log(`Biglietto ${viaggiatore} ${prezzoFinale} €`);

// SOLUZIONE 2 con costanti per le varie riduzioni
viaggiatore = '';
const PENSIONATO_RIDUZIONE = 10;
const STUDENTE_RIDUZIONE = 15;
const DISOCCUPATO_RIDUZIONE = 25;
msg = `Biglietto ${viaggiatore} `;

// let prezzoFinale = PREZZO_BIGLIETTO;
switch (viaggiatore) {
  case 'pensionato':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * PENSIONATO_RIDUZIONE) / 100;
    break;
  case 'studente':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * STUDENTE_RIDUZIONE) / 100;
    break;
  case 'disoccupato':
    msg += PREZZO_BIGLIETTO - (PREZZO_BIGLIETTO * DISOCCUPATO_RIDUZIONE) / 100;
    break;
  default:
    msg = 'Biglietto standard ' + PREZZO_BIGLIETTO;
}

console.log(msg + ' €');

//SOLUZIONE 3 MODIFICA DIRETTAMENTE IL PREZZO DEL BIGLIETTO
viaggiatore = 'pensionato';
let prezzoBiglietto = 2;
switch (viaggiatore) {
  case 'pensionato':
    prezzoBiglietto *= 0.9;
    console.log(`Biglietto categoria pensionato: ${prezzoBiglietto} euro`);
    break;
  case 'studente':
    prezzoBiglietto *= 0.85;
    console.log(`Biglietto categoria studente: ${prezzoBiglietto} euro`);
    break;
  case 'disoccupato':
    prezzoBiglietto *= 0.75;
    console.log(`Biglietto categoria disoccupato: ${prezzoBiglietto} euro`);
    break;
  default:
    console.log(`Biglietto categoria normale: ${prezzoBiglietto} euro`);
}

let aggettivi = 4;
let pg = 'Il personaggio è ';

switch (aggettivi) {
  case 2:
    pg += 'Crudele,';
    break;
  case 3:
    pg += 'Forte,';
    break;
  case 4:
    pg += 'Letale,';
  // break;
  case 5:
    pg += 'Malvagio,';
  // break;
  case 6:
  case 1:
    pg += 'Elfo';
    break;

  default:
    pg = 'Il personaggio non viene descritto';
}
console.log(pg);
