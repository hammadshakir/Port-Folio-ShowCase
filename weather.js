const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
const img = document.querySelector(".img")
const temp = document.querySelector(".temp")
const desc = document.querySelector(".desc")
const currentLocation = document.querySelector(".location")
const humidity = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const feelslike = document.querySelector("#feelslike") 

const apiKey = "8be0a736bba7916246f304cdb292c397"

btn.addEventListener("click", async () => {
    try {
        
        const city = input.value.trim()
        if (!city) {
            alert("Enter Your City")
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        
        const res = await fetch(url)
        const data = await res.json();
        weatherData(data)
    } 
    catch (error) {
        console.log("City Not Found")
        alert("City Not Found")
    }
})
function weatherData(data) {
img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


   temp.textContent = `${Math.floor(data.main.temp)}°C`
    desc.textContent = `${data.weather[0].description}`
    currentLocation.textContent =`${data.name}, ${data.sys.country}`
humidity.textContent=`${Math.floor(data.main.humidity)}%`
wind.textContent =`${data.wind.speed} km/h`
feelslike.textContent=`${Math.floor(data.main.feels_like)}°C`

}



