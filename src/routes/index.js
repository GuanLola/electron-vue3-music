import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/', redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('../views/recommend/index.vue')
  },
  {
    path: '/singers',
    component: () => import('../views/singers/index.vue')
  },
  {
    path: '/rank',
    component: () => import('../views/rank/index.vue')
  }
]

export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})