import axios, { AxiosError } from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export function TestWeather(){
    const urlBase = "http://localhost:43644/WeatherForecast";
    const cookies = parseCookies()
    axios.get(urlBase, {
        headers: { 
            Authorization: `Bearer ${cookies['accessToken']}`
        }
    }).catch(function (error) {
        console.log("status " +error.response) // res
        console.log("error " +error.response.data.error) //Please Authenticate or whatever returned from server
      if(error.response.status==401){
        console.log("red log")
        //redirect to login
      }
    });
}

export default TestWeather();