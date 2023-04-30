/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const form = document.querySelector('form');
form.addEventListener('submit', ricerca);

function ricerca(event){
    event.preventDefault();
    const nome_festivita = document.querySelector('#Festività');
}