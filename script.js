document.getElementById('myAudio').play();

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "a8ec0ba33f39bf412127e9180c198a7b"
    
}
const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
      getInfo(input.value);
      input.value="";
    }
  }

async function getInfo (data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&lang=ru&appID=${api.key}`);
  const result = await res.json();
  
  displayResult(result);
}
function displayResult(result){
  console.log(result);
  let city = document.querySelector('#city');
  city.textContent = `${result.name}, ${result.sys.country}`;
  getBackgroundImage(result);
  getOurDate();
  

  let temperature = document.querySelector('#temperature');
  temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
  

  let feelsLike = document.querySelector('#feelsLike');
  feelsLike.innerHTML = `Ощущается как: ${Math.round(result.main.feels_like)}<span>°</span>`;

  let conditions = document.querySelector('#conditions');
  conditions.textContent = `${result.weather[0].description}`;

  let variation = document.querySelector('#variation');
  variation.innerHTML = `Мин.: ${Math.round(result.main.temp_min)}<span>°</span> Макс.: ${Math.round(result.main.temp_max)}<span>°</span>`;



}

function getOurDate(){
  const myDate = new Date();
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

  let day = days[myDate.getDay()];
  //console.log(day);

  let todayDate = myDate.getDate();
  //console.log(todayDate);

  let month = months[myDate.getMonth()];
  //console.log(month);

  let year = myDate.getFullYear();
  //console.log(year)

  let showDate = document.querySelector('#date');
  showDate.textContent = `${day} ` + ` ${todayDate} ` + ` ${month} ` + ` ${year}`
}

function getBackgroundImage(result) {
  let conditions = `${result.weather[0].main}`;
  //let conditions = result.weather[0].main;
  
   
  if (conditions === "Clear") {
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1551815943-385d5246c8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
    if (conditions === "Clouds") {
        document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
   if (conditions === "Mist" || conditions === "Smoke" || conditions === "Haze" || conditions === "Dust" || conditions === "Fog" || conditions === "Sand" || conditions === "Ash" || conditions === "Squall" || conditions === "Tornado") {
    document.body.style.backgroundImage =
     "url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80')";
   }
   
  if (conditions === "Snow") {
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1608315398428-c6d76804838d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
  if (conditions === "Rain") {
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
  if (conditions === "Drizzle") {
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1505404919723-002ecad81b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
  if (conditions === "Thunderstorm") {
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  }
   
  }