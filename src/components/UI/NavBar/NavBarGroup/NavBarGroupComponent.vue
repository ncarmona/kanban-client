<template>
  <div v-for="item in items" :key="item.text">
    <NavBarLink class="p-3" v-if="isLink(item.type)" :text="item.text" :icon="item.icon" />
    <NavBarSubMenu class="p-3" v-if="isSubMenu(item.type)" :text="item.text" :icon="item.icon" :subLinks="item.subLinks" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import NavBarLink from '../NavBarLink/NavBarLinkComponent.vue'
import NavBarSubMenu from '../NavBarSubMenu/NavBarSubMenuComponent.vue'

export default defineComponent({
  components: { NavBarLink, NavBarSubMenu},
  props: {
    items: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const isLink = (type: string) => type === 'link'
    const isSubMenu = (type: string) => type === 'menu'

    return { ...toRefs(props), isLink, isSubMenu }
  },
})
</script>
