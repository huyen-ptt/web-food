import axios from "axios";

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token') || '';
    config.baseURL = 'http://localhost:8000/api/';
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error.response: ', error.response);
    if (error.response && error.response.status === 401) {
        // xử lý khi hết hạn token hoặc token không đúng
        location.href = '/login'
    }
    return Promise.reject(error);
});
