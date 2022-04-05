import { mount, VueWrapper } from '@vue/test-utils'
import NavBarLinkComponent from './NavBarLinkComponent.vue'
import { AcademicCapIcon } from '@heroicons/vue/outline'
import { INavBarLink } from '../interfaces/NavBarLink'

describe('NavBar link component', () => {
  const text:string = 'IconText'
  const icon = AcademicCapIcon
  const url: INavBarLink = {
    icon, text, type:'link'
  }
  const wrapper: VueWrapper = mount(NavBarLinkComponent, {
    props: { url }
  })

  it('Text rendered', () => {
    const textIcon:string = wrapper.find('span').text()
    expect(textIcon).toBe(text)
  })
  it('Icon rendered', () => {
    const iconExists:boolean = wrapper.findComponent(icon).exists()
    expect(iconExists).toBeTruthy()
  })
})