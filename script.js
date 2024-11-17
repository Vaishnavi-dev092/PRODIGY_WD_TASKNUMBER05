const API_KEY = "5ab12da87198408aa5861416241711"; // Your Weather API key

// Function to fetch weather data
async function getWeather() {
    const locationInput = document.getElementById("locationInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    // Clear previous weather info
    weatherInfo.innerHTML = "Loading...";

    try {
        // Fetch weather data from Weather API
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationInput}&aqi=no`);
        
        if (!response.ok) {
            throw new Error("Location not found");
        }

        const data = await response.json();

        // Display weather data
        weatherInfo.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}
