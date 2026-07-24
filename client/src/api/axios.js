import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.detempete.uk/api',
  timeout: 10000,
});



export default API;