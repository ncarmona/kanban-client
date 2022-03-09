<template>
  <div class="flex transition delay-75 duration-300 hover:bg-violet-500">
    <Component class="h-6" :is="icon" />
    <span class="ml-2">{{text}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    icon: {
      required: true,
      type: Function
    },
    text: {
      required: false,
      type: String
    }
  },
  setup(props) {
    return { ...toRefs(props) } 
  }
})
</script>
