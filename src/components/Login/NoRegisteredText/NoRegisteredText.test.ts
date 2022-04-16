import { mount, VueWrapper } from '@vue/test-utils'
import NoRegisteredTextComponent from './NoRegisteredTextComponent.vue'

describe('NoRegosteredText component', () => {
  let wrapper:VueWrapper = mount(NoRegisteredTextComponent)
  const text:string = 'Have not registered?'
  
  beforeEach(() => wrapper = mount(NoRegisteredTextComponent))

  it('No registered text rendered', () => {
    const wrapperText:string = wrapper.find('span').text()

    expect(wrapperText).toStrictEqual(text)
  })
})