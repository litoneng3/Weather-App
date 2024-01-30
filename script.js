
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2abda7ec24mshfdf8883f5b275f0p1dd4f0jsn083a0388379e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather =(city) =>{
    cityName.innerHTML= city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        console.log("temperature is :", response.temp)
        console.log("cloud pct is :", response.cloud_pct)
        cloud_pct.innerHTML = response.cloud_pct
        temp2.innerHTML = response.temp
        temp3.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunset.innerText= response.sunset
        const sunriseTimestamp = 1706182746;
        const sunriseDate = new Date(sunriseTimestamp * 1000); // JavaScript uses milliseconds, so multiply by 1000

        // Extract hour, minutes, and seconds
        const hour = sunriseDate.getUTCHours();
        const minutes = sunriseDate.getUTCMinutes();
        const seconds = sunriseDate.getUTCSeconds();
        
        console.log("Sunrise time:");
        console.log("Hour:", hour);
        console.log("Minutes:", minutes);
        console.log("Seconds:", seconds);
    })
    .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
} )
getWeather("Rajshahi")