import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.detempete.uk/api',
  timeout: 10000,
});

// https://api.detempete.uk/api


export default API;