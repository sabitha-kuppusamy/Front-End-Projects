const options = {
    method: 'GET',
    headers: {
        //use API-KEY in headers
        'X-RapidAPI-Key': '1f1d5d257dmshfd839b7caa51cc1p1deccfjsn2d1a99e51e3c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        // KEY removed because of security --> see on local storage from github
        
    }
};

//functions defined 
const getWeather = (city)=>{ 
cityName.innerHTML = city 
//taking city value dynamically
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        //different property defined 
        cloud_pct.innerHTML =  DOMPurify.sanitize(response.cloud_pct)
        temp.innerHTML = DOMPurify.sanitize( response.temp)
        temp2.innerHTML = DOMPurify.sanitize( response.temp)
        feels_like.innerHTML = DOMPurify.sanitize( response.feels_like)
        humidity.innerHTML =  DOMPurify.sanitize(response.humidity)
        humidity2.innerHTML = DOMPurify.sanitize( response.humidity)
        min_temp.innerHTML = DOMPurify.sanitize( response.min_temp)
        max_temp.innerHTML =  DOMPurify.sanitize(response.max_temp)
        wind_speed.innerHTML = DOMPurify.sanitize( response.wind_speed)
        wind_speed2.innerHTML = DOMPurify.sanitize (response.wind_speed)
      //  wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = DOMPurify.sanitize( response.sunrise)
        sunset.innerHTML =  DOMPurify.sanitize(response.sunset)
    })
    .catch(err => console.error(err));
}


//when clicking on submit button this event handling takes place
submit.addEventListener("click", (e)=>{
    //preventing reload when new city name is entered 
    e.preventDefault();
    getWeather(city.value)
})

//calling getWeather by default for Delhi 
getWeather("Delhi")