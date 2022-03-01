import { IBoardColumn } from './IBoardColumn';
import { IDomain } from './IDomain';

export interface IBoard  extends IDomain {
  columns: IBoardColumn[],
  owner: string,
  editors: string[],
  viewers: string[],
  tags: string[]
}