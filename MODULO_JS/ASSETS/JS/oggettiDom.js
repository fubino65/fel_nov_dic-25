// elementi del dom
const labels = document.querySelectorAll('.label');
console.log(labels);
const infos = document.querySelectorAll('.info');
console.log(infos);

//Altre variabili
let gattoSerena = new Animale('Albus', 'gatto', 10, 'miao');

//SOLUZIONE CON KEYS + FOREACH

// Object.keys(gattoSerena)
//   .filter(prop => typeof gattoSerena[prop] != 'function')
//   .forEach((prop, i) => {
//     labels[i].textContent = capitalizzaFirstLetter(prop);
//     infos[i].textContent = gattoSerena[prop];
//   });

//SOLUZIONE CON ENTRIES + FOR OF

// let counter = 0;
// for (let elemento of Object.entries(gattoSerena).filter(elemento => typeof elemento[1] !== 'function')) {
//   labels[counter].textContent = capitalizzaFirstLetter(elemento[0]);
//   infos[counter].textContent = elemento[1];
//   counter++;
// }

//SOLUZIONE CON ENTRIES + FOREACH
Object.entries(gattoSerena)
  .filter(elemento => typeof elemento[1] !== 'function')
  .forEach((elemento, counter) => {
    labels[counter].textContent = capitalizzaFirstLetter(elemento[0]);
    infos[counter].textContent = elemento[1];
    counter++;
  });

function Animale(nome, specie, eta, verso) {
  this.nome = nome;
  this.specie = specie;
  this.eta = eta;
  this.verso = verso;
  this.faiVerso = function () {
    return `${this.nome} fa: ${this.verso}!`;
  };
}
