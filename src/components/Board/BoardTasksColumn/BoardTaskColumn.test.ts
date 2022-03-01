import { mount } from '@vue/test-utils'
import { ITask } from 'domain/interfaces/ITask'
import BoardTasksColumnComponent from './BoardTasksColumnComponent.vue'
import TaskComponent from '../Task/TaskComponent.vue'
import { ITag } from 'domain/interfaces/ITag'

describe("Board task column", () => {
  const tag1: ITag = {
    id: "1",
    name: "tag1",
    color: "bg-orange-500",
    board: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false
  }
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
  const tasks: ITask[] = [{
      id: "1",
      title: "Task1",
      description: "Task 1 description",
      author: "noel",
      tags: [tag2, tag3],
      backlog: false,
      deleted: false,
      disabled: false,
      modifiedAt: new Date(),
      createdAt: new Date(),
      column: "1"
    }, {
      id: "2",
      title: "Task1",
      description: "Task 2 description",
      author: "noel",
      tags: [tag1, tag2],
      backlog: false,
      deleted: false,
      disabled: false,
      modifiedAt: new Date(),
      createdAt: new Date(),
      column: "1"
    }, {
      id: "3",
      title: "Task3",
      description: "Task 3 description",
      author: "noel",
      tags: [tag1, tag2],
      backlog: false,
      deleted: false,
      disabled: false,
      modifiedAt: new Date(),
      createdAt: new Date(),
      column: "1"
  }]
  it('Tasks column should be rendered', () => {
    const expectedNumOfRenderedTasks:number = tasks.length
    const wrapper = mount(BoardTasksColumnComponent, {
      props: { tasks }
    })
    const taskRendered = wrapper.findAllComponents(TaskComponent).length

    expect(taskRendered).toBe(expectedNumOfRenderedTasks)
  })
})