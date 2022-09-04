import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import AboutUs from '../views/AboutUs.vue'
const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Menus
  },
  {
    path: '/about-us',
    name: 'About',
    component: AboutUs
  }

]
const router = createRouter({ history, routes })
export default router