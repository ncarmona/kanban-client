import { ButtonType } from './IButtonType'

export interface IButton {
  autofocus?: boolean
  disabled?: boolean
  name?: string
  type?: ButtonType,
  value?:string
  label: string
}