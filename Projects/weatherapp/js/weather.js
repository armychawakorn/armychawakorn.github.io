export default class Weather{
    constructor(city){
        this.apikey = "bc688bd91bb04f4dc27d3b5e9222bc60";
        this.city = city;
        this.apiendpoint = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
    }
    GetAPI(){
        return this.apiendpoint;
    }
    

    GetDaysInMount = (month)=>{
        return new Date(new Date().getUTCFullYear(), month, 0).getDate();
    }
}