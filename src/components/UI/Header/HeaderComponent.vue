<template>
  <component :is="header" :class="classFormat">
    {{text}}
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    headerNumber: {
      required: true,
      type: Number
    },
    text: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const headerSize: any = {
      1: 'text-3xl',
      2: 'text-2xl',
      3: 'text-xl',
      4: 'text-lg'
    }
    const header = computed(():string => 'h' + props.headerNumber)
    const classFormat = computed(() => headerSize[props.headerNumber] + ' text-violet-700')

    return { header, classFormat }
  },
})
</script>
