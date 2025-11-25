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
