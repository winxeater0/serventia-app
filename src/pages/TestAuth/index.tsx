import axios, { AxiosError } from "axios";
import Cookies from 'js-cookie';
import { setupJwtToken } from '../../api/api';

export function TestWeather(){

    setupJwtToken();
    const urlBase = "http://localhost:43644/WeatherForecast";
    axios.get(urlBase, {
        headers: { 
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        }
    }).catch(function (error) {
      //redirect to login
    });
}

export default TestWeather();