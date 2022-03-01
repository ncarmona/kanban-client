import { DOMWrapper, mount } from '@vue/test-utils'
import { ITag } from 'domain/interfaces/ITag'
import TaskTagComponent from './TaskTagComponent.vue'

describe("Task tag component", () => {

  const tag:ITag = {
    id: "1",
    board: "1",
    color: "just a random color",
    createdAt: new Date(),
    modifiedAt: new Date(),
    deleted: false,
    disabled: false,
    name: "tag1"
  }
  const wrapper = mount(TaskTagComponent, { props: { tag } })
  it("Tag text should be rendered", () => {
    const tagText:DOMWrapper<HTMLSpanElement> | undefined = wrapper.findAll('span')
      .find((e: DOMWrapper<HTMLSpanElement>) => e.text() === tag.name)

    expect(tagText?.text()).not.toBeUndefined()
  })
  it("Tag should have color as background color", () => {
    const tagComponent:DOMWrapper<HTMLSpanElement> | undefined = wrapper.findAll('span')
      .find((e: DOMWrapper<HTMLSpanElement>) => e.text() === tag.name)
    const validTagColor:boolean | undefined = tagComponent?.element.classList.toString().includes(tag.color)

    expect(validTagColor).toBeTruthy()
  })
})