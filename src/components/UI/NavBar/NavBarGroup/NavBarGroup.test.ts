import { AdjustmentsIcon, ArchiveIcon, DocumentAddIcon } from '@heroicons/vue/outline'
import { VueWrapper, mount } from '@vue/test-utils'
import NavBarGroupComponent from './NavBarGroupComponent.vue'
import NavBarLinkComponent from '../NavBarLink/NavBarLinkComponent.vue'
import { INavBarLink } from '../interfaces/NavBarLink'


describe('NavBarGroup component', () => {
  const group: INavBarLink[] = [
    { text: "Create task", icon: DocumentAddIcon, type: "link" },
    { text: "Backlog", icon: ArchiveIcon, type: "link" },
    { text: "Board configuration", icon: AdjustmentsIcon, type: "link" },
  ]
  let wrapper:VueWrapper
  beforeEach(() => {
    wrapper = mount(NavBarGroupComponent, {
      props: { items: group }
    })
  })
  it('All elements are rendered', () => {
    const expectedNumOfLinks:number = group.length
    const numOfLinks:number = wrapper.findAllComponents(NavBarLinkComponent).length

    expect(numOfLinks).toEqual(expectedNumOfLinks)
  })
  it('All link text are rendered', () => {
    const texts = group.map((l:INavBarLink) => l.text)
    const componentTexts = wrapper.findAllComponents(NavBarLinkComponent).map((n:VueWrapper) => n.text())
    expect(texts).toStrictEqual(componentTexts)
  })
})