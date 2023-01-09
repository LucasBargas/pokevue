import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PokemonView from '../views/PokemonView.vue';
import NotFoundView from '../views/NotFoundView.vue';

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
      component: PokemonView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
});

export default router;
