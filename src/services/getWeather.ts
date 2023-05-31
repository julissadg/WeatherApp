import axios from "axios";


const baseUrl = 'http://api.weatherapi.com/v1';
const key = '0f9d57b3c8c447d88af05434233105';

export const getCurrentWeather = async () => {
    const response = await axios.get(`${baseUrl}/current.json?key=${key}&q=London`);
    console.log(response);
    
};
