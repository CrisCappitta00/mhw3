/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const form = document.querySelector('form');
/*Aggiungo un eventlistener che si attiva quando clicco su Cerca*/
form.addEventListener('submit', ricerca);

function ricerca(event){
    event.preventDefault();
    const nome_festivita = document.querySelector('#Festività');
    const valore = encodeURIComponent(nome_festivita.value);
    console.log(valore);
    /*Effettuare la richiesta con fetch */
    fetch('https://date.nager.at/api/v2/publicholidays/2023/JP').then(onResponse).then(onJson);
}