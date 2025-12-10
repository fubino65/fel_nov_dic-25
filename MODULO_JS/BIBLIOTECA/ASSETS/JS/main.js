//COSTANTI
const MSG_OBBLIGATORIO = 'Campo obbligatorio';
const LUNGH_CODICE = 3;
//const CODICE_REGEX = /^\d{3}$/;
const CODICE_REGEX = new RegExp(`^\\d{${LUNGH_CODICE}}$`);

//ELEMENTI DEL DOM
const form = document.querySelector('form');
// const titolo = document.getElementById('titolo'); N.B. gli elementi di un form possono essere selezionati singolarmente come in questo caso, oppure presi dal form con form.nomeCampo
const esito = document.getElementById('esito');
const tabella = document.querySelector('table tbody');

//ALTRE VARIABILI
let isValid = true;
let libri = [];
let libroTest = new Libro('titolo1', 'autore1', '777', '');
libri.push(libroTest);
//GESTIONE EVENTI

form.addEventListener('submit', e => {
  isValid = true; //reset della variabile
  esito.textContent = ''; //reset del messaggio esito
  e.preventDefault(); //mette in stand by la submit (non fa richiamare la action)
  //verifico che il titolo sia valorizzato

  validaCampo(form.titolo);
  validaCampo(form.autore);
  validaCampo(form.codice);

  //come faccio a sapere se devo proseguire?
  if (isValid) {
    //se campi validi controllo che nell'array dei libri non esista già un libro con lo stesso codice. Se esiste valorizzo il campo esito e mi fermo
    if (libri.some(elemento => elemento.codice === form.codice.value.trim())) {
      esito.textContent = `Codice ${form.codice.value} già registrato`;
      form.codice.focus();
    } else {
      //se non esiste creo un oggetto libro, lo aggiungo all'array dei libri, aggiungo una riga alla tabella, metto l'array dei libri nel local storage, svuoto il form e rimetto il focus sul titolo
      let libro = new Libro(form.titolo.value.trim(), form.autore.value.trim(), form.codice.value, form.genere.value);
      libri.push(libro);
      //TODO LS

      //AGGIUNGO RIGA TABELLA
      let riga = tabella.insertRow();
      console.log(riga);
      riga.insertCell().innerText = libro.titolo;
      riga.insertCell().innerText = libro.autore;
      riga.insertCell().innerText = libro.codice;
      riga.insertCell().innerText = libro.genere;

      //SVUOTO IL FORM
      form.reset();
      form.titolo.focus();
    }
  }
});

//ALTRE FUNZIONI
function validaCampo(campo) {
  let msg = ''; //inizializzo la variabile ma anche resetto i messaggi di errore qualora siano presenti
  let value = campo.value.trim();
  if (campo.id == 'codice' && !CODICE_REGEX.test(value)) {
    isValid = false;
    msg = 'Richieste ' + LUNGH_CODICE + ' cifre';
  } else if (value == '') {
    isValid = false;
    msg = MSG_OBBLIGATORIO;
  }
  campo.nextElementSibling.textContent = msg; //sia che il campo sia valido o non lo sia viene sempre valorizzato lo span di errore. Se è valido viene valorizzato con stringa vuota, altrimenti con il messaggio di errore.
}

//COSTRUTTORI
function Libro(titolo, autore, codice, genere) {
  this.titolo = titolo;
  this.autore = autore;
  this.codice = codice;
  this.genere = genere;
}

localStorage.setItem('prova', 'stringa salvata nel ls');
console.log(localStorage.getItem('prova'));

localStorage.setItem('libri', 33);
console.dir(localStorage.getItem('libri'));
