import { INavBarLink } from './navBarLink';
import { INavBarSubMenu } from './NavBarSubMenu';

export interface INavBar {
  left: (INavBarLink | INavBarSubMenu)[],
  right: (INavBarLink | INavBarSubMenu)[],
}