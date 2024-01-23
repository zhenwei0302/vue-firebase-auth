import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginPage.vue';
import Home from '../views/HomePage.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {

    if (to.matched.some(route => route.meta.requiresAuth)) {
      // Check authentication status here
      const isAuthenticated = store.state.user === null ? false : true/* Your authentication check */;

      if (isAuthenticated) {
        next();
      } else {
        next('/');
      }
    } else {
      next();
    }
  });


export default router;
