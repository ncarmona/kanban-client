import { CheckIcon } from '@heroicons/vue/outline'
import { mount, VueWrapper } from '@vue/test-utils'
import CheckBoxComponent from './CheckBoxComponent.vue'
import { ICheckBox } from './interfaces/ICheckbox'

describe('checkbox component', () => {
  const label: string = 'checkbox label'
  
  it('Label rendered', () => {
    const checked: boolean = false

    const data: ICheckBox = {
      label, checked
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })

    const labelText = wrapper.find('div').find('span').text()
    expect(labelText).toBe(label)
  })

  it('Checkbox checked must render check icon', () => {
    const checked: boolean = true

    const data: ICheckBox = {
      label, checked
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })
    const checkIcon = wrapper.getComponent(CheckIcon).element.classList.contains('invisible')
    expect(checkIcon).toBeFalsy()
  })

  it('Checkbox not checked must not render check icon', () => {
    const checked: boolean = false

    const data: ICheckBox = {
      label, checked
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })
    const checkIcon = wrapper.getComponent(CheckIcon).element.classList.contains('invisible')
    expect(checkIcon).toBeTruthy()    
  })

  it('Checkbox disabled must show not-allowed', () => {
    const checked: boolean = false
    const enabled: boolean = false
    const data: ICheckBox = {
      label, checked, enabled
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })
    const pointer: boolean = wrapper.find('div').element.classList.contains('cursor-not-allowed')

    expect(pointer).toBeTruthy()
  })
  it('Checkbox enabled must show pointer', () => {
    const checked: boolean = false
    const enabled: boolean = true
    const data: ICheckBox = {
      label, checked, enabled
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })
    const pointer: boolean = wrapper.find('div').element.classList.contains('cursor-pointer')

    expect(pointer).toBeTruthy()
  })
  it('Checkbox with enabled undefined must show pointer', () => {
    const checked: boolean = false

    const data: ICheckBox = {
      label, checked
    }
    const wrapper:VueWrapper = mount(CheckBoxComponent, {
      props: { data }
    })
    const pointer: boolean = wrapper.find('div').element.classList.contains('cursor-pointer')

    expect(pointer).toBeTruthy()
  })
})