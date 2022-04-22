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
  },
  {
    path: '/parentComponent5',
    name: 'ParentComponent5',
    component: () => import(/* webpackChunkName: "parentComponent5" webpackPrefetch: true */ '@/views/ParentComponent5.vue')
  },
  {
    path: '/slotModalLayout',
    name: 'SlotModalLayout',
    component: () => import(/* webpackChunkName: "slotModalLayout" webpackPrefetch: true */ '@/views/SlotModalLayout.vue')
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "compositionAPI" webpackPrefetch: true */ '@/views/CompositionAPI.vue')
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "compositionAPIProvide" webpackPrefetch: true */ '@/views/CompositionAPIProvide.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import(/* webpackChunkName: "mixins" webpackPrefetch: true */ '@/views/Mixins.vue')
  },
  {
    path: '/customDirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customDirective" webpackPrefetch: true */ '@/views/CustomDirective.vue')
  },
  {
    path: '/storeAccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeAccess" webpackPrefetch: true */ '@/views/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
