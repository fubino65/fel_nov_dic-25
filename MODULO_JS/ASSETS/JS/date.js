//creo un oggetto Date che rappresenta il momento esatto in cui lo sto creando
let adesso = new Date();
console.log(adesso);

//creo un oggetto Date a partire da una data specifica espressa in formato stringa (yyy-mm-ddThh:min:ss)
let compleanno = new Date('1965-11-12T00:30');
console.log(compleanno);
let compleannoMarito = new Date('1964-05-20');

//confronto di date
compleannoMarito > compleanno ? console.log('marito più giovane') : console.log('marito più vecchio');
console.log(compleannoMarito > compleanno ? 'marito più giovane' : 'marito più vecchio');

//creo un oggetto Date a partire da una data specifica espressa con tre parametri anno mese (ricordarsi che il mese è sempre indietro di 1 - 0=gennaio) giorno hh mm ss
let natale25 = new Date(2025, 11, 25);
console.log(natale25);

//posso estrapolare da una data le varie componenti
console.log(adesso.getDate()); //numero del giorno del mese
console.log(adesso.getDay()); //numero del giorno all'interno della settimana
console.log(adesso.getFullYear());
console.log(adesso.getHours());
console.log(adesso.getMinutes());
console.log(adesso.getMonth()); //sempre parte da 0

//nell'ottica della pausa...
let inizioPausa = new Date();
let finePausa = new Date(); //creo una nuova data che praticamente uguale alla data di inizio
finePausa.setMinutes(inizioPausa.getMinutes() + 15);
console.log(
  `La pausa inizia alle ${inizioPausa.getHours()}:${inizioPausa.getMinutes()} e finisce alle ${finePausa.getHours()}:${finePausa.getMinutes()}`
);

let domenicaProx = new Date(2025, 11, 7);
console.log(domenicaProx.getDay()); //domenica = 0

//TIMESTAMP
//numero di millisecondi rispetto alla unix epoch (01 01 1970 mezzanotte)
console.log(adesso.getTime());
console.log(compleanno.getTime());

//timestamp di adesso
let adessoTmsp = Date.now();
console.log(adessoTmsp);

//in ottica della pausa...
inizioPausa = Date.now();
finePausa = Date.now() + 90000;

//FORMATTAZIONE DELLE DATE
//toLocaleDateString(locale) restituisce giorno mese anno in base alla locale
console.log(natale25.toLocaleDateString('it-IT'));
console.log(natale25.toLocaleDateString('en-US'));

//todo options
