import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Enterprise from '../views/Enterprise.vue'
import Contactsales from '../views/Contactsales.vue'
// import Notfound from '../views/Notfound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/contact-sales',
    name: 'Contactsales',
    component: Contactsales
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
