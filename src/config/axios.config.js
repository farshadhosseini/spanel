import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/"

export const Axios = axios.create({
    baseURL: baseUrl
})