import { MenuIcon, XIcon } from '@heroicons/vue/solid'
import { mount, VueWrapper } from '@vue/test-utils'
import { ref, Ref } from 'vue'
import NavBarToggleComponent from './NavBarToggleComponent.vue'

describe('NavBarToggle component', () => {
  it('MenuIcon should if menu it is closed', () => {
    const toggler:Ref<boolean> = ref(true)
    const wrapper:VueWrapper = mount(NavBarToggleComponent, { props: {toggler}})
    
    const menuIconVisible = wrapper.findComponent(MenuIcon).isVisible()
    expect(menuIconVisible).toBeTruthy()
  })
  it('Text at the right side of the icon must be rendered', () => {
    const toggler:Ref<boolean> = ref(true)
    const wrapper:VueWrapper = mount(NavBarToggleComponent, { props: {toggler}})
    const text = "Menu"
    const menuText = wrapper.find('span').text()    

    expect(text).toStrictEqual(menuText)
  })
  it('XIcon should be visible if menu is opened', () => {
    const toggler:Ref<boolean> = ref(false)
    const wrapper:VueWrapper = mount(NavBarToggleComponent, { props: {toggler}})
    
    const menuIconVisible = wrapper.findComponent(XIcon).isVisible()
    expect(menuIconVisible).toBeTruthy()   
  })
})