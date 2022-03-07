<template>
  <div class="flex">
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
