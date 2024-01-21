import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/Register.vue'
import ProfileView from '../views/Profile.vue'
import WelcomeView from '../views/Welcome.vue'
import SettingsView from '../views/Settings.vue'
import TimestampView from '../views/Timestamps.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: "/register",
      name: 'register',
      component: RegisterView
    },
    {
      path: "/profile",
      name: 'profile',
      component: ProfileView
    },
    {
      path: "/welcome",
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: "/settings",
      name: 'settings',
      component: SettingsView
    },
    {
      path: "/timestamp",
      name: 'timestamp',
      component: TimestampView
    }

  ]
})

export default router



