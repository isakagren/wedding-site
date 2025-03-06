import { createRouter, createWebHistory } from 'vue-router'
import SwedishView from '../views/SwedishView.vue'
import EnglishView from '../views/EnglishView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Välkommen',
      component: SwedishView,
    },
    {
      path: '/en',
      name: 'Welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EnglishView,
    },
  ],
})

export default router
