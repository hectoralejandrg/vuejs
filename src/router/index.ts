import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

function lazyView(viewName: string) {
  return () => import(`../views/${viewName}.vue`);
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyView('HomeView'),
    },
    {
      path: '/about',
      name: 'about',
      component: lazyView('AboutView'),
      meta: { requiresAuth: true },
    },
  ],
})



router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  auth.checkAuth();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router
