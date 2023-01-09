import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PokemonViewVue from '../views/PokemonView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: PokemonViewVue,
    },
  ],
});

export default router;
