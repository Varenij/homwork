fetch("https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19") 
  .then((response) => response.json()) 
  .then((user) => console.log(user)); 

function myResponse() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
      .then((response) => response.json())
      .then((user) => {
        let img = document.createElement("img");
        let icon = user.weather[0].icon;
        img.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
        let humidity = user.main.humidity;
        let pressure = user.main.pressure;
        let speed = user.wind.speed;
        let deg = user.wind.deg;
        let description = user.weather[0].description.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        let temp = Math.round(user.main.temp);
        let feelsLikeTemp = Math.round(user.main.feels_like)

        document.getElementById('icon').append(img);
        document.getElementById('date').append(new Date());
        document.getElementById('time').append(`${new Date().getHours()}:${new Date().getMinutes()}`);
        document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
        document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`;
        document.getElementById('description').innerText = `${description}`;
        document.getElementById('wind').innerText = `Wind: ${speed} km/p ${deg} deg`;
        document.getElementById('temp').innerText = `${temp} C`
        document.getElementById('temp-feels-like').innerText = `Feels Like: ${feelsLikeTemp} C`
        
      });
  }
  let btn = document.querySelector("button");
  btn.addEventListener("click", myResponse);