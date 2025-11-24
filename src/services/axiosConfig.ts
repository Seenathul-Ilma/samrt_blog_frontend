import axios, { AxiosError } from "axios";
import { refreshAccessToken } from "./auth";

const axiosConfig = axios.create({
    //baseURL: "http://localhost:5000/api/v1"
    baseURL: "https://smart-blog-backend-ten.vercel.app/api/v1"
})

const PUBLIC_ENDPOINTS = ["/auth/register", "/auth/login"]

// interceptors
axiosConfig.interceptors.request.use((myConfig) => {

    //myConfig.headers  // headers eliyta ganna puluvan
    //myConfig.url      // inne kothanada kiyl blgnna puluvan (URL)

    const token = localStorage.getItem("accessToken")

    const isPublic = PUBLIC_ENDPOINTS.some((url) => myConfig.url?.includes(url))

    if(token && !isPublic) {
        myConfig.headers.Authorization = `Bearer ${token}`
    }

    return myConfig
})

// I don't know how to connect/intergrate axiosConfig with refresh token here...
// Now OK...
axiosConfig.interceptors.response.use(
    (response) => {
        return response
    },
    async (err: AxiosError) => {   // async methana.. bcz ape function eka meka
        const originalRequest: any = err.config

        const isPublic = PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url))

        if(err.response?.status === 401 && !isPublic && !originalRequest._retry) {
            originalRequest._retry = true
            
            try {
                const refreshToken = localStorage.getItem("refreshToken")
                
                if(!refreshToken){
                    throw new Error("Oooppss.. No refresh token available..!")
                }

                const res = await refreshAccessToken(refreshToken)
                //localStorage.setItem("accessToken", res.accessToken)
                localStorage.setItem("accessToken", res.data.accessToken)

                //originalRequest.headers.Authorization = `Bearer ${res.accessToken}`
                originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`

                return axios(originalRequest)

            } catch (error) {
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                //localStorage.removeItem("role")
                window.location.href = "/login"
                
                console.error(error)
                return Promise.reject(error)
            }
        }

        // time consume
        return Promise.reject(err)
    }
)

export default axiosConfig