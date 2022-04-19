import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import RegisterForm from './RegisterFormComponent.vue'
import InputTextComponent from '../../UI/InputText/InputTextComponent.vue'
import ButtonComponent from '../../UI/Button/ButtonComponent.vue'

describe('Register form component', () => {
  let wrapper:VueWrapper

  beforeEach(() => wrapper = mount(RegisterForm))

  it('Register form input types', () => {
    const expectedInputTypes:string[] = ['email', 'password', 'password']
    const inputs:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    const inputTypes = inputs.map((i:VueWrapper) => i.find('input').attributes().type)

    expect(inputTypes).toStrictEqual(expectedInputTypes)
  })

  it('Register button must be disabled by default', () => {
    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerInputButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')

    const isDisabled:boolean = registerInputButton.element.disabled

    expect(isDisabled).toBeTruthy()
  })

  it('All fields filled with valid inputs', async () => {
    const texts: string[] = ['mail@mail.com', 'password', 'password']

    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    const isDisabled:boolean = registerButton.element.disabled

    expect(isDisabled).toBeFalsy()
  })

  it('Email field contain an invalid email. Button must be disabled', async () => {
    const texts: string[] = ['mail', 'password', 'password']

    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    const isDisabled:boolean = registerButton.element.disabled

    expect(isDisabled).toBeTruthy()
  })
  it('passwords are not equal. Button must be disabled', async () => {
    const texts: string[] = ['mail@mail.com', 'pass', 'word']

    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    const isDisabled:boolean = registerButton.element.disabled

    expect(isDisabled).toBeTruthy()
  })
  it('Passwords are the same but are blank spaces. Button must be disabled', async () => {
    const texts: string[] = ['mail@mail.com', '   ', '   ']

    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    const isDisabled:boolean = registerButton.element.disabled

    expect(isDisabled).toBeTruthy()
  })
  it('Passwords are the same but are empty. Button must be disabled', async () => {
    const texts: string[] = ['mail@mail.com', '', '']

    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    const isDisabled:boolean = registerButton.element.disabled

    expect(isDisabled).toBeTruthy()
  })
  it('On click button the button label must change be disabled', async() => {
    const texts: string[] = ['mail@mail.com', 'pass', 'pass']
    const processingText:string = 'Creating account...'
    const inputComponents:VueWrapper[] = wrapper.findAllComponents(InputTextComponent)
    await inputComponents.forEach(async(input: VueWrapper, index: number) => {
      await input.find('input').setValue(texts[index])
    })

    const registerButtonComponent:VueWrapper = wrapper.findComponent(ButtonComponent)
    const registerButton:DOMWrapper<HTMLButtonElement> = registerButtonComponent.find('button')
    await registerButton.trigger('click')
    const registerButtonSpan = registerButton.find('span').text()

    expect(registerButtonSpan).toStrictEqual(processingText)
  })
})