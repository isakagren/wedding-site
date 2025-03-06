import { createRouter, createWebHashHistory } from 'vue-router'
import SwedishView from '../views/SwedishView.vue'
import EnglishView from '../views/EnglishView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Välkommen',
      component: SwedishView,
    },
    {
      path: '/en',
      name: 'Welcome',
      component: EnglishView,
    },
  ],
})

export default router
