import { mount } from '@vue/test-utils'
import { ITask } from 'domain/interfaces/ITask'
import BoardTasksColumnComponent from './BoardTasksColumnComponent.vue'
import TaskComponent from '../Task/TaskComponent.vue'

describe("Board task column", () => {
  const tasks: ITask[] = [{
      id: "1",
      title: "Task1",
      description: "Task 1 description",
      author: "noel",
      tags: ["tag2", "tag3"],
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
      tags: ["tag1", "tag2"],
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
      tags: ["tag1", "tag2"],
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