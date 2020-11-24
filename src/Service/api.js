import axios from 'axios';

const api = axios.create({
    // Ip Desktop
    baseURL: 'http://192.168.0.7:4567/api'
    // Ip Work
    //baseURL: 'http://192.168.50.57:4567/api'
})

export default api;