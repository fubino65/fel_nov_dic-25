let casa = {
  tipologia: 'Casale in campagna vicino al mare',
  vani: 5,
  metratura: 100,
  bagni: 2,
  hasPiscina: false,
  terrazzo: 1,
  balconi: 2,
  box: 1,
  hasCantina: true,
  annuncio: function () {
    return `${casa.tipologia} numero vani: ${this.vani} distribuiti su una metratura di ${
      this.metratura
    }mq, numero bagni: ${this.bagni}, ${this.hasPiscina ? 'dotato di piscina, ' : ''} `;
  }
};

console.log(casa.balconi);
console.log(casa['terrazzo']);
console.log(casa.terrazzo);
console.log(casa.annuncio());

//Quando il nome della proprietà è definito in una variabile è obbligatoria la bracket notation (nomeOggetto [nomeProprieta])
let gianfranco = 'metratura';
console.log(casa[gianfranco]);
console.log(casa.gianfranco);
prop = 'tetto';
console.log(casa[prop]);

//MODIFICA
casa.hasPiscina = true; //sovrascrivo il valore di hasPiscina
console.log(casa.hasPiscina);
casa['bagni'] = 3;
console.log(casa.bagni);
casa[gianfranco] = 200;
console.log(casa.metratura);

//AGGIUNTA DI UNA PROPRIETA' dopo che l'oggetto è già stato creato e magari anche utiizzato
console.log(casa.hasCamino); //qui hasCamino non è ancora stata aggiunta
casa.hasCamino = true; //qui aggiungo hasCamino
console.log(casa.hasCamino);

//ELIMINAZIONE DI UNA PROPRIETA' dopo che l'oggetto è già stato creato e magari anche utiizzato
delete casa.terrazzo;
console.log(casa.terrazzo);

let docente = ['fulvia', 'grignaschi', 'programmazione', 5, true];
let docenteObj = {
  nome: 'Fulvia',
  cognome: 'Grignaschi',
  materia: 'Programmazione',
  anniInsegnamento: 5,
  disponibile: true
};

//CREAZIONE DI UN OGGETTO A PARTIRE DA UN OGGETTO ESISTENTE (shallow copy)
let docenteObj2 = Object.create(docenteObj); //shallow copy
docenteObj2.nome = 'Stefano';
docenteObj2.cognome = 'De Pace';
docenteObj2.anniInsegnamento = 10;

let docenteObj3 = {...docenteObj2}; //shallow copy
docenteObj3.nome = 'Rubina';
console.log(docenteObj2);

//crea un oggetto lampadina con le proprietà che ritieni opportune e due metodi accendi e spegni.
let lampadina = {
  accesa: false,
  colore: 'bianco',
  dimensioni: ['sm', 'l', 'xl'],
  caratteristicheTecniche: {voltaggio: '100', consumoBasso: true},
  led: true,
  accendi: function () {
    this.accesa = true;
  },
  spegni: function () {
    this.accesa = false;
  },
  getStato() {
    //approccio più veloce per scrivere un metodo (nomeMetodo(){} invece che nomeMetodo: function (){})
    console.log('La lampadina è ' + (lampadina.accesa ? ' accesa.' : ' spenta.'));
  }
};

lampadina.getStato();
lampadina.accendi();
lampadina.getStato();

//COSTRUTTORE
function User(nome, cognome, admin = false) {
  this.nome = nome;
  this.cognome = cognome;
  this.isAdmin = admin;
}

let user1 = new User('Paolo', 'Brambilla', true);
let user2 = new User('Luca', 'Camerani');
console.log(user1);
console.log(user2);

//Prova per vedere se sono chiari alcuni concetti
function Stampa() {
  //per prova abbiamo creato un costruttore senza proprietà e senza metodi
  console.log('stampo');
}

let prova = new Stampa(); //se lo istanzio con il new restituisce un oggetto vuoto
console.log(prova);
let prova2 = Stampa(); //se lo richiamo come funzione normale non restituisce nulla
console.log(prova2);

//OBJECT.KEYS -> restituisce tutte le proprieta' di un oggetto

//OBJECT.VALUES -> restituisce tutti i valori di un oggetto

//OBJECT.ENTRIES -> restituisce un array i cui elementi sono array [prop, valore]
