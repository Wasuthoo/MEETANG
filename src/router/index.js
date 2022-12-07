import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../views/appView.vue'),
      children: [
        {
          path: 'cashbook',
          component: () => import('../views/app/cashbook.vue')
        }, 
        {
          path: 'dashboard',
          component: () => import('../views/app/dashboard.vue')
        },    
        {
          path: 'savinggoal',
          component: () => import('../views/app/savingGoal.vue')
        },
        {
          path: 'nearme',
          component: () => import('../views/app/nearme.vue')
        }
      ]
    }
  ]
})

export default router
