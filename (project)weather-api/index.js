const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card")
const apikey = "c8e87eb80ca129005300160a3f7c2533";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData)

        }catch(error){
            console.log(error)
            displayError(error)
        }

    }else{
        displayError("Error wak mana kotanya");
        
    }

})

async function getWeatherData(city) {

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("Tidak bisa menemukan kota")
    }
    
    return await response.json();
}

function displayWeatherInfo(data){

    console.log(data)
    
    const {name:city, 
           main:{temp, humidity}, 
           weather: [{description, id}]} = data;


    card.style.display = "flex"
    card.textContent = "";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp -273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = displayWeatherEmoji(id);
    

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji)

    

}

function displayWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️" ;
            
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
            
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"
            
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
            
        case (weatherId >= 700 && weatherId < 782):
            return "🌫";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 805):
            return "☁️";
            
    }

}

function displayError(message){

   const errorMessage =  document.createElement("p");
   errorMessage.textContent = message
   errorMessage.classList.add("errorMessage");

   card.textContent = "";
   card.style.display = "flex"
   card.appendChild(errorMessage)


}