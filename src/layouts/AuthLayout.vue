<template>
  <div class="flex h-screen">
    <div class="justify-center md:w-5/12 hidden md:block bg-violet-700 p-10">
      <img :src="AuthLogo" alt="kanban auth logo" />
    </div>
    <div class="flex flex-col md:w-7/12 p-10 w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLogo from '../assets/kanban_auto.svg'

export default defineComponent({
  setup() {
    return { AuthLogo }
  }
})
</script>
