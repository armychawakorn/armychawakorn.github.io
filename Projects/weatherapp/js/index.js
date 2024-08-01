import Weather from './weather.js';

const weather = new Weather();
const citySelect = document.getElementById('city');
citySelect.addEventListener('change', async (e) => {
    if (e.target.value) {
        const weatherData = await weather.GetWeatherByCity(e.target.value);
        const weatherContainer = document.getElementById('weather-container');
        const date = new Date(weatherData.dt * 1000);
        const feels_like = weatherData.main.feels_like;
        const humidity = weatherData.main.humidity;
        const pressure = weatherData.main.pressure;
        const temp = weatherData.main.temp;
        const temp_max = weatherData.main.temp_max;
        const temp_min = weatherData.main.temp_min;
        const wind_speed = weatherData.wind.speed;
        const current_weather = weatherData.weather[0];
        weatherContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">วันที่: ${date.toUTCString()}</p>
                    <p class="card-text">อุณหภูมิ: ${temp} °C</p>
                    <p class="card-text">อุณหภูมิสูงสุด: ${temp_max} °C</p>
                    <p class="card-text">อุณหภูมิต่ำสุด: ${temp_min} °C</p>
                    <p class="card-text">ความชื้น: ${humidity} %</p>
                    <p class="card-text">ความดัน: ${pressure} hPa</p>
                    <p class="card-text">ความรู้สึก: ${feels_like} °C</p>
                    <p class="card-text">ความเร็วลม: ${wind_speed} m/s</p>
                    <p class="card-text">สภาพอากาศปัจจุบัน: <img src="http://openweathermap.org/img/wn/${current_weather.icon}.png" class="card-img-top" alt="${current_weather.description}" style="width: 50px; height: 50px;">${current_weather.main}</p>
                </div>
            </div>
        `;
    }
})
weather.GetAllCity().then((res) => {
    res.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name_en;
        option.text = city.name_th;
        citySelect.appendChild(option);
    });
})
