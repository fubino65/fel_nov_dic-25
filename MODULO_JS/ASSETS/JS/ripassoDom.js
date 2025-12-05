//COSTANTI

//ELEMENTI DEL DOM
const cerchio = document.getElementById('cerchio');
const codColoreP = document.getElementById('codiceColore');
const btnBlue = document.getElementById('blueBtn');
const btnRed = document.getElementById('redBtn');

//ALTRE VARIABILI

//GESTIONE DEGLI EVENTI
btnBlue.addEventListener('click', () => {
  coloraCerchio(btnBlue);
});

btnRed.addEventListener('click', () => {
  coloraCerchio(btnRed);
});
//FUNZIONI UTILI
function coloraCerchio(btn) {
  let colore = btn.dataset.color;
  cerchio.style.backgroundColor = colore;
  codColoreP.textContent = 'codice colore = ' + colore;
}
