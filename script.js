/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const section = document.querySelector('section');
fetch('https://api.sunrisesunset.io/json?lat=36.474328641705696&lng=138.72064733614394&timezone=GMT+9&date=today').then(onResponse).then(onJson);

function onResponse(response){
    if(response.ok){
     return response.json();
    }
}

function onJson(json){
    console.log('Json received'); 
}
