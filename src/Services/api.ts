import axios from "axios";

const host = process.env.REACT_APP_API_URL;

const Api = axios.create({
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  baseURL: host
});

export default Api;
