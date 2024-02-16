const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");


const getInfo = (event)=>{
    event.preventDefault();
    let cityVal = cityName.ariaValueMax;
    if(cityVal === ""){
       city_name.innerText = `Plz write the name before search`;
    }
    else{
           try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c76c1c9d8499d8c08b1900686a4d403e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
           }catch{
            city_name.innerText = `Plz enter city name properly`;
           }
    }
}



submitBtn.addEventListener('click',getInfo);