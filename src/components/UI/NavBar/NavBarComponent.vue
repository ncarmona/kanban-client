<template>
  <div class="md:flex text-white">
    <NavBarToggler class="md:hidden p-3" @click="toggler"/>
    <div ref="navBar" class="md:flex md:grow md:mt-0 md:pb-0 mt-5 pb-3 hidden">
      <div v-for="item in navBarItems.left" :key="item.text">
        <NavBarLink class="p-3" v-if="isLink(item.type)" :text="item.text" :icon="item.icon" />
        <NavBarSubMenu class="p-3" v-if="isSubMenu(item.type)" :text="item.text" :icon="item.icon" :subLinks="item.subLinks" />
      </div>
      <hr class="mt-4 mb-4"/>
      <div v-for="item in navBarItems.right" :key="item.text">
        <NavBarLink class="p-3" v-if="isLink(item.type)" :text="item.text" :icon="item.icon" />
        <NavBarSubMenu class="p-3" v-if="isSubMenu(item.type)" :text="item.text" :icon="item.icon" :subLinks="item.subLinks" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref, toRefs } from 'vue'
import NavBarLink from './NavBarLink/NavBarLinkComponent.vue'
import NavBarSubMenu from './NavBarSubMenu/NavBarSubMenuComponent.vue'
import NavBarToggler from './NavBarToggler/NavBarToggleComponent.vue'

export default defineComponent({
  components: { NavBarLink, NavBarSubMenu, NavBarToggler },
  props: {
    navBarItems: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const navBar:Ref<any> = ref(null)

    const isLink = (type: string) => type === 'link'
    const isSubMenu = (type: string) => type === 'menu'
    const toggler = () => navBar.value.classList.toggle('hidden')
    const closeMenu = () => navBar.value.classList.add('hidden')

    onBeforeMount(() => window.addEventListener('resize', () => closeMenu()))

    return { ...toRefs(props), toggler, isLink, isSubMenu, navBar }
  }
})
</script>
