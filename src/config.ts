import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'board',
    path: '/board/:board',
    component: () => import(/* webpackChunkName: "board" */ './views/BoardView.vue')
  }
]
