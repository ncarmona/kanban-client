import { mount, VueWrapper } from '@vue/test-utils'
import ButtonComponent from './ButtonComponent.vue'
import { IButton } from './interfaces/IButton'
import { ButtonType } from './interfaces/IButtonType'
import { IProcessing } from './interfaces/IProcessing'

describe('UI Button', () => {
  it('Label rendered', () => {
    const label = 'label button'
    const button: IButton = { label }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const labelResult:string = wrapper.find('button').text()

    expect(labelResult).toStrictEqual(label)
  })

  it('Button enabled by default', () => {
    const label = 'label button'
    const button: IButton = { label }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const enabled = wrapper.find('button').element.disabled
    expect(enabled).toBeFalsy()
  })

  it('Button set as disabled', () => {
    const label = 'label button'
    const button: IButton = { label, disabled: true }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const enabled = wrapper.find('button').element.disabled
    expect(enabled).toBeTruthy()
  })

  it('Button set as enabled', () => {
    const label = 'label button'
    const button: IButton = { label, disabled: false }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const enabled = wrapper.find('button').element.disabled
    expect(enabled).toBeFalsy()
  })
  it('Button set as autofocus true', () => {
    const label = 'label button'
    const button: IButton = { label, autofocus: true }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const enabled = wrapper.find('button').element.autofocus
    expect(enabled).toBeTruthy()
  })
  it('Button set as autofocus false', () => {
    const label = 'label button'
    const button: IButton = { label, autofocus: false }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const enabled = wrapper.find('button').element.autofocus
    expect(enabled).toBeFalsy()
  })
  it('Assign button name', () => {
    const label = 'label button'
    const name: string = 'button-name'
    const button: IButton = { label, name }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const elementName = wrapper.find('button').element.name
    expect(elementName).toStrictEqual(name)
  })
  it('Assign type button to button', () => {
    const label = 'label button'
    const type: ButtonType = ButtonType.BUTTON
    const button: IButton = { label, type }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const elementType = wrapper.find('button').element.type
    expect(elementType).toStrictEqual(type)
  })
  it('Assign type submit to button', () => {
    const label = 'label button'
    const type: ButtonType = ButtonType.SUBMIT
    const button: IButton = { label, type }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const elementType = wrapper.find('button').element.type
    expect(elementType).toStrictEqual(type)
  })
  it('Assign type reset to button', () => {
    const label = 'label button'
    const type: ButtonType = ButtonType.RESET
    const button: IButton = { label, type }
    const wrapper:VueWrapper = mount(ButtonComponent, {
      props: { button }
    })
    const elementType = wrapper.find('button').element.type
    expect(elementType).toStrictEqual(type)
  })
})