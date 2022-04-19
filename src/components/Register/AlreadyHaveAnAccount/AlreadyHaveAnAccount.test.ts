import { mount, VueWrapper } from '@vue/test-utils'
import AlreadyHaveAnAccountComponent from './AlreadyHaveAnAccountComponent.vue'

describe('AlreadyHaveAnAccount component', () => {
  let wrapper:VueWrapper
  const text:string = 'Have already an account?'
  
  beforeEach(() => wrapper = mount(AlreadyHaveAnAccountComponent))

  it('No registered text rendered', () => {
    const wrapperText:string = wrapper.find('span').text().trimEnd()

    expect(wrapperText).toStrictEqual(text)
  })
})