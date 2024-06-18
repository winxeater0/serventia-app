import axios, { AxiosError } from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { TestWeather } from '../pages/TestAuth/index';

let isRefreshing = false;
let failedRequestsQeue: any = [];

export const getAxios = (token: string): any =>{
    return axios.create({
        baseURL: "http://localhost:43644",
        timeout: 1000,
        headers: { 
            Authorization: `Bearer ${token}`
        },
    });
}

export function setupJwtToken(ctx = undefined){
    // let cookies = parseCookies(ctx);
    // console.log(cookies);
    // const api = getAxios(cookies['accessToken']);
    // api.interceptors.response.use(
    //     (response:any) => { 
    //         return response
    //     },
    //     (error:any) => {

    //     console.log("teste akiii")
    //     // if(error?.response?.status === 401){
    //     //     if(error?.response?.data?.error === "Unauthorized"){
    //     //     console.log("renova token");
    //     //     cookies = parseCookies(ctx);

    //     //     const {"refreshToken": refreshToken } = cookies;

    //     //     const originalConfig: any = error.config;
    //     //     if(!isRefreshing) {
    //     //         isRefreshing = true;
    //     //         api.post("/refresh", { refreshToken: refreshToken})
    //     //         .then((response:any)=>{
    //     //             const { accessToken: accessToken, refreshToken:newRefreshToken } = response?.data;
    //     //             setCookie(ctx, "acessToken", accessToken, {
    //     //                 maxAge: 3600,
    //     //                 path: "/",
    //     //             });
    //     //             setCookie(ctx, "refreshToken", newRefreshToken, {
    //     //                 maxAge: 30 * 24 * 60 * 60,
    //     //                 path: "/",
    //     //             });
    //     //             api.defaults.timeout = 15000;
    //     //             api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    //     //             api.defaults.headers["efreshToken"] = `${newRefreshToken}`;
    //     //             failedRequestsQeue.forEach((request:any)=> request.onSuccess(accessToken));
    //     //             failedRequestsQeue = [];
    //     //         }).catch((err:any)=>{
    //     //             failedRequestsQeue.forEach((request:any) => request.onFailure(err));
    //     //             failedRequestsQeue = [];
    //     //         }).finally(() => {
    //     //             isRefreshing = false;
    //     //         });
    //     //     }
    //     //     return new Promise((resolve,reject) => {
    //     //         failedRequestsQeue.push({onSucess:(accessToken:string)=> {
    //     //             originalConfig.headers.headers["Authorization"] = `Bearer ${accessToken}`;
    //     //             resolve(api(originalConfig));
    //     //             },
    //     //             onFailure:(err:AxiosError)=>{
    //     //                 reject(err);
    //     //                 }   
    //     //             });
    //     //         });
    //     //     }
    //     // }

    //     return Promise.reject(error);
    //     }
    // )
    TestWeather();


    console.log("teste aki");
    //console.log(api.interceptors.request);
}

export default setupJwtToken();