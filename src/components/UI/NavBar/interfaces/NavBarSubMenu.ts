import { RouteLocationRaw } from 'vue-router'
import { INavBarLink } from './NavBarLink'
import { INavBarSubLink } from './NavBarSubLink'

export interface INavBarSubMenu extends INavBarLink{
  subLinks:(INavBarSubLink | RouteLocationRaw) []
}