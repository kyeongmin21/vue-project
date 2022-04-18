import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" webpackPrefetch: true */ '@/views/About.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "dataBinding" webpackPrefetch: true */ '@/views/DataBinding.vue')
  },
  {
    path: '/vFor',
    name: 'Vfor',
    component: () => import(/* webpackChunkName: "vFor" webpackPrefetch: true */ '@/views/Vfor.vue')
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: () => import(/* webpackChunkName: "nestedComponent" webpackPrefetch: true */ '@/views/NestedComponent.vue')
  },
  {
    path: '/parentComponent',
    name: 'ParentComponent',
    component: () => import(/* webpackChunkName: "parentComponent" webpackPrefetch: true */ '@/views/ParentComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
