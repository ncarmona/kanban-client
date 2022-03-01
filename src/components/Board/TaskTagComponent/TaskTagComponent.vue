<template>
  <span :class="style">
    {{tag.name}}
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import {ITag} from '../../../domain/interfaces/ITag'

export default defineComponent({
  props: {
    tag: {
      required: true,
      type: Object as () => ITag
    }
  },
  setup(props) {
    const style = computed(() => "rounded text-xs text-center p " + props.tag.color)

    return { ...toRefs(props), style}
  }
})
</script>
