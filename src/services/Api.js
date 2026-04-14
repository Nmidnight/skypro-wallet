import axios from "axios";

export const api = axios.create({
    baseURL: "https://wedev-api.sky.pro/api/",
});