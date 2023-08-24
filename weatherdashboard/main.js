const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const currentWeather = document.getElementById("currentWeather");
const forecast = document.getElementById("forecast");

searchButton.addEventListener("click", fetchWeather);

const API_KEY = "your_api_key";

async function fetchWeather() {
    const city = cityInput.value;

    if (city.trim() === "") {
        return;
    }

    try {
        const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const currentData = await currentResponse.json();

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        currentWeather.innerHTML = "An error occurred while fetching weather data.";
        forecast.innerHTML = "";
    }
}

function displayCurrentWeather(data) {
    currentWeather.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
}

function displayForecast(data) {
    forecast.innerHTML = "";
    const forecastItems = data.list.filter(item => item.dt_txt.includes("12:00"));

    forecastItems.forEach(item => {
        const date = new Date(item.dt * 1000);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const dateString = date.toLocaleDateString("en-US", options);

        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `
            <p class="forecast-date">${dateString}</p>
            <p class="forecast-temp">${item.main.temp}°C</p>
            <p class="forecast-description">${item.weather[0].description}</p>
        `;
        forecast.appendChild(forecastItem);
    });
}
