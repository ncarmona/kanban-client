<template>
  <Component :is="icon" class="h-5"/>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { CogIcon, HashtagIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: { CogIcon, HashtagIcon },
  props: {
    icon: {
      required: true,
      type: String
    }
  },
  setup(props) {
    return { ...toRefs(props) }
  }
})
</script>
