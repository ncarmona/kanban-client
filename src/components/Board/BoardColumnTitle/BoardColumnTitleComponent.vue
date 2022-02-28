<template>
  <span class="text-black uppercase font-bold">{{columnTitle}}</span>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    columnTitle: {
      required: true,
      type: String
    }
  },
  setup(props) {
    return {...toRefs(props)}
  }
})
</script>
