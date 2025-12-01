let numeroDaIndovinare = generaNumeroCasualeInRange(0, 6);

let msg = 'indovina il numero magico (fra 0 e 6)';
let scelta = '';
do {
  scelta = prompt(msg);
  msg = 'ritenta ';
} while (scelta != numeroDaIndovinare && scelta != null);

if (scelta == numeroDaIndovinare) {
  //serve solo per gli utenti che non hanno premuto annulla
  alert('super bravissimo il numero da indovinare era ' + numeroDaIndovinare);
}
