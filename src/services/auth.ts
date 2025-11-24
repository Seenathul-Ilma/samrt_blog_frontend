// authentication related api intergrations here (api calls)

import axiosConfig from "./axiosConfig"

type registerDataType = {
    firstName: string  // firstName: firstName
    lastName: string
    email: string
    password: string
    role: string
}

/* export const refreshAccessToken = async () => {
    const token = localStorage.getItem("refreshToken")
    const res = await axiosConfig.post("/auth/refresh", { refreshToken: token})
    return res.data
} */

export const refreshAccessToken = async (refreshToken: string) => {
    const res = await axiosConfig.post("/auth/refresh", { refreshToken: refreshToken})
    return res.data
}

export const register = async (data: registerDataType) => {
    const res = await axiosConfig.post("/auth/register", data)
    return res.data
}

export const login = async (email:string, password: string) => {
    const res = await axiosConfig.post("/auth/login", {email, password})
    return res.data
}

export const getMyProfile = async () => {
    const res = await axiosConfig.get("/auth/me")
    return res.data
}

export const adminRegister = async (data: registerDataType) => {
    const res = await axiosConfig.post("/auth/admin/register", data)
    return res.data
}