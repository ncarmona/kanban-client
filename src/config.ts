import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [{
  path: '/',
  component: import(/* webpackChunkName: "board" */ './views/BoardView.vue')
}]
