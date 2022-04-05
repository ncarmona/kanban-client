import { DOMWrapper, mount, VueWrapper, RouterLinkStub, shallowMount } from '@vue/test-utils'
import NavBarSubMenuComponent from './NavBarSubMenuComponent.vue'
import { AcademicCapIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { INavBarSubMenu } from '../interfaces/NavBarSubMenu'
import { INavBarSubLink } from '../interfaces/NavBarSubLink'

describe('NavBarSubMenu component', () => {
  let wrapper: VueWrapper
  const icon = AcademicCapIcon
  const text = "Submenu text"
  const subLinks: INavBarSubLink[] = [
    {text: "submenu1", url: 'aaa'},
    {text: "submenu2", url: 'aaa'},
    {text: "submenu3", url: 'aaa'}
  ]
  const menu: INavBarSubMenu = {
    text, icon,
    type: 'menu',
    subLinks
  }
  beforeEach(() => {
    wrapper = shallowMount(NavBarSubMenuComponent, {
      props: { menu },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })
  it('Submenu elements should be rendered', () => {
    const expectedSubLinksLength:number = subLinks.length
    const subLinksLength = wrapper.findAll('a')
      .filter((e:DOMWrapper<HTMLAnchorElement>) => e).length
    
    expect(subLinksLength).toEqual(expectedSubLinksLength)
  })
  it('Submenu links should not be visible by default', () => {
    const submenu = wrapper.findAll('a').filter((e:DOMWrapper<HTMLAnchorElement>) => e.classes().toString().includes('submenu-item'))
    const submenuVisible:boolean = submenu[0].isVisible()

    expect(submenuVisible).toBeFalsy()
  })

  it('Submenu should be visible when user clicks one time', async () => {
    await wrapper.find('div').trigger('click')
    const submenu = wrapper.findAll('a').filter((e:DOMWrapper<HTMLAnchorElement>) => e.classes().toString().includes('submenu-item'))
    const submenuVisible:boolean = submenu[0].isVisible()

    expect(submenuVisible).toBeTruthy()
  })
  it('Submenu should not be visible when user clicks two times', async () => {
    await wrapper.find('div').trigger('click')
    await wrapper.find('div').trigger('click')
    const submenu = wrapper.findAll('a').filter((e:DOMWrapper<HTMLAnchorElement>) => e.classes().toString().includes('submenu-item'))
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