import { ButtonType } from './IButtonType'
import { IProcessing } from './IProcessing'

export interface IButton {
  autofocus?: boolean
  disabled?: boolean
  name: string
  type?: ButtonType,
  processing?: IProcessing
  label: string
}