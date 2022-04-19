import { VueWrapper, mount } from '@vue/test-utils'
import LoginFormComponent from './LoginFormComponent.vue'
import ButtonComponent from '../../UI/Button/ButtonComponent.vue'
import InputTextComponent from '../../UI/InputText/InputTextComponent.vue'

describe('loginFormComponent', () => {
  let loginFormWrapper: VueWrapper
  beforeEach(() => loginFormWrapper = mount(LoginFormComponent))
  it('login button disabled by default', () => {
    const buttonDisabled: boolean = loginFormWrapper
      .findComponent(ButtonComponent)
      .find('button')
      .element.disabled
    
    expect(buttonDisabled).toBeTruthy()
  })
  it('email and password fields must render', () => {
    const expectedTypes:string[] = ['email', 'password']
    const inputFieldsComponents = loginFormWrapper.findAllComponents(InputTextComponent)
    const inputFieldsComponentsTypes = inputFieldsComponents.map((e: VueWrapper) => e.find('input').attributes().type)

    expect(inputFieldsComponentsTypes).toStrictEqual(expectedTypes)
  })

  it('input fields with only blank spaces must not be considerated as filled field', async () => {
    const inputFieldsComponents = loginFormWrapper.findAllComponents(InputTextComponent)
    await inputFieldsComponents.forEach(async (input:VueWrapper) => await input.find('input').setValue('  '))
    const loginButton = loginFormWrapper.findComponent(ButtonComponent)
    const loginButtonDisabled = loginButton.find('button').element.disabled

    expect(loginButtonDisabled).toBeTruthy()

  })
  it('Once form is filled login button must be enabled', async () => {
    const inputFieldsComponents = loginFormWrapper.findAllComponents(InputTextComponent)
    const expectedFieldValues: string[] = ['mail@mail.com', 'password']
    await inputFieldsComponents.forEach(async (input:VueWrapper, index:number) => {
      await input.find('input').setValue(expectedFieldValues[index])
    })
    const loginButton = loginFormWrapper.findComponent(ButtonComponent)
    const loginButtonDisabled = loginButton.find('button').element.disabled

    expect(loginButtonDisabled).toBeFalsy()
  })

  it('Once form is fullfilled and user remove all the text in any input it will disable login button', async () => {
    const inputFieldsComponents = loginFormWrapper.findAllComponents(InputTextComponent)
    const expectedFieldValues: string[] = ['mail@mail.com', 'password']
    await inputFieldsComponents.forEach(async (input:VueWrapper, index:number) => {
      await input.find('input').setValue(expectedFieldValues[index])
    })
    const loginButton = loginFormWrapper.findComponent(ButtonComponent)
    await inputFieldsComponents[0].find('input').setValue('')
    const loginButtonDisabled = loginButton.find('button').element.disabled

    expect(loginButtonDisabled).toBeTruthy()    
  })
})