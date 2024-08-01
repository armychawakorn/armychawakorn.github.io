export default class Weather{
    constructor(){
        this.apikey = "bc688bd91bb04f4dc27d3b5e9222bc60";
    }
    GetAPI(){
        return this.apiendpoint;
    }
    

    GetDaysInMount = (month)=>{
        return new Date(new Date().getUTCFullYear(), month, 0).getDate();
    }

    async GetAllCity(){
        const url = "js/thai_provinces.json";
        const res = await fetch(url).then((response) => response.json());
        return res;
    }

    async GetWeather(city){
        const apiendpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}&units=metric`;
        const res = await fetch(apiendpoint).then((response) => response.json());
        return res;
    }

    async GetWeatherByCity(city){
        const allcity = await this.GetAllCity();
        const traget_city = allcity.find(c=>c.name_en == city);
        if(traget_city){
            const res = await this.GetWeather(traget_city.name_en);
            return res;
        }else{
            return "City not found";
        }
    }
}