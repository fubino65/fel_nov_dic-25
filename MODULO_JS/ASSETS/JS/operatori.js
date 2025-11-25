/***************** OPERATORI UNARI ***************/

//meno unario (inverte il segno di una variabile o un dato numerici)
let num1 = -18;
console.log(-num1); //qui num1 non è cambiato
num1 = -num1; //qui num1 è cambiato
let stringa1 = 'fulvia';
console.log(-stringa1); //se applico a una stringa ottengo NaN a meno che non sia una stringa con valore numerico es: "3"
stringa1 = '5';
console.log(-stringa1);

//+ unario (cerca di convertire una variabile in numero)
num1 = -20;
let num2 = +num1; //la variabile è già numerica per cui num2 è numerica
console.log(num2);

num1 = '33';
console.log(+num1); //la variabile è di tipo stringa ma il valore è numerico per cui può convertirla

num1 = '33trentini';
console.log(+num1); //la variabile è di tipo stringa e nonostante il valore inizi con un numerico non può convertirla
console.log(parseInt(num1)); //attenzione perchè per es il metodo parseInt converte in numero anche una stringa che inizia con un numero e poi prosegue come stringa

//! not logico inverte un valore booleano
let bool = true;
console.log(!bool); //bool non ha cambiato valore
bool = !bool; //bool cambia valore
console.log(bool);
bool = 0; //questo comportamento rientra nei concetti di truthy e falsy che vedremo più avanti
console.log(!bool);

//Operatori di incremento ++ e decremento --: aggiungono o sottraggono una unità dalla variabile numerica a cui sono applicati.
num1 = 50;
num1++; //non è necessario fare num1 = num1++ perchè l'incremento è automatico
console.log(num1);
++num1;
console.log(num1);
console.log(num1++); //poichè ++ è a destra(postfix)della variabile prima viene utilizzata la variabile POI viene incrementata
console.log(num1);
console.log(++num1); //poichè ++ è a sinistra(prefix)della variabile prima viene incrementata la variabile POI viene utilizzata
console.log(num1);
num1 = 10;
let risultato = 10 + num1++ - 5;
console.log(risultato);
console.log(num1);
num1 = 2;
risultato = num1++;
console.log(risultato);
console.log(num1);

//stesse operazioni con ++ prefix (a sinistra della variabile)
num1 = 10;
risultato = 10 + ++num1 - 5;
console.log(risultato);
console.log(num1);
num1 = 2;
risultato = ++num1;
console.log(risultato);
console.log(num1);

//risultato = 11++; impossibile perchè il ++ e il -- possono essere applicati SOLO a una variabile.

/***************** OPERATORI BINARI ***************/

//MATEMATICI
// +-*/ per le 4 operazioni
// % (modulo) restituisce il resto di una divisione (molto utile per sapere se un numero è multiplo di un altro)
num1 = 4;
num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 / 0);
console.log(num2 % num1); //resto di 5/4
console.log(1 % 2);
num1 = 10;
num2 = 5;
console.log(num1 % num2);
//ricordiamo che * e / hanno la precedenza su + e -;Se voglio una precedenza diversa devo usare le parentesi.
console.log((5 + 4) * (7 - 9) * 3);
console.log(5 + 4 * 7 - 9 * 3);

//ESERCIZI
//1.Crea tre variabili con il tuo nome, cognome ed età. Usa un template literal per stampare in console: "Mi chiamo [nome] [cognome] e ho [età] anni."
let nome = 'Fulvia',
  cognome = 'Grignaschi',
  eta = 60;
console.log(`Mi chiamo ${nome} ${cognome} e ho ${eta} anni`);

//2.Dichiara due variabili numeriche e calcola:
// La loro somma
// La loro differenza
// Il loro prodotto
// La loro divisione
// Stampa ogni risultato con un messaggio descrittivo usando template literals.
num1 = 40;
num2 = 5;

