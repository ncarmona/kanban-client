<template>
  <div class="flex transition relative flex-col" @click="toggleSubmenu">
    <div class="flex flex-row">
      <NavBarLink :text="text" :icon="icon" />
      <Component :is="chevronIcon" class="chevron h-5"/>
    </div>
    <div class="submenu mt-2 md:pl-0 md:flex md:flex-col pl-5 delay-75 duration-300 md:bg-white md:rounded md:shadow-md md:absolute md:z-10 md:top-11" v-show="menuVisible">
      <div class="md:text-gray-700 p-3 hover:bg-violet-700 hover:text-white" v-for="link in subLinks" :key="link.text">
        <a v-if="isStringURL(link.url)" :href="link.url" class="submenu-item">{{link.text}}</a>
        <router-link v-else :to="link.url">{{link.text}}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, toRefs } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid' 
import NavBarLink from '../NavBarLink/NavBarLinkComponent.vue'
import { INavBarSubLink } from '../interfaces/NavBarSubLink'
import { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  components: { ChevronDownIcon, ChevronUpIcon ,NavBarLink },
  props: {
    icon: {
      required: true,
      type: Function
    },
    text: {
      required: true,
      type: String
    },
    subLinks: {
      required: true,
      type: Object as () => INavBarSubLink[] | RouteLocationRaw[]
    }
  },
  setup(props) {
    const menuVisible:Ref<boolean> = ref(false)
    const toggleSubmenu = () => menuVisible.value = !menuVisible.value
    const chevronIcon = computed(() => menuVisible.value ? ChevronUpIcon : ChevronDownIcon)
    const isStringURL = (link: INavBarSubLink | string ): boolean => typeof link === 'string'
    return { ...toRefs(props), toggleSubmenu, menuVisible, chevronIcon, isStringURL }
  },
})
</script>
