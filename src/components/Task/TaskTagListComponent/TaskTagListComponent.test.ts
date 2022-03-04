import { mount } from '@vue/test-utils'
import { ITag } from 'domain/interfaces/ITag'
import TaskTagListComponent from './TaskTagListComponent.vue'
import TaskTagComponent from '../TaskTagComponent/TaskTagComponent.vue'

describe("Task tag list Component", () => {
  const tags: ITag[] = [{
    id: "1",
    board: "1",
    color: "",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    name: "tag1"
  }, {
    id: "2",
    board: "1",
    color: "",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    name: "tag2"
  }]
  const wrapper = mount(TaskTagListComponent, {props: { tags }})

  it("All tags are rendered", () => {
    const numOfTags:number = tags.length
    const numOfRenderedTasks:number = wrapper.findAllComponents(TaskTagComponent).length

    expect(numOfRenderedTasks).toBe(numOfTags)
  })
})