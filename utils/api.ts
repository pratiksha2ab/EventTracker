import axios from "axios";
axios.defaults.responseType = "json";

const API = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
API.interceptors.response.use(
    (response) => {
      return response?.data;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );
  
  export { API };