/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const section = document.querySelector('section');
const url = "https://api.sunrisesunset.io/json?lat=36.474328641705696&lng=138.72064733614394&timezone=GMT+9&date=today";
fetch(url).then(onSuccess, onError).then(onJson);
function onSuccess(Response){
  if(Response.ok){
    console.log(Response);
    return Response.json();
  }
}
function onJson(Json){
     console.log(Json);
}
function onError(Error){
    console.error(Error);
}
