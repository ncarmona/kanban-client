import { RenderFunction } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export interface INavBarLink {
  text: string,
  icon: RenderFunction,
  type: string
  link: string | RouteLocationRaw
}