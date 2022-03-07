<template>
  <Component :is="icon" class="transition delay-75 duration-300 hover:text-violet-700 h-5"/>
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
