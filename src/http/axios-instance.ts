import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000
});

// İf you need interceptors
http.interceptors.request.use(function (config) {
    console.log("interceptor request", config);
    return config;
}, function (error) {
    console.log("interceptor request err", error);
    return Promise.reject(error);
})

http.interceptors.response.use(function (response) {
    console.log("interceptor response", response);
    return response;
}, function (error) {
    console.log("interceptor response err", error);
    return Promise.reject(error);
});