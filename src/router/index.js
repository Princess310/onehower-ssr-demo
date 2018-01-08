import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const HomeView = () => import('../views/HomeView');
const AboutView = () => import('../views/AboutView');

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: HomeView,
      },
      {
        path: '/about',
        component: AboutView,
      },
    ],
  });
}
