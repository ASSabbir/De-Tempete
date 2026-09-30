import axios from 'axios';

const API = axios.create({
  baseURL: 'https://admin.detempete.uk/api',
  timeout: 10000,
});

// https://admin.detempete.uk/api


export default API;