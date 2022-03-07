<template>
  <div class="flex flex-col" @click="toggleSubmenu">
    <div class="flex flex-row">
      <NavBarLink :text="text" :icon="icon" />
      <Component :is="chevronIcon" class="chevron h-5"/>
    </div>
    <div class="submenu pl-5" v-show="menuVisible">
      <div v-for="link in subLinks" :key="link.text">
        <span class="submenu-item">{{link.text}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, toRefs } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid' 
import NavBarLink from '../NavBarLink/NavBarLinkComponent.vue'

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
      type: Object
    }
  },
  setup(props) {
    const menuVisible:Ref<boolean> = ref(false)
    const toggleSubmenu = () => menuVisible.value = !menuVisible.value
    const chevronIcon = computed(() => menuVisible.value ? ChevronUpIcon : ChevronDownIcon)
    return { ...toRefs(props), toggleSubmenu, menuVisible, chevronIcon}
  },
})
</script>
