import axios from 'axios'

const url = 'https://regres.in/api/';

const axiosInstance = axios.create({
    baseURL: url
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    put(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint)
    }
}