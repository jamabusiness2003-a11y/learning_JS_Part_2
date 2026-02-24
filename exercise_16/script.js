const cityInput = document.getElementById("cityInput");
const weatherBtn = document.getElementById("weatherBtn");
const cityEl = document.getElementById("city");
const temperatureEl = document.getElementById("temp");
const descriptionEl = document.getElementById("desc");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const weatherIcon = document.getElementById("icon");

const apiKey = "4e0edf54d012459049da45127c64e9a1";
const url = "https://api.openweathermap.org/data/2.5/weather?";
const savedLastCity = JSON.parse(localStorage.getItem("weather"));

let cityName = "";
let temperatureC = "";
let description = "";
let humidity = "";
let wind = "";
let icon = "";

if (savedLastCity) {
    cityName = savedLastCity.cityName;
    temperatureC = savedLastCity.temperature;
    description = savedLastCity.description;
    humidity = savedLastCity.humidity;
    wind = savedLastCity.wind;
    icon = savedLastCity.icon;
}

weatherBtn.addEventListener("click", () => {
    if (!cityInput.value) return;

    fetch(url + `q=${cityInput.value}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            cityName = data.name;
            temperatureC = `${data.main.temp}°C`;
            description = data.weather[0].description;
            humidity = `Humidity: ${data.main.humidity}%`;
            wind = `Direction: ${data.wind.deg}°, Wind Speed: ${data.wind.speed} m/s`;
            icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            saveLastSearchCity();
            updateWeatherDisplay();

            console.log(data);
        })
        .catch(error => console.error(error));
});


function updateWeatherDisplay() {
    cityEl.textContent = cityName;
    temperatureEl.textContent = temperatureC;
    descriptionEl.textContent = description;
    humidityEl.textContent = humidity;
    windEl.textContent = wind;
    weatherIcon.src = icon;
}

function saveLastSearchCity() {
    localStorage.setItem("weather", JSON.stringify({
        cityName,
        temperature: temperatureC,
        description,
        humidity,
        wind,
        icon
    }));
}

updateWeatherDisplay();