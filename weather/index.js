
console.log("hello akash")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd295065571msh19adad8b8c638bap1db9cdjsndc25a95eed5d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


const file = async ()=>{
    
    
    let url = "https://weatherapi-com.p.rapidapi.com/current.json?q=jaipur&aqi=yes"

try{
    let data = await fetch(url,options);
    let getdata = await data.json();
    
    
        let weatherimg = document.getElementById("weatherimg")
        weatherimg.src = getdata.current.condition.icon;
        weatherimg.style.width = "7rem";
        weatherimg.style.height = "7rem";
        weatherimg.style.backgroundColor = "transparent"
        weatherimg.style.marginLeft = "1rem"
        


        let country = document.getElementById("country")
        country.innerText ="Country : " + getdata.location.country;

        let name = document.getElementById("name")
        name.innerText ="Location : " + getdata.location.name;

        let localtime = document.getElementById("localtime")
        localtime.innerText = "Local time : " + getdata.location.localtime;

        let region = document.getElementById("region")
        region.innerText ="Dist : " +getdata.location.region;

        let wind_dir =document.getElementById("wind_dir")
        wind_dir.innerText = "Wind Direction : " +  getdata.current.wind_dir;

        let wind_kph =document.getElementById("wind_kph")
        wind_kph.innerText = "Wind Kph : " +  getdata.current.wind_kph;

        let temp_c =document.getElementById("temp_c")
        temp_c.innerText = "Temp. C : " +  getdata.current.temp_c;

        let temp_f =document.getElementById("temp_f")
        temp_f.innerText = "Temp. F : " +  getdata.current.temp_f;

        let vis_km =document.getElementById("vis_km")
        vis_km.innerText = "Visibility Km. : " +  getdata.current.vis_km;

        let updatetextarea = document.getElementById("updatetime")
        updatetextarea.innerText = "Last Update : " + getdata.current.last_updated;
        let weatherarea = document.getElementById("weather")

        weatherarea.innerText = "Weather Condition : " +getdata.current.condition.text;
        weatherarea.style.marginTop = "2rem"

    
}
catch (error){
console.log(error)
}
}
file()
let city = "";
replacefile = async()=>{
    
    
    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}&aqi=yes`

try{
    let data = await fetch(url,options);
    let getdata = await data.json();
    
    
        let weatherimg = document.getElementById("weatherimg")
        weatherimg.src = getdata.current.condition.icon;
        weatherimg.style.width = "7rem";
        weatherimg.style.height = "7rem";
        weatherimg.style.backgroundColor = "transparent"
        weatherimg.style.marginLeft = "1rem"
        


       
        


        let country = document.getElementById("country")
        country.innerText ="Country : " + getdata.location.country;

        let name = document.getElementById("name")
        name.innerText ="Location : " + getdata.location.name;

        let localtime = document.getElementById("localtime")
        localtime.innerText = "Local time : " + getdata.location.localtime;

        let region = document.getElementById("region")
        region.innerText ="Dist : " +getdata.location.region;

        let wind_dir =document.getElementById("wind_dir")
        wind_dir.innerText = "Wind Direction : " +  getdata.current.wind_dir;

        let wind_kph =document.getElementById("wind_kph")
        wind_kph.innerText = "Wind Kph : " +  getdata.current.wind_kph;

        let temp_c =document.getElementById("temp_c")
        temp_c.innerText = "Temp. C : " +  getdata.current.temp_c;

        let temp_f =document.getElementById("temp_f")
        temp_f.innerText = "Temp. F : " +  getdata.current.temp_f;

        let vis_km =document.getElementById("vis_km")
        vis_km.innerText = "Visibility Km. : " +  getdata.current.vis_km;


        let updatetextarea = document.getElementById("updatetime")
        updatetextarea.innerText = "Last Update : " + getdata.current.last_updated;
        let weatherarea = document.getElementById("weather")
        weatherarea.innerText = "Weather Condition : " +getdata.current.condition.text;
        weatherarea.style.marginTop = "2rem"

    console.log(getdata)
    
}
catch (error){
console.log(error)
}
}
replacefile()

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
 city  = document.getElementById("searchcity").value
replacefile()

})

document.getElementsByTagName("form")[0].onsubmit = function() {return false;}
