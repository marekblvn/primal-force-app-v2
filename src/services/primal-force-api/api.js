import axios from "axios";
const baseUrl = process.env.REACT_APP_PMF_API_URL + "api";

const api = axios.create({
  baseURL: baseUrl,
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
