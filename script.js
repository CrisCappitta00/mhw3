/*Creazione Api senza autenticazione */
/*Creo una variabile che memorizza il primo elemento restituito da queryselector */
const url = "https://api.sunrisesunset.io/json?lat=36.474328641705696&lng=138.72064733614394&timezone=GMT+9&date=today";
const promise_api = fetch(url).then(onSuccess, onError);
promise_api.then(onJson);

function onSuccess(Response){
  if(Response.ok){
    console.log(Response);
    return Response.json();
  }
}
function onJson(Json){
     console.log("Questo e' il json inviato dall'API");
     console.log(Json);
     const orario_alba = document.querySelector('#orario-alba');
     orario_alba.innerHTML = Json.results.sunrise;
     const orario_tramonto = document.querySelector('#orario-tramonto');
     orario_tramonto.innerHTML = Json.results.sunset;
     const dawn = document.querySelector('#dawn');
     dawn.innerHTML = Json.results.dawn;
     const dusk = document.querySelector('#dusk');
     dusk.innerHTML = Json.results.dusk;
     const today = document.querySelector('#data-attuale');
     const current_time = new Date().toLocaleDateString();
     today.innerHTML = "Today <br>" + current_time;
     const time_section = document.querySelector('#time-section');
     time_section.classList.remove('hidden');
}
function onError(Error){
    console.error(Error);
}

const client_id = "aecd6c46041a4bad80caf5a277f7010f";
const client_secret = "7562ddc24b4045cfbb3d20163eb1d129";
const url_spot = "https://accounts.spotify.com/api/token";

fetch(url_spot,{
  method: 'POST',
  body: "grant_type=client_credentials",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
  }
}).then(onSuccess, onError).then(onSpoJson);

function onSpoJson(Json){
  console.log(Json);
  const accessToken = Json.access_token;
  const q = "Kawa no nagare no you ni";
  const url = "https://api.spotify.com/v1/search?type=album&q=" + q;
  fetch(url,{
    headers: {
      'Authorization': 'Bearer ' + accessToken
  }
}
  ).then(onSuccess, onError).then(onSpoAnswerJSon);
}

function onSpoAnswerJSon(Json){
  console.log(Json);
  const img = document.querySelector('#Musica img');
  img.src = Json.albums.items[6].images[1].url;
  const titolo = document.querySelector('#titolo');
  titolo.innerHTML = Json.albums.items[6].name;
  const databrano = document.querySelector('#data-brano');
  databrano.innerHTML = Json.albums.items[6].release_date;
  const autore = document.querySelector('#autore');
  autore.innerHTML = Json.albums.items[6].artists[0].name;
  const link = document.querySelector('#Musica a');
  link.href = Json.albums.items[6].external_urls.spotify;
}
