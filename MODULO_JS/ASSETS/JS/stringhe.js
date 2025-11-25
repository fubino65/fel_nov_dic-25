console.log('questo testo è una stringa');
console.log('anche questo testo è una stringa');
// console.log('questa è una stringa
//     che va a capo'); la stringa fra virgolette o singoli apici non può essere spezzata su più righe
let stringa1 = 'fa freddo';
let stringa2 = 'ci sono 14 gradi';
console.log("che temperatura c'è oggi a Milano?\n" + stringa1 + '. E in Sicilia? ' + stringa2);
console.log("che temperatura c'è oggi a Milano? ", stringa1, '. E in Sicilia? ', stringa2);

let stringa3 = ''; //stringa vuota
stringa3 = ' '; //spazio vuoto

//TEMPLATE LITERAL
console.log(`questa è 
    un template literal`); //nota che posso spezzare la stringa

console.log(`che temperatura c'è oggi a Milano? ${stringa1}. E in Sicilia?${stringa2}`);

let domande = `che temperatura c'è oggi a Milano? ${stringa1}. E in Sicilia?${stringa2}`;
console.log(domande);

let htmlString = `
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>`; //in questo caso poter andare a capo mi permette di leggere meglio una struttura html
