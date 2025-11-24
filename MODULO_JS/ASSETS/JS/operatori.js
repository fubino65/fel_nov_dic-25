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
