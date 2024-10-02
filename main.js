
const usedapi = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "0b3981732836c07ba177560a86ed1c77";


async function checkweather() {
    let city = document.getElementById("city_holder").value;

    const response = await fetch(usedapi + city + `&appid=${apikey}`);

    let data = await response.json();// await use vayo kina ki ramrai json format ma aauna time lagxa


    document.getElementsByClassName("city_name")[0].innerHTML = data.name;
    document.getElementsByClassName("city_temp")[0].innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementsByClassName("city_humidity")[0].innerHTML = data.main.humidity + "%";
    document.getElementsByClassName("city_feel")[0].innerHTML = Math.round(data.wind.speed) + "km/hr";


    if (data.weather[0].main == "Rain") {
        const imgElement = document.getElementById('weather_img');
        imgElement.src = "/images/rainy.png";
    }
    else if (data.weather[0].main == "Clear") {
        const imgElement = document.getElementById('weather_img');
        imgElement.src = '/images/cloud-sun.png';
    }
    else if (data.weather[0].main == "Clouds") {
        const imgElement = document.getElementById('weather_img');
        imgElement.src = '/images/cloudy.png';
    }
    else if (data.weather[0].main == "Drizzle") {
        const imgElement = document.getElementById('weather_img');
        imgElement.src = '/images/drizzle.png';
    }
    else if (data.weather[0].main == "Mist") {
        const imgElement = document.getElementById('weather_img');
        imgElement.src = '/images/mist.png';
    }


}
