import { INavBarLink } from './NavBarLink'
import { INavBarSubLink } from './NavBarSubLink'

export interface INavBarSubMenu extends INavBarLink{
  subLinks:INavBarSubLink[]
}