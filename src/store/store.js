// import { defineStore } from 'pinia';
// import Cookies from 'js-cookie';
// import axios from 'axios';

// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     token: null,
//   }),
//   getters: {
//     isAuthenticated: (state) => !!state.token,
//   },
//   actions: {
//     async login ()  {
//       try {
//         const response = await axios.post('/login/user', {
//           email: email.value,
//           password: password.value,
//         });

//         console.log('response', response)

//         if (response.ok) {
//           const sessionToken = response.headers.session_token;
//           this.token = sessionToken;
//         } else {
//           throw new Error('Login failed');
//         }
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     },
//   },
// });