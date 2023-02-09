import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Extras from '../views/ExtrasView.vue';
import Contacto from '../views/ContactoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'about',
      component: Contacto
    },
    {
      path: '/extras',
      name: 'extras',
      component: Extras
    }
  ]
})

export default router
