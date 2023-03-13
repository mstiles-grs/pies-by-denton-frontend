import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8080', // the base URL of your Go API
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  function (response) {
    const sessionToken = response.data.session_token;
    if (sessionToken) {
      Cookies.set('session_token', sessionToken, { path: '/' });
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
