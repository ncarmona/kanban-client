import { IDomain } from './IDomain';

export interface ITask extends IDomain {
  title: string,
  description: string,
  column: string,
  author: string,
  tags: string[],
  backlog: boolean
}