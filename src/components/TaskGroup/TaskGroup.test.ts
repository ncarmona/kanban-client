import TaskGroupComponent from './TaskGroupComponent.vue'
import HeaderComponent from '../UI/Header/HeaderComponent.vue'
import TaskComponent from '../Task/Task/TaskComponent.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { ITask } from 'domain/interfaces/ITask'

describe('Task group test', () => {
  let wrapper:VueWrapper
  const tasks: ITask[] = [
  {
    author: 'Noel',
    column: 'todo',
    createdAt: new Date(),
    deleted: false,
    description: 'test task',
    disabled: false,
    modifiedAt: new Date(),
    tags: [],
    title: 'task test'
  },
  {
    author: 'Noel',
    column: 'todo',
    createdAt: new Date(),
    deleted: false,
    description: 'test task',
    disabled: false,
    modifiedAt: new Date(),
    tags: [],
    title: 'task test2'
  },
  {
    author: 'Noel',
    column: 'todo',
    createdAt: new Date(),
    deleted: false,
    description: 'test task',
    disabled: false,
    modifiedAt: new Date(),
    tags: [],
    title: 'task test3'
  },
  ]
  const backlog = {
      selected: [],
      unselected: tasks
  }
  const textHeader: string = 'Backlog'
  const field: string = 'unselected'

  beforeEach(() => {
    wrapper = mount(TaskGroupComponent, {
      props: {backlog, textHeader, field}
    })
  })

  it('Header test rendered', () => {
    const header: string = wrapper.findComponent(HeaderComponent).text()
    expect(header).toStrictEqual(textHeader)
  })

  it('Unselected task are rendered', () => {
    const expectedNumOfTasks:number = backlog.unselected.length
    const numOfTasks:number = wrapper.findAllComponents(TaskComponent).length
    expect(numOfTasks).toBe(expectedNumOfTasks)
  })
})
