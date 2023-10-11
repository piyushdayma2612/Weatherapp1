
console.log("hello")
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '736df0f722msh3f96ed4f5ecb5efp1736f7jsn5158b2d24857',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
console.log("hello")
const getWeather = (cityName) => {
	const cityUrl = url + `?city=${cityName}`;
    
	// city_Name.innerHTML = cityName

	// fetch(cityUrl, options)
	// .then(response => response.text())
	// .then(result => console.log(result))
	// .catch(error => console.error(error));
	
fetch(cityUrl, options)
  .then(response => response.json())
  .then(response => {
    //Cloud_pct.innerHTML = response.Cloud_pct;

		console.log(response)
		if(response.error){
			alert("city not found!!")
			return;
		}
		city_Name.innerHTML = cityName
		Fills_like.innerHTML = response.feels_like;
		Humidity.innerHTML = response.humidity;
		Max_temp.innerHTML = response.max_temp;
		Min_temp.innerHTML = response.min_temp;
		Sunrise.innerHTML = response.sunrise;
		Sunset.innerHTML = response.sunset;
		Temp.innerHTML = response.temp;
		Temp1.innerHTML = response.temp;
		Wind_degrees.innerHTML = response.wind_degrees;
		Wind_speed.innerHTML = response.wind_speed;
	})
	.catch(error => alert(error));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

function addExtraInfo(cityName){
	const cityUrl = url + `?city=${cityName}`;
    
    // city_Name.innerHTML = cityName

    fetch(cityUrl, options)
    .then(response => response.json())
    .then(result => {
		console.log(result, "helo")
		let element  = ` 
		<td style="width: 34%;">${cityName}</td>
		<td style="width: 22%;">${result.cloud_pct}</td>
		<td style="width: 22%;">${result.feels_like}</td>
		<td style="width: 22%;">${result.humidity}</td>
		<td style="width: 22%;">${result.max_temp}</td>
		<td style="width: 22%;">${result.min_temp}</td>
		<td style="width: 35%;">${result.sunrise}</td>
		<td style="width: 35%;">${result.sunset}</td>
		<td style="width: 22%;">${result.temp}</td>
		<td style="width: 22%;">${result.wind_degrees}</td>
		<td style="width: 22%;">${result.wind_speed}</td>
	 `
	let tr = document.createElement('tr');
	tr.innerHTML = element
	extraCity.insertAdjacentElement("afterend", tr);
	})
    .catch(error => console.error(error));
}
addExtraInfo("Delhi");
addExtraInfo("Jodhpur");
addExtraInfo("Jaipur");
addExtraInfo("Ajmer");