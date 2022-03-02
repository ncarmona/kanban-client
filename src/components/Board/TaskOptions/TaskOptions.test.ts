import { mount } from '@vue/test-utils'
import TaskOptionsComponent from './TaskOptionsComponent.vue'
describe('Task options', () => {
  it("Should num of icons", () => {
    const wrapper = mount(TaskOptionsComponent)
    const expectedNumberOfIcons = 3
    const numberOfIcons = wrapper.findAll('svg').length

    expect(numberOfIcons).toEqual(expectedNumberOfIcons)
  })
})