<template>
  <div class="text-white absolute w-full">
    <NavBarToggler class="md:hidden p-3" @click="toggler"/>
    <div ref="navBar" class="md:flex md:mt-0 md:pb-0 mt-5 pb-3 hidden">
      <div class="md:flex md:justify-start md:grow">
        <NavBarGroup :items="navBarItems.left" />
      </div>
      <hr class="mt-4 mb-4"/>
      <div class="md:flex md:justify-items-end">
        <NavBarGroup :items="navBarItems.right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref, toRefs } from 'vue'
import NavBarToggler from './NavBarToggler/NavBarToggleComponent.vue'
import NavBarGroup from './NavBarGroup/NavBarGroupComponent.vue'

export default defineComponent({
  components: { NavBarToggler, NavBarGroup },
  props: {
    navBarItems: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const navBar:Ref<any> = ref(null)

    const toggler = () => navBar.value.classList.toggle('hidden')
    const closeMenu = () => navBar.value.classList.add('hidden')

    onBeforeMount(() => window.addEventListener('resize', () => closeMenu()))

    return { ...toRefs(props), toggler, navBar }
  }
})
</script>
