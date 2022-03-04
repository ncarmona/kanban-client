import { DOMWrapper, mount } from '@vue/test-utils'
import { IBoardColumn } from 'domain/interfaces/IBoardColumn'
import BoardColumnComponent from './BoardColumnComponent.vue'
import TaskComponent from '../../Task/Task/TaskComponent.vue'
import { ITag } from 'domain/interfaces/ITag'

describe("Board column", () => {
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
  const columnWithTasks: IBoardColumn = {
    name: "todo",
    default: true,
    position: 0,
    board: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    tasks: [{
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
  }
  const columnWithoutTasks: IBoardColumn = {
    name: "todo",
    default: true,
    position: 0,
    board: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    tasks: []
  }
  it('Should contain a title', () => {
    const columnTitle:string = columnWithTasks.name
    const wrapper = mount(BoardColumnComponent, { props: { column: columnWithTasks } })

    expect(wrapper.find('span').text()).toEqual(columnTitle)
  })

  it('Should contain no task message', () => {
    const noTaskText:string = "No tasks"

    const wrapper = mount(BoardColumnComponent, { props: { column: columnWithoutTasks } })
    const noTaskElement:DOMWrapper<HTMLSpanElement> | undefined = wrapper.findAll('span').find((e:DOMWrapper<HTMLSpanElement>) => e.text() === noTaskText) ?? undefined

    expect(noTaskElement?.text()).not.toBeUndefined()
  })

  it('Should contain a task', () => {
    const numOfTask:number = columnWithTasks.tasks.length
    const wrapper = mount(BoardColumnComponent, { props: { column: columnWithTasks } })
    const numOfAvailableTasks:number = wrapper.findAllComponents(TaskComponent).length

    expect(numOfAvailableTasks).toBe(numOfTask)
  })
})