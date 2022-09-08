import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/create_account',
    name: 'create_account',
    component: CreateAccountView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
