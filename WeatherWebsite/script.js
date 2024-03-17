var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');



var apik = "9bd1441f7b134b7b34b3d8147088e11b";
var apik = "34ec7d38ac8545f4c02dd276a4ce265d";
var apik = "570c3b5f4a0706c9d12c358013707626";
var apik = "cea54eeb2e30f87d021b6e0c01abbcb0";
var apik = "df1ff97c56aa36dc651e16ec76e97a02";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {


    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
