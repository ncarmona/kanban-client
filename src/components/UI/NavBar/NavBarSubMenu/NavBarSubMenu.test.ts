import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import NavBarSubMenuComponent from './NavBarSubMenuComponent.vue'
import { AcademicCapIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'

describe('NavBarSubMenu component', () => {
  let wrapper: VueWrapper
  const icon = AcademicCapIcon
  const text = "Submenu text"
  const subLinks = [ {text: "submenu1"}, {text: "submenu2"}, {text: "submenu3"} ]
  beforeEach(() => {
    wrapper = mount(NavBarSubMenuComponent, {
      props: { icon: icon, text: text, subLinks: subLinks }
    })
  })
  it('Submenu elements should be rendered', () => {
    const expectedSubLinksLength:number = subLinks.length + 1
    const subLinksLength = wrapper.findAll('span').length

    expect(subLinksLength).toEqual(expectedSubLinksLength)
  })
  it('Submenu links should not be visible by default', () => {
    const submenu = wrapper.findAll('span').filter((e:DOMWrapper<HTMLSpanElement>) => e.classes().toString().includes('submenu-item'))
    const submenuVisible:boolean = submenu[0].isVisible()

    expect(submenuVisible).toBeFalsy()
  })

  it('Submenu should be visible when user clicks one time', async () => {
    await wrapper.find('div').trigger('click')
    const submenu = wrapper.findAll('span').filter((e:DOMWrapper<HTMLSpanElement>) => e.classes().toString().includes('submenu-item'))
    const submenuVisible:boolean = submenu[0].isVisible()

    expect(submenuVisible).toBeTruthy()
  })
  it('Submenu should not be visible when user clicks two times', async () => {
    await wrapper.find('div').trigger('click')
    await wrapper.find('div').trigger('click')
    const submenu = wrapper.findAll('span').filter((e:DOMWrapper<HTMLSpanElement>) => e.classes().toString().includes('submenu-item'))
    const submenuVisible:boolean = submenu[0].isVisible()

    expect(submenuVisible).toBeFalsy()
  })
  it('Chevron down by default', () => {
    const chevronDown = wrapper.findComponent(ChevronDownIcon).exists()
    expect(chevronDown).toBeTruthy()
  })
  it('Chevron up when user clicks component', async () => {
    await wrapper.find('div').trigger('click')
    const chevronDown = wrapper.findComponent(ChevronUpIcon).exists()

    expect(chevronDown).toBeTruthy()    
  })
  it('Chevron down when user clicks two times component', async () => {
    await wrapper.find('div').trigger('click')
    await wrapper.find('div').trigger('click')
    const chevronDown = wrapper.findComponent(ChevronDownIcon).exists()

    expect(chevronDown).toBeTruthy()   
  })
})