import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

function lazyView(viewName: string) {
  return () => import(`../views/${viewName}.vue`);
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: lazyView('PublicView'),
    },
    {
      path: '/home',
      name: 'home',
      component: lazyView('ProtectedView'),
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
