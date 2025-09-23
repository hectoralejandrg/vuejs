import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as null | { name: string },
  }),
  actions: {
    login(user: { name: string }) {
      this.isAuthenticated = true;
      this.user = user;
      localStorage.setItem('auth', 'true');
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('auth');
    },
    checkAuth() {
      this.isAuthenticated = localStorage.getItem('auth') === 'true';
    },
  },
})
