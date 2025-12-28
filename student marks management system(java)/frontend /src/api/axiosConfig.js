import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// Optional: Add interceptors for error handling
API.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data || "Server Error";
        return Promise.reject(message);
    }
);

export default API;