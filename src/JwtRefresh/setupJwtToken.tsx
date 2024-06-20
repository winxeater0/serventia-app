import axios, { AxiosError } from "axios";
import Cookies from 'js-cookie';

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

export function setupJwtToken(){

    let cookies = Cookies.get();
    const api = getAxios(cookies['accessToken']);

    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log("status code: "+ error?.response?.status);
        if(error?.response?.status === 401){
                const { "refreshToken": refreshToken } = cookies;

                const originalConfig: any = error.config;
                if(!isRefreshing) {
                    isRefreshing = true;
                    api.post("/refresh", { refreshToken: refreshToken})
                    .then((response:any)=>{
                        const { accessToken: accessToken, refreshToken:newRefreshToken } = response?.data;
                        //TODO setar o expires
                        Cookies.set('accessToken', accessToken);

                        //TODO setar o expires
                        Cookies.set('refreshToken', newRefreshToken);

                        api.defaults.timeout = 15000;
                        api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
                        api.defaults.headers["refreshToken"] = `${newRefreshToken}`;
                        failedRequestsQeue.forEach((request:any)=> request.onSuccess(accessToken));
                        failedRequestsQeue = [];
                    }).catch((err:any)=>{
                        failedRequestsQeue.forEach((request:any) => request.onFailure(err));
                        failedRequestsQeue = [];
                        
                    }).finally(() => {
                        isRefreshing = false;
                    });
                }
                return new Promise((resolve,reject) => {
                    failedRequestsQeue.push({onSucess:(accessToken:string)=> {
                        originalConfig.headers.headers["Authorization"] = `Bearer ${accessToken}`;
                        resolve(api(originalConfig));
                        },
                        onFailure:(err:AxiosError)=>{
                            reject(err);
                            }   
                        });
                    });
        }
        // else if(error?.response?.status != 200){ //TODO implementar um signout aqui, talvez com navigate mesmo. limpando os cookies. 
        //     signOut();
        // }

        return Promise.reject(error);
      });
}

export default setupJwtToken();