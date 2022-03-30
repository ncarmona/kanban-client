import { IDomain } from './IDomain';

export interface IProfile extends IDomain {
  name: string,
  photo?: string,
  mail: string,
  boards: string[]
}