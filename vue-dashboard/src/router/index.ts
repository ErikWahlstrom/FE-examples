import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/details',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (details.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/graph',
      name: 'graph',
      // route level code-splitting
      // this generates a separate chunk (details.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Graph.vue')
    }
  ]
})

export default router
