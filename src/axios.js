import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // the base URL of your Go API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the session token in the Authorization header
instance.interceptors.request.use(config => {
  const sessionToken = getCookie('session_token');
  if (sessionToken) {
    config.headers.Authorization = `Bearer ${sessionToken}`;
  }
  return config;
});

// Utility function to retrieve a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

export default instance;