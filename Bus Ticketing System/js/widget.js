function getCurrentTime() {
    const currentDatetime = new Date();
  
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const month = months[currentDatetime.getMonth()];
    const day = currentDatetime.getDate();
    const year = currentDatetime.getFullYear();
  
    let hours = currentDatetime.getHours();
    const minutes = currentDatetime.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
  
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
  
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
    const formattedDate = `${month} ${day}, ${year}`;
  
    return { date: formattedDate, time: formattedTime };
  }
  
  // Update the time every second
  function updateClock() {
    const { date, time } = getCurrentTime();
  
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
  }
  
  // Initial call to set up the clock
  getCurrentTime();
  updateClock();

  
  // Update the time every second
  setInterval(updateClock, 1000);
  



  // ************************ WEATHER ************************ 
  
  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '6bb358bae5112f3eaa7bf25ed73ec33a';
const city = 'Bogo City, Cebu';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();

            // Extract relevant weather information
            const weatherConditions = data.weather[0].description;
            const temperatureCelsius = data.main.temp;

            console.log(`Weather conditions: ${weatherConditions}`);
            console.log(`Temperature: ${temperatureCelsius}°C`);
            document.getElementById('weather').textContent = weatherConditions;
            document.getElementById('temperature').textContent = `${temperatureCelsius}°C`;
        } else {
            console.log('Failed to retrieve weather data.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the fetchWeather function to get and display weather information
fetchWeather();
