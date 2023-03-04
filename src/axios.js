import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // the base URL of your Go API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;