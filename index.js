const search = document.querySelector('.search-bar');

let weather = {
    'apiKey': "ef78a68cfb56ee48982e1b1ec6e4af3e",
    
    fetchWeather(city) {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
        
        
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            } 
        return response.json()
        })
        .then(test => this.displayWeather(test))
        .catch((err) => {
           document.querySelector('.search-bar').value = err;
           
        //    Why can't i change this color to red??????????????????
           
        })
        document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1600×900/?${city}/?landscape)`
        document.body.style.backgroundSize = 'cover'
    },
    displayWeather: function(data) {
    const {name} = data
    const {icon, description} = data.weather[0]
    const {temp, humidity} = data.main
    const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector('.city').innerText = `Weather in ${name}`
    document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector('.description').innerText = `${description}`
    document.querySelector('.temp').innerText = ` ${Math.floor(temp)}°C`
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`
    document.querySelector('.weather').style.display = 'block'
    search.value = ''

    
    
    }
}

document.querySelector('button').addEventListener('click', function() {
    weather.fetchWeather(search.value)
})






