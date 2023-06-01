import axios from "axios";
import { Buffer } from "buffer";


const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
const baseUrlMap = 'https://tile.openweathermap.org/map';
const key = 'bd638e4200b146ec58ba870d99f926cd';


export const getMap = async (location: string) => {
    const coordinates = await axios.get(`${baseUrl}q=${location}&limit=5&appid=${key}`);
    //getting coordinates
    const lat = Math.abs(parseInt(coordinates.data[0].lat, 10));
    const lon = Math.abs(parseInt(coordinates.data[0].lon, 10));
    const zoom = 25;

    const mapResponse = await axios.get(`${baseUrlMap}/temp_new/${zoom}/${lat}/${lon}.png?appid=${key}`, { responseType: 'arraybuffer' });
    const buffer64 = Buffer.from(mapResponse.data, 'binary').toString('base64');
    const srcValue = "data:image/png;base64," + buffer64;

    fetch(`${baseUrlMap}/temp_new/${zoom}/${lat}/${lon}.png?appid=${key}`)
        .then(response => response.blob())
        .then(blob => {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64data = reader.result;
                console.log(base64data);
            }
        });
    /* console.log(mapResponse); */
    return srcValue;

};
