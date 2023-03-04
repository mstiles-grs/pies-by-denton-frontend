import {createRouter} from 'vue-router'
import Homepage from './home/home.vue';
import SignUp from './sign-up/sign-up.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/sign-up/',
    component: SignUp
  },

]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}