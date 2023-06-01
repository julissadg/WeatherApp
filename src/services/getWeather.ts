import axios from "axios";


const baseUrl = 'https://api.weatherapi.com/v1';
const key = '0f9d57b3c8c447d88af05434233105';

export const getCurrentWeather = async (location:string) => {
    const response = await axios.get(`${baseUrl}/forecast.json?key=${key}&q=${location}&days=8`);
    return response;
    
};
