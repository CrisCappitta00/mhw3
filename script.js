/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const form = document.querySelector('form');
fetch('/api/v3/NextPublicHolidays/{countryCode}').then(onResponse).then(onJson);


