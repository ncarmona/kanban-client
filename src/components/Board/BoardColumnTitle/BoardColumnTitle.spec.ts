import { mount } from '@vue/test-utils'
import BoardColumnTitleComponent from './BoardColumnTitleComponent.vue'

describe('BoardColumnTitleComponent', () => {
  it('should display header text', () => {
    const columnTitle = 'Hello Vue 3'
    const wrapper = mount(BoardColumnTitleComponent, { props: { columnTitle } })

    expect(wrapper.find('span').text()).toEqual(columnTitle)
  })
})