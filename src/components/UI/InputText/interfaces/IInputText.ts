import { Ref, RenderFunction } from 'vue';
import { InputType } from './InputType';

export interface IInputText {
  type?: InputType
  alt?: string
  autocomplete?: boolean
  autofocus?: boolean
  disabled?: boolean
  max?: number
  maxlength?: number
  minlength?: number
  min?: number
  name: string
  pattern?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  inputValue: string
  icon?: RenderFunction
}