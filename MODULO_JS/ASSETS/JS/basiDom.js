//disclaimer: finchè non impareremo a gestire gli eventi tutte le manipolazioni che faremo in js sugli elementi del DOM verranno eseguiti al caricamento del file js e quindi non vedremo il css originale perchè tutto avviene troppo velocemente. Portiamo pazienza...

//SELEZIONI ELEMENTI HTML
//approccio document.getElement...by....
//tranne il document.getElementById tutti gli altri restituiscono una collection -> array
let titoloPrincipale = document.getElementById('titoloPrincipale'); //per selezionare un elemento per id questo è il metodo più performante
console.log(titoloPrincipale);
console.dir(titoloPrincipale);

titoloPrincipale = document.getElementsByTagName('h1')[0];
console.log(titoloPrincipale);

const titoliH2 = document.getElementsByTagName('h2');
//voglio accodare a ciascun h2 la stringa "Modificato"
for (const titolo of titoliH2) {
  titolo.textContent += '***MODIFICATO***';
}

//approccio con document.querySelector()/querySelectorAll()

const primoH2 = document.querySelector('h2'); //restituisce il PRIMO elemento che soddisfa il criterio di selezione

//voglio trasformare il background in giallo e  in rosso il testo del primo paragrafo della section primaSect
const primoParSect1 = document.querySelector('#primaSect p:first-child');
console.log(primoParSect1);

//se non sposo l'approccio di dichiarare tutti gli elementi del dom che mi serviranno in testa al file posso anche utilizzare direttamente il selettore senza passare da una costante o una variabile
document.querySelector('#primaSect p').textContent = 'NUOVO CONTENUTO';

const temp = (document.querySelectorAll('#primaSect p:first-child')[0].textContent = 'NUOVISSIMO CONTENUTO');

//dopo elemento.style ho accesso a tutte le proprietà css (scritte in camelcase quando ci sono i trattini ). RICORDA che style scrive il css inline
primoParSect1.style.backgroundColor = 'yellow';
primoParSect1.style.color = 'red';

//voglio bordare di rosso tutti gli elementi con classe bordered
//document.querySelectorAll seleziona tutti gli elementi che soddisfano il criterio e quindi restituisce sempre una lista.
const daBordare = document.querySelectorAll('.bordered');

//la riga seguente di codice non si può fare perchè .style non è una proprietà della collection ma degli oggetti html
//daBordare.style.border = '3px solid red';

for (const item of daBordare) {
  item.style.border = '3px solid red';
}

//GESTIONE DEGLI EVENTI
const cambiaColoreBtn = document.querySelector('button');

cambiaColoreBtn.addEventListener('click', function () {
  if (titoloPrincipale.style.color == 'green') {
    titoloPrincipale.style.color = 'blue';
    cambiaColoreBtn.textContent = 'Verdizza il titolo';
  } else {
    titoloPrincipale.style.color = 'green';
    cambiaColoreBtn.textContent = 'Bluizza il titolo';
  }
});
