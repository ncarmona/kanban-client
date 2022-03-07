<template>
  <div class="flex text-white cursor-pointer hover:bg-violet-500">
    <Component :is="icon" class="flex text-white cursor-pointer hover:bg-violet-500 h-6" />
    <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { MenuIcon, XIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { MenuIcon },
  props: {
    toggler: { required: true }
  },
  setup(props) {
    const text = "Menu"
    const icon = computed(() => props.toggler ? XIcon : MenuIcon)
    return { text, icon }
  }
})
</script>
