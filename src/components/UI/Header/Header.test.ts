import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import HeaderComponent from './HeaderComponent.vue'

describe("UI Header", () => {
  const text = 'headerProp'
  let h1Props = {
    text: text,
    headerNumber: 1
  }
  let h2Props = {
    text: text,
    headerNumber: 2
  }
  let h3Props = {
    text: text,
    headerNumber: 3
  }
  let h4Props = {
    text: text,
    headerNumber: 4
  }

  it("Header renders text prop", () => {
    const wrapper = mount(HeaderComponent, {props: h1Props})
    const headerText = wrapper.text()
    expect(headerText).toStrictEqual(text)
  })
  it("Header tag accordly to headerNumber prop", () => {
    const headersProps = [h1Props, h2Props, h3Props, h4Props]
    const headers = ['h1', 'h2', 'h3', 'h4']
    const resuts: number[] = []

    headersProps.forEach((h:any, index:number) => {
      const wrapper = mount(HeaderComponent, {props: headersProps[index]})
      const headerMatches = wrapper.findAll(headers[index]).length
      resuts.push(headerMatches)
    })
    const result:boolean = resuts.every((v:any) => v === 1)

    expect(result).toBeTruthy()
  })
  it("Font size accordly to headerNumber prop", () => {
    const headersProps = [h1Props, h2Props, h3Props, h4Props]
    const headers = ['text-3xl', 'text-2xl', 'text-xl', 'text-lg']
    const resuts: boolean[] = []

    headersProps.forEach((h:any, index:number) => {
      const wrapper = mount(HeaderComponent, {props: headersProps[index]})
      const headerMatches = wrapper.classes().toString().includes(headers[index])
      resuts.push(headerMatches)
    })
    const result:boolean = resuts.every((v:any) => v )

    expect(result).toBeTruthy()
  })
})