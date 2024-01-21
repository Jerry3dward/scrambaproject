fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('Author').textContent = `Image Author: ${data.user.name}`
    })
    .catch (err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1704722105454-2625cbecde68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU0MDE3NTJ8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById('Author').textContent = `Image Author: ${data.user.name}`
    })
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then (res => {
        if(!res.ok) {
        throw Error ("something went wrong")
    }
        return res.json()
    })
    .then (data => {
        document.getElementById('crypto-top').innerHTML = `
        <img src= ${data.image.small} /> 
        <span> ${data.name} </span>
        `
        document.getElementById('crypto').innerHTML +=`
        <p>Current: $${data.market_data.current_price.usd} </p>
        <p>High: $${data.market_data.high_24h.usd} </p>
        <p>Low: $${data.market_data.low_24h.usd} </p>
        `
    })
    .catch(err => console.error(err))
function getCurrentTime() {
    const date = new Date();
    document.getElementById('time').textContent = date.toLocaleTimeString("en-us", {timestyle: "short"})    
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.latitude}`)
        .then(res => {
            if (!res.ok) {
                throw Error ('weather data not avialable')
            }
            return res.json()
        })
        .then (data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('weather').innerHTML = `
            <img src= ${iconUrl} />
            <p>Temp: ${Math.round(data.main.temp)}°</p>
            <p class="weather-city">City: ${data.name}</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed}</p>
            `
            console.log('hi')
            console.log(document.getElementById('img-weather'));
        })
        .catch(err => console.error(err))
})