let somma = num1 + num2;
console.log(`${num1} + ${num2} = ${somma}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);

//3. Crea una variabile booleana piove con valore true. Usa l'operatore ! per creare una nuova variabile nonPiove e stampa un messaggio: "È vero che non piove? [valore]"
let piove = true;
let nonPiove = !piove;
console.log(`È vero che non piove? ${nonPiove}`);

//4. Converti una temperatura da Celsius a Fahrenheit usando la formula: F = C * 9/5 + 32. Parti da celsius = 25 e stampa: "25°C corrispondono a [risultato]°F"
let celsius = 25;
let fahr = (celsius * 9) / 5 + 35;
console.log(`${celsius}°C corrispondono a ${fahr}°C`);
//oppure
console.log(`${celsius}°C corrispondono a ${(celsius * 9) / 5 + 35}°C`);

//5. Qual è il resto della divisione 18/7?
console.log(`il resto di 18/7 è ${18 % 7}`);

//RELAZIONALI (il risultato è sempre un valore booleano)
num1 = 5; //tipo dato number valore 5
num2 = 15; //tipo dato number valore 15
console.log(num1 > num2); //confronta solo il valore

num1 = 5;
num2 = 5;
console.log(num1 >= num2); //confronta solo il valore

num1 = 5;
num2 = 2;
console.log(num1 < num2); //confronta solo il valore

num1 = 5;
num2 = '2'; //il valore è 2 anche se è di tipo stringa
console.log(num1 < num2); //confronta solo il valore

num1 = 5;
num2 = 5;
console.log(num1 <= num2); //confronta solo il valore

num1 = 5; //tipo dato number valore 5
num2 = '5'; //tipo dato string valore 5

console.log(num1 == num2); //considera solo il valore
console.log(num1 != num2); //considera solo il valore
console.log(num1 === num2); //considera sia tipo di dato che valore
console.log(num1 !== num2); //considera sia tipo di dato che valore

num1 = 5;
num2 = 5;
console.log(num1 == num2); //considera solo il valore
console.log(num1 != num2); //considera solo il valore
console.log(num1 === num2); //considera sia tipo di dato che valore
console.log(num1 !== num2); //considera sia tipo di dato che valore

bool = true;
let bool2 = true;
console.log(bool == bool2);
console.log(bool === bool2);
console.log(bool != bool2);
console.log(bool !== bool2);

let stringa = 'schermo';
let stringa2 = 'Schermo';
console.log(stringa != stringa2);
console.log(stringa !== stringa2);

stringa = 'schermo';
stringa2 = 'schermo';
console.log(stringa != stringa2);
console.log(stringa !== stringa2);
console.log(stringa == stringa2);
console.log(stringa === stringa2);

//DI ASSEGNAZIONE COMPOSTI
num1 = 10;
//voglio incrementare num1 di 3 in modo che alla fine num1 valga 13
num2 = 3;
num1 = num1 + num2;
console.log(num1);
//oppure usando un operatore composto
num1 = 10;
num1 += num2;
console.log(num1);

//DI CONCATENAZIONE DELLE STRINGHE
nome = 'Fulvia';
cognome = 'Grignaschi';
eta = 60;
console.log('mi chiamo ' + nome + ' ' + cognome + ' e ho ' + eta + ' anni');
let spazio = ' ';
console.log('mi chiamo ' + nome + spazio + cognome + spazio + 'e ho ' + eta + ' anni');

//Attenzione: quando concateno numeri con almeno una stringa esegue la somma fino a quando trova la stringa poi concatena
num1 = 10;
num2 = 4;
let num3 = '7';

console.log(num1 + num2 + num3);
console.log(10 + 4 + '7');
console.log(num3 + num1 + num2);
console.log('7' + 10 + 4);
console.log(num3 + (num1 + num2));
console.log(+num3 + (num1 + num2));
num3 = 'filippo';
console.log(+num3 + (+num1 + +num2));

//LOGICI
let dividendo = 9;
let divisore = 3;
//voglio testare (capire, verificare) se il divisore è maggiore di 3 e se il dividendo è un multiplo del divisore
console.log(divisore > 3 && dividendo % divisore == 0); //il primo confronto è false per cui non è necessario eseguire la seconda parte
console.log(dividendo % divisore == 0 && divisore > 3); //il primo confronto è vero per cui è necessario eseguire la seconda parte

//voglio testare (capire, verificare) se il divisore è maggiore di 3 o se il dividendo è un multiplo del divisore
console.log(divisore > 3 || dividendo % divisore == 0); //il primo confronto è falso per cui è necessario eseguire la seconda parte
console.log(dividendo % divisore == 0 || divisore > 3); //il primo confronto è true per cui non è necessario eseguire la seconda parte

console.log(!(dividendo % divisore == 0 || divisore > 3));
console.log(!(divisore <= 3) || dividendo % divisore == 0);

//TYPEOF restituisce una stringa che identifica il tipo di dato

num1 = 10;
console.log(typeof num1);
console.log(typeof num1 == 'number');
console.log(typeof num1 == 'string');

bool = false;
console.log(typeof bool);

stringa = 'elefante';
console.log(typeof stringa);
console.log(typeof +stringa);
stringa = '5';
console.log(typeof stringa);
console.log(typeof +stringa);

//ESERCIZI
//6. Data una variabile numerica verificare se è dispari
num1 = 24;
console.log('num1 è dispari? ', num1 % 2 == 1);
console.log('num1 è dispari? ', num1 % 2 != 0);
console.log('num1 è dispari? ', !(num1 % 2 == 0));

//7. Date due variabili numeriche valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.
num1 = 4;
num2 = 15;
console.log((num1 > 0 && num2 < 20) || num1 === 5); //le parentesi rosa non sono necessarie (perchè la && ha precedenza sul ||)ma sono cmq utili a comprendere più velocemente il senso del codice

//8. Date due stringhe valutare se stringa1 non è vuota ("", '', ``) e stringa2 non è la parola "treno".
let str1 = '000';
let str2 = 'treno';

console.log(!str1 == '' && str2 !== 'treno');
console.log(str1 != '' && str2 !== 'treno');

//9. Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.
num1 = 4;
num2 = 15;
num3 = 21;

console.log((num1 > 0 || num2 < 20) && num3 >= 10 && num3 <= 20);

//guarda come cambia il risultato se tolgo le parentesi (o le sposto perchè il formattatore me le sposta sugli end)
console.log(num1 > 0 || (num2 < 20 && num3 >= 10 && num3 <= 20));

//10. Calcola e stampa le calorie giornaliere. Partendo da calorie = 0. Aggiungi le calorie di ogni pasto:

// Colazione: 350 calorie
// Spuntino: 100 calorie
// Pranzo: 600 calorie
// Cena: 500 calorie
// Sport: calorie bruciate 400

let calorieDie = 0;
console.log('calorie dopo colazione = ' + (calorieDie += 350));
console.log('calorie dopo spuntino = ' + (calorieDie += 100));
console.log('calorie dopo pranzo = ' + (calorieDie += 600));
console.log('calorie dopo cena = ' + (calorieDie += 500));
console.log('calorie dopo sport (TOT CALORIE DEL GIORNO)) = ' + (calorieDie -= 400));

//11. Immagina un videogioco nel quale parti con 10 danni. Raccogli potenziamenti:

// Spada magica: raddoppia il danno
// Pozione forza: aumenta di 15
// Armatura pesante: riduce a metà
// Stampa il danno finale.
let danni = 10;
console.log('danni dopo spada magica= ' + (danni *= 2));
console.log('danni dopo pozione forza= ' + (danni += 15));
console.log('danni dopo armatura pesante = ' + (danni /= 2));
console.log('DANNO FINALE = ' + danni);

//N.B. gli operatori di assegnazione composti non possono essere concatenati
