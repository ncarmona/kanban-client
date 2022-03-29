import { IBoardColumn } from './IBoardColumn';
import { IDomain } from './IDomain';
import { ITag } from './ITag';

export interface IBoard  extends IDomain {
  name: string,
  columns: IBoardColumn[],
  owner: string,
  editors: string[],
  viewers: string[],
  tags: ITag[]
}