import axiosConfig from "./axiosConfig"

export const createPost = async (data: any) => {
    const res = await axiosConfig.post("/post/create", data)
    return res.data
}

export const getAllPost = async (page: number, limit: number) => {
    const res = await axiosConfig.get(`/post?page=${page}&limit=${limit}`)
    return res.data
}

export const getMyPost = async (page: number, limit: number) => {
    const res = await axiosConfig.get(`/post/me?page=${page}&limit=${limit}`)
    return res.data
}