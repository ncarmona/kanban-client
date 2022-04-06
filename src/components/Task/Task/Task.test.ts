import TaskComponent from './TaskComponent.vue'
import { DOMWrapper, mount } from '@vue/test-utils'
import { ITask } from 'domain/interfaces/ITask'
import { ITag } from 'domain/interfaces/ITag'
import TaskTagListComponent from '../TaskTagListComponent/TaskTagListComponent.vue'

describe("Task component", () => {
  const tag2: ITag = {
    id: "2",
    name: "tag2",
    color: "bg-orange-500",
    board: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false
  }
  const tag3: ITag = {
    id: "1",
    name: "tag3",
    color: "bg-orange-500",
    board: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false
  }
  const task:ITask = {
      id: "1",
      title: "Task1",
      description: "Task 1 description",
      author: "noel",
      tags: [tag2, tag3],
      deleted: false,
      disabled: false,
      modifiedAt: new Date(),
      createdAt: new Date(),
      column: "1"
    }
  const wrapper = mount(TaskComponent, { props: { task } })
  const spanTexts = wrapper.findAll('span').map((e:DOMWrapper<HTMLSpanElement>) => e.text())
  it("Task title rendered", () => {
    const titleRendered:boolean = spanTexts.some((t:string) => t === task.title)
    expect(titleRendered).toBeTruthy()
  })
  it("Task description rendered", () => {
    const descriptionRendered:boolean = spanTexts.some((t:string) => t === task.description)
    expect(descriptionRendered).toBeTruthy()
  })
  it("Task tags rendered", () => {
    const taskTagListRendered = wrapper.findComponent(TaskTagListComponent).exists()

    expect(taskTagListRendered).toBeTruthy()
  })
})