import { mount, VueWrapper } from '@vue/test-utils'
import { ITag } from 'domain/interfaces/ITag'
import TaskFooterComponent from './TaskFooterComponent.vue'
import TaskTagListComponent from '../TaskTagListComponent/TaskTagListComponent.vue'
import TaskOptionsComponent from '../TaskOptions/TaskOptionsComponent.vue'
import { CogIcon, HashtagIcon } from '@heroicons/vue/outline'
import ToggleTagsTaskComponent from '../ToggleTagsTask/ToggleTagsTaskComponent.vue'

describe('Task footer component', () => {
  let wrapper:VueWrapper
  const tags: ITag[] = [{
    id: "1",
    board: "default",
    color: "red",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    name: "tag1"
  }, {
    id: "2",
    board: "default",
    color: "green",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    name: "tag2"
  }]

  beforeEach(() => wrapper = mount(TaskFooterComponent, { props: { tags } }))

  it("Tags should be displayed by default", () => {
    const tagListExists = wrapper.findComponent(TaskTagListComponent).exists()
    expect(tagListExists).toBeTruthy()
  })
  it("Task options should not be displayed by default", () => {
    const tagListExists = wrapper.findComponent(TaskOptionsComponent).exists()
    expect(tagListExists).toBeFalsy()    
  })

  it("Task tags list should not be displayed if user clicks in toggle button", async () => {
    const toggleButton = wrapper.find('button')
    await toggleButton.trigger('click')
    const tagListExists = wrapper.findComponent(TaskTagListComponent).exists()

    expect(tagListExists).toBeFalsy()
  })
  it("Task options should be displayed if user clicks in toggle button", async () => {
    const toggleButton = wrapper.find('button')
    await toggleButton.trigger('click')
    const tagListExists = wrapper.findComponent(TaskOptionsComponent).exists()

    expect(tagListExists).toBeTruthy()
  })

  it("Toggle component should be rendered", () => {
    const tagListExists = wrapper.find('button').findComponent(ToggleTagsTaskComponent).exists()

    expect(tagListExists).toBeTruthy()    
  })
})