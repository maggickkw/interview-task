
import  Axios,{ AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";



const baseUrl ='http://localhost:3000'

export async function client(
    endPoint: string,
    { data, method = "GET", ...customConfig }: AxiosRequestConfig = {}
  ) {

    console.log("client payload",JSON.stringify({endPoint,data},null,4))
  
    const axiosInstance = Axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: ``,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  
    // Request Interceptor
    axiosInstance.interceptors.request.use(
      async (config) => {
        // console.log("config ==>",JSON.stringify(config,null,3))
   
        return config;
      },
      (error: AxiosError) => {
        // console.error("Request Interceptor Error:", error);
        return Promise.reject(error);
      }
    );
  
    // Response Interceptor
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // console.error("Response Interceptor Error:", error);
        return Promise.reject(error);
      }
    );
  

    
    try {
      const response: AxiosResponse = await axiosInstance.request({
        url:endPoint,
        method,
        data,
        ...customConfig,
      });

      // console.log("response from api client",JSON.stringify(response,null,4))
      return response;
    } catch (error) {
      console.error(`API Request Error [${method} ${endPoint}]:`, error);
      throw error;
    }
  }


