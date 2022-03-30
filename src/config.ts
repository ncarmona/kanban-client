import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import(/* webpackChunkName: "boardsList" */ './views/BoardsListView.vue')
  },
  {
    name: 'board',
    path: '/board/:board',
    component: () => import(/* webpackChunkName: "board" */ './views/BoardView.vue')
  }
]
