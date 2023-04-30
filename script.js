/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const section = document.querySelector('section');
fetch('/api/v3/NextPublicHolidays/JP').then(onResponse).then(onJson);

function onResponse(response){
    if(response.ok){
     return response.json();
    }
}

function onJson(json){
    console.log('Json received');
    const calendar = document.querySelector('#Date_Eventi');
}
