import { mount, VueWrapper } from '@vue/test-utils'
import NavBarLinkComponent from './NavBarLinkComponent.vue'
import { AcademicCapIcon } from '@heroicons/vue/outline'

describe('NavBar link component', () => {
  const iconText:string = 'IconText'
  const icon = AcademicCapIcon

  const linkWithText: VueWrapper = mount(NavBarLinkComponent, {
    props: { text: iconText, icon: icon }
  })
  const linkWithoutText: VueWrapper = mount(NavBarLinkComponent, {
    props: { icon: icon }
  })

  it('Link with optional text', () => {
    const textIcon:string = linkWithoutText.find('span').text()
    expect(textIcon).toBe('')
  })
  it('Link with text', () => {
    const textIcon:string = linkWithText.find('span').text()
    expect(textIcon).toBe(iconText)
  })
  it('Icon rendered', () => {
    const iconExists:boolean = linkWithText.findComponent(icon).exists()
    expect(iconExists).toBeTruthy()
  })
})