<template>
  <div class="flex text-white cursor-pointer hover:bg-violet-500">
    <MenuIcon class="flex text-white cursor-pointer hover:bg-violet-500 h-6" />
    <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MenuIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { MenuIcon },
  setup(props) {
    const text = "Menu"
    return { text }
  }
})
</script>
