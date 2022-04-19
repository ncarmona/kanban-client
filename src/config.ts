import { AdjustmentsIcon, ArchiveIcon, DocumentAddIcon, HomeIcon, LogoutIcon, UserIcon } from '@heroicons/vue/solid'
import { INavBarLink } from 'components/UI/NavBar/interfaces/NavBarLink'
import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ './views/HomeView.vue')
  },
  {
    name: 'board',
    path: '/board/:board',
    component: () => import(/* webpackChunkName: "board" */ './views/BoardView.vue')
  },
  {
    name: 'create-task',
    path: '/board/:board/create-task',
    component: () => import(/* webpackChunkName: "create-task" */ './views/BoardView.vue')
  },
  {
    name: 'backlog',
    path: '/board/:board/backlog',
    component: () => import(/* webpackChunkName: "backlog" */ './views/BacklogView.vue')
  },
  {
    name: 'board-configuration',
    path: '/board/:board/config',
    component: () => import(/* webpackChunkName: "board-configuration" */ './views/BoardView.vue')
  },
  {
    name: 'user-settings',
    path: '/user/:username/settings',
    component: () => import(/* webpackChunkName: "user-settings" */ './views/BoardView.vue')
  },
  {
    name: 'logout',
    path: '/user/:username/logout',
    component: () => import(/* webpackChunkName: "logout" */ './views/BoardView.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ './views/LoginView.vue')
  },

]

export const menuLinks = () => {
  const home = (): INavBarLink => { 
    return {
      text: "Home", icon: HomeIcon, type: 'link', link: {
        name: 'home'
      }
    } 
  }

  const createTask = (board: string): INavBarLink => { 
    return {
      text: "Create task", icon: DocumentAddIcon, type: 'link', link: {
        name: 'create-task',
        params: { board }
      }
    } 
  }

  const backlog = (board: string): INavBarLink => {
    return {
      text: "Backlog", icon: ArchiveIcon, type: 'link', link: {
        name: 'backlog',
        params: { board }
      }
    } 
  }
  const boardConfiguration = (board: string): INavBarLink => {
    return {
      text: "Board configuration", icon: AdjustmentsIcon, type: 'link', link: {
        name: 'board-configuration',
        params: { board }
      }
    } 
  }

  const logout = (username:string): INavBarLink => {
    return {
      text: "Logout", icon: LogoutIcon, type: 'link', link: {
        name: 'logout',
        params: {username }
      }
    } 
  }  
  const userSettings = (username: string): INavBarLink => {
    return {
      text: username, icon: UserIcon, type: 'link', link: {
        name: 'user-settings',
        params: {username }
      }
    } 
  }
  return { createTask, backlog, boardConfiguration, logout, userSettings, home }
}