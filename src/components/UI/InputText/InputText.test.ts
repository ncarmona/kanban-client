import { BanIcon, EyeIcon } from '@heroicons/vue/solid'
import { mount, VueWrapper } from '@vue/test-utils'
import { RenderFunction } from 'vue'
import InputTextComponent from './InputTextComponent.vue'
import { IInputText } from './interfaces/IInputText'
import { InputType } from './interfaces/InputType'
describe("UI input text", () => {
  const name:string = 'labelname'
  const inputValue:string = 'inputString'
  const icon:RenderFunction = BanIcon
  const alt:string = 'alt text'
  const autocomplete = true
  const placeholder = 'placeholder text'
  const autofocus = true
  const disabled = true
  const max = 100
  const min = 1
  const pattern = '/src/i'
  const readonly = true
  const required = true

  let input: IInputText = { name, inputValue }

  afterEach(() => input = { name, inputValue })

  it('Label rendered', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperName:string = wrapper.find('label').text()
    expect(wrapperName).toStrictEqual(name)
  })
  it('Icon passed by parameter rendered', () => {
    input.icon = icon
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrappeIcon:boolean = wrapper.findComponent(BanIcon).exists()
    expect(wrappeIcon).toBeTruthy()
   
  })
  it('Non password type should not render toggle password mode', () => {
    input.type = InputType.EMAIL

    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperPasswordIcon:boolean = wrapper.findComponent(EyeIcon).exists()
    expect(wrapperPasswordIcon).toBeFalsy()
  })
  it('Password type should not render toggle password mode', () => {
    input.type = InputType.PASSWORD

    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperPasswordIcon:boolean = wrapper.findComponent(EyeIcon).exists()
    expect(wrapperPasswordIcon).toBeTruthy()
  })
  it('Alt attribute', () => {
    input.alt = alt

    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperAltText:string = wrapper.find('input').element.alt
    expect(wrapperAltText).toStrictEqual(alt)
  })
  it('Autocomplete attribute', () => {
    input.autocomplete = autocomplete
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperAutocomplete = wrapper.find('input').element.autocomplete
    expect(wrapperAutocomplete).toBeTruthy()
  })
  it('Autocomplete attribute must be disabled by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperAutocomplete = wrapper.find('input').element.autocomplete
    expect(wrapperAutocomplete).toBe("false")    
  })
  it('Specified placeholder must be visible inside the input', () => {
    input.placeholder = placeholder
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperPlaceholder = wrapper.find('input').element.placeholder
    expect(wrapperPlaceholder).toStrictEqual(placeholder)
  })
  it('autofocus must be disabled by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperAutofocus = wrapper.find('input').element.autofocus
    expect(wrapperAutofocus).toBeFalsy()
  })
  it('autofocus attribute', () => {
    input.autofocus = autofocus
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperAutofocus = wrapper.find('input').element.autofocus
    expect(wrapperAutofocus).toBeTruthy()    
  })
  it('disabled attribute', () => {
    input.disabled = disabled
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperDisabled = wrapper.find('input').element.disabled
    expect(wrapperDisabled).toBeTruthy()     
  })
  it('disabled attribute must be false by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperDisabled = wrapper.find('input').element.disabled
    expect(wrapperDisabled).toBeFalsy()     
  })
  it('max attribute must be empty by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperMax = wrapper.find('input').element.max
    expect(wrapperMax).toBe('') 
  })
  it('max attribute', () => {
    input.max = max
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperMax = wrapper.find('input').element.max
    expect(wrapperMax).toBe("100") 
  })
  it('min attribute must be empty by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperMin = wrapper.find('input').element.min
    expect(wrapperMin).toBe('') 
  })
  it('min attribute', () => {
    input.min = min
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperMin = wrapper.find('input').element.min
    expect(wrapperMin).toBe("1") 
  })
  it('pattern attribute must be empty by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperPattern = wrapper.find('input').element.pattern
    expect(wrapperPattern).toBe('')     
  })
  it('pattern attribute', () => {
    input.pattern = pattern
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperPattern = wrapper.find('input').element.pattern
    expect(wrapperPattern).toBe(pattern)       
  })
  it('readonly attribute must be false by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperReadonly = wrapper.find('input').element.readOnly
    expect(wrapperReadonly).toBeFalsy() 
  })
  it('readonly attribute', () => {
    input.readonly = readonly
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperReadonly = wrapper.find('input').element.readOnly
    expect(wrapperReadonly).toBeTruthy() 
  })
  it('required attribute must be false by default', () => {
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperRequired = wrapper.find('input').element.required
    expect(wrapperRequired).toBeFalsy()
  })
  it('required attribute', () => {
    input.required = required
    const wrapper:VueWrapper = mount(InputTextComponent, {
      props: { input }
    })
    const wrapperRequired = wrapper.find('input').element.required
    expect(wrapperRequired).toBeTruthy() 
  })
})