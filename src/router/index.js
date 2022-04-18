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
  },
  {
    path: '/parentComponent2',
    name: 'ParentComponent2',
    component: () => import(/* webpackChunkName: "parentComponent2" webpackPrefetch: true */ '@/views/ParentComponent2.vue')
  },
  {
    path: '/parentComponent3',
    name: 'ParentComponent3',
    component: () => import(/* webpackChunkName: "parentComponent3" webpackPrefetch: true */ '@/views/ParentComponent3.vue')
  },
  {
    path: '/parentComponent4',
    name: 'ParentComponent4',
    component: () => import(/* webpackChunkName: "parentComponent4" webpackPrefetch: true */ '@/views/ParentComponent4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
